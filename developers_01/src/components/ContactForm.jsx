import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => alert("Form submitted!"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="border p-2 w-full mb-2"
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
