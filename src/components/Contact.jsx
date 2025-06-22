import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          mobile: "",
          city: "",
          message: ""
        });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
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
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>

          <div className="input-field">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            name="message"
            placeholder="Your Message"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <span className="focus"></span>
        </div>

        <div className="btn-box btns">
          <button type="submit" className="btn">Submit</button>
        </div>

        {status && <p style={{ marginTop: "1rem", color: "lightgreen" }}>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
