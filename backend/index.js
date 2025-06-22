const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Contact = require('./models/Contact');

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// POST route to save contact form data
app.post('/contact', async (req, res) => {
  try {
    const { fullName, email, phone, city, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      city,
      message
    });

    await newContact.save();
    res.status(200).json({ message: '✅ Message saved successfully!' });
  } catch (error) {
    console.error('❌ Error saving message:', error);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});

// ✅ GET route to fetch all messages
app.get('/messages', async (req, res) => {
  try {
    const allMessages = await Contact.find().sort({ _id: -1 });
    res.status(200).json(allMessages);
  } catch (error) {
    console.error('❌ Error fetching messages:', error);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
