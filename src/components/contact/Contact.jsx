import React, { useRef, useState } from 'react';
import './contact.css'; // Add your styles here
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(''); // Reset message status

    // EmailJS Integration
    emailjs
      .sendForm(
        'service_sd3agpp', // Your Service ID
        'template_bm4cjrb', // Your Template ID
        formRef.current,    // Reference to the form
        'QHlf6jqK0eJLGakxx' // Your Public Key
      )
      .then(
        (result) => {
          console.log('Success:', result.text);
          setMessage("Thanks, I'll reply ASAP! 😊");
        },
        (error) => {
          console.error('Error:', error.text);
          setMessage('Failed to send message. Please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>I do receive your messages and will respond ASAP if the valid email is provided :)</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Contact Options */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>piankihth@gmail.com</h5>
            <a href="mailto:piankihth@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
            aria-label="Full Name"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            aria-label="Email"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            aria-label="Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span className="form__response">{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
