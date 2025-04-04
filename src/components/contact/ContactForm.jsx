"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ContactForm.css";

export default function ContactForm({ onSubmit, formSubmitted }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    enquiryType: "general",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="contact-form-container">
      <h2>Send us a Message</h2>
      <p className="form-subtitle">
        Fill out the below form for Dealership & General Enquiries.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-container">
              <i className="bi bi-person input-icon"></i>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-container">
              <i className="bi bi-envelope input-icon"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-container">
              <i className="bi bi-phone input-icon"></i>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="enquiryType">Enquiry Type</label>
            <div className="input-container">
              <i className="bi bi-chat-dots input-icon"></i>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              >
                <option value="general">General Enquiry</option>
                <option value="product">Product Information</option>
                <option value="delar">Dealership Information</option>
                <option value="support">Reparing Support</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <div className="input-container">
            <i className="bi bi-tag input-icon"></i>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter message subject"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <div className="input-container">
            <i className="bi bi-pencil text-input-icon"></i>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={formSubmitted}
        >
          {formSubmitted ? (
            <>
              <i className="bi bi-check-circle"></i>
              Message Sent!
            </>
          ) : (
            <>
              <i className="bi bi-send"></i>
              Send Message
            </>
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {formSubmitted && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <i className="bi bi-check-circle"></i>
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
