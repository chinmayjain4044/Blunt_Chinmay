import React from 'react';
import './Page6.css';
import foodImage from './assets/food-image.png'; // Ensure this path is correct
import instagramIcon from './assets/instagram.png'; // Add your Instagram image path
import facebookIcon from './assets/facebook.png'; // Add your Facebook image path
import twitterIcon from './assets/twitter.png'; // Add your Twitter image path
import youtubeIcon from './assets/youtube.png'; // Add your YouTube image path

const Page6 = () => {
  return (
    <div className="Page6">
      <header className="Page6-header">
        <h1>Case Studies</h1>
      </header>
      <main className="content">
        <div className="case-study">
          <div className="case-study-image-container">
            <img src={foodImage} alt="Food" className="case-study-image" />
          </div>
          <div className="case-study-text">
            <h2>Restro Ads Shoot That</h2>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed</p>
            <div className="arrow-icon">→</div>
          </div>
        </div>
        <div className="case-study-links">
          <a href="#case-study-1" className="case-study-link">Case study 01</a>
          <a href="#case-study-2" className="case-study-link">Case study 01</a>
          <a href="#case-study-3" className="case-study-link">Case study 01</a>
          <a href="#case-study-4" className="case-study-link">Case study 01</a>
          <a href="#case-study-5" className="case-study-link">Case study 01</a>
          <a href="#case-study-6" className="case-study-link">Case study 01</a>
          <a href="#case-study-7" className="case-study-link">Case study 01</a>
          <a href="#case-study-8" className="case-study-link">Case study 01</a>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <h2>The Show Must Go on...</h2>
          <div className="social-icons">
            <a href="#instagram"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="#facebook"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="#twitter"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="#youtube"><img src={youtubeIcon} alt="YouTube" /></a>
          </div>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
            <a href="#services">Services</a>
          </nav>
          <p>Alright reserve & copyright 2023 by The Blunt</p>
        </div>
      </footer>
    </div>
  );
}

export default Page6;
