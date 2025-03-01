import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Reach out to us for inquiries and assistance.</p>
      <ContactForm/>
    </div>
  );
};

export default Contact;
