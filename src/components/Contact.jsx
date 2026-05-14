import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contact } from "../data/data";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      import.meta.env.VITE_EMAILJS_SERVICE_ID === "placeholder_service" ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID === "placeholder_template" ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY === "placeholder_key"
    ) {
      console.log("Simulated email:", {
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        message: form.current.message.value,
      });
      alert("Simulation: Email not sent, but data logged in console.");
    } else {
      emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(
        () => alert("Message sent successfully!"),
        (error) => alert("Failed to send message: " + error.text)
      );
    }
  };

  return (
    <section className="contact section container">
      <h1>{contact.title}</h1>
      <h2>{contact.subtitle}</h2>
      <p>{contact.description}</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        {contact.fields.map((field, i) =>
          field.type === "textarea" ? (
            <textarea
              key={i}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          ) : (
            <input
              key={i}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          )
        )}
        <button type="submit" className="btn-primary">
          {contact.ctaLabel}
        </button>
      </form>
    </section>
  );
}
