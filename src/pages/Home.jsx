import React, { useState, useEffect, useCallback } from "react";
import "./Home.scss";

const backgroundImages = [
  "https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
  "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  }, []);

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
  };

  useEffect(() => {
    const timer = setTimeout(goToNext, 3000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, goToNext]);

  return (
    <header id="home" className="hero">
      <div className="hero-background">
        {backgroundImages.map((image, index) => (
          <div
            key={image} 
            className={`background-slide ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Raj Shrivastava <span>and Associates</span>
        </h1>
        <div className="decorative-line"></div>
        <h3 className="hero-tagline">Advocates & Legal Consultants</h3>
        <p className="hero-description">
          Excellence in Legal Practice • Commitment to Justice • Trusted Legal
          Counsel
        </p>
        <button className="hero-cta btn-primary">Get Legal Consultation</button>
      </div>

      <div className="slider-arrows">
        <button className="arrow-btn" onClick={goToPrev} aria-label="Previous Slide">
          &#10094;
        </button>
        <button className="arrow-btn" onClick={goToNext} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
    </header>
  );
};

export default Home;

