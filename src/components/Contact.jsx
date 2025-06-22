import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://my-portfolio-1-hmyi.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ fullName: "", email: "", phone: "", city: "", message: "" });
      } else {
        setStatus("❌ " + result.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section className="contact show-animate" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input type="number" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea name="message" placeholder="Your Message" rows="10" value={formData.message} onChange={handleChange} required></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
        </div>

        {status && (
          <p style={{ marginTop: "1rem", color: status.includes("✅") ? "lightgreen" : "tomato" }}>{status}</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
