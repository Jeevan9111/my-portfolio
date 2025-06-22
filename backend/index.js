const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  });

// POST Route
app.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, city, message } = req.body;

    if (!fullName || !email || !phone || !city || !message) {
      return res.status(400).json({ message: '❗All fields are required' });
    }

    const newContact = new Contact({ fullName, email, phone, city, message });
    await newContact.save();

    res.status(200).json({ message: '✅ Message saved successfully!' });
  } catch (error) {
    console.error('❌ Error saving message:', error);
    res.status(500).json({ message: '❌ Server error. Try again later.' });
  }
});

// GET route (optional for admin use)
app.get('/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('❌ Error fetching messages:', error);
    res.status(500).json({ message: '❌ Server error. Try again later.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('🚀 Portfolio backend running successfully');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
