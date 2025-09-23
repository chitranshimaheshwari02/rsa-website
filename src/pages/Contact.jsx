import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';
import "./Contact.scss";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [sectionRef, isSectionVisible] = useFadeInOnScroll({ threshold: 0.1 });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...'); 

    emailjs
      .sendForm(
        'service_qlvsfxa',   
        'template_bo67nv2',  
        form.current,
        '1pDEY-P_cDktkCGdO'   
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatusMessage('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Raj Shrivastava & Associates - Gwalior</title>
        <meta 
          name="description" 
          content="Get in touch with Raj Shrivastava & Associates in Gwalior. Find our address at Millenium Plaza, call us, or send an email for a legal consultation." 
        />
        <link rel="canonical" href="https://yourwebsite.com/get-in-touch" />
      </Helmet>

      <section 
        className={`contact-page ${isSectionVisible ? 'is-visible' : ''}`}
        ref={sectionRef}
      >
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>We are available for consultations. Please reach out to us with your legal inquiries.</p>
        </div>

        <div className="contact-grid">
          <div className="form-container">
            <h3>Send a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Submit Inquiry</button>
              {statusMessage && <p className="status-message">{statusMessage}</p>}
            </form>
            <p className="disclaimer">
              Submitting this form does not create an attorney-client relationship.
            </p>
          </div>

          <div className="details-container">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <strong>Address</strong>
                  <span>F-07, Millenium Plaza, Govindpuri, Gwalior, M.P.</span>
                </div>
              </li>
              <li>
                <FaPhone className="icon" />
                <div>
                  <strong>Phone</strong>
                  <span>+91-9039186886</span>
                </div>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <div>
                  <strong>Email</strong>
                  <span>rajshrivastava1998@gmail.com</span>
                  <span>csrajsiddarth@gmail.com</span>
                </div>
              </li>
            </ul>
            
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.800000000000!2d78.18000000000000!3d26.23500000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6976a4ad419%3A0x296f8a49e6273e9f!2sMillennium%20Plaza%2C%20Govindpuri%2C%20Gwalior%2C%20Madhya%20Pradesh%20474011!5e0!3m2!1sen!2sin!4v1679000000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;