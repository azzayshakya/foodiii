import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";
import "../Css/HeroSection.css";
import Navbar from "./Navbar";


const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [textVisible, setTextVisible] = useState(false);

  const heroImages = [
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/775031/pexels-photo-775031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 500);
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % heroImages.length
        );
        setTimeout(() => {
          setFadeIn(true);
        }, 50);
      }, 500);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="hero-section">
      <div
        className={`hero-background ${fadeIn ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <div className="header-container">
            <Navbar />
          </div>

          <div className="text-content">
            <h1 className={`hero-title ${textVisible ? "text-visible" : ""}`}>
              Foodiii
            </h1>
            <h3
              className={`hero-subtitle ${textVisible ? "text-visible" : ""}`}
            >
              Delicious food delivered right to your doorstep
            </h3>
            <p className={`hero-tagline ${textVisible ? "text-visible" : ""}`}>
              Fast • Fresh • Flavorful
            </p>
            <div className={`hero-button ${textVisible ? "text-visible" : ""}`}>
              <Link to="/foodCards">
                <button>
                  VIEW MENU{" "}
                  <span>
                    <TbHandClick />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-indicators">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`indicator-dot ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
