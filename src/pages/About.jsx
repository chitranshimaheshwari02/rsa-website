import React from "react";
import { FaBalanceScale, FaHandshake, FaGavel } from 'react-icons/fa'; 
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll'; 
import "./About.scss";

import officeImage from '../images/MP_High_Court.png'; 

const About = () => {

  const [sectionRef, isSectionVisible] = useFadeInOnScroll({ threshold: 0.1 });

  return (
    <section 
      className={`about ${isSectionVisible ? 'is-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="about-grid">
        <div className="about-visual">

          <img src={officeImage} alt="Raj Shrivastava & Associates Office in Gwalior" />
        </div>
        <div className="about-content">
          <h2>About Our Firm</h2>
          <p>
            Welcome to our law practice, proudly serving clients at the Hon'ble Madhya Pradesh High Court, Gwalior Bench, and the District & Family Courts of Gwalior, as well as the Delhi High Court and District Courts, and the Rajasthan High Court, Jaipur Bench. Our team brings comprehensive legal expertise and a deep understanding of local regulations, with a proven track record of success.
          </p>
          <p>
            We specialize in Family, Divorce, Service, Civil, and Criminal matters, offering
            tailored legal solutions. Our advocates are committed to upholding the highest
            standards of professionalism and ethical practice.
          </p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <FaBalanceScale className="icon" />
          <h3>Integrity & Justice</h3>
          <p>Driven by values of integrity and respect, we strive to secure just outcomes for our clients.</p>
        </div>
        <div className="feature-item">
          <FaHandshake className="icon" />
          <h3>Client-Focused</h3>
          <p>We believe in clear communication, transparent advice, and dedicated service from start to finish.</p>
        </div>
        <div className="feature-item">
          <FaGavel className="icon" />
          <h3>Proven Expertise</h3>
          <p>Reliable representation and trusted legal advice from seasoned advocates in Gwalior’s legal district.</p>
        </div>
      </div>
    </section>
  );
};

export default About;