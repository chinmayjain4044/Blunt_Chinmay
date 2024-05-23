import React from 'react';
import './Page4.css';
import portfolioImage1 from './assets/image1.png'; // Update with the correct path to your image
import portfolioImage2 from './assets/image2.png';
import portfolioImage3 from './assets/image3.png';
import portfolioImage4 from './assets/image4.png';
import portfolioImage5 from './assets/image5.png';
import portfolioImage6 from './assets/image6.png';
import portfolioImage7 from './assets/image7.png';
import portfolioImage8 from './assets/image8.png';
import portfolioImage9 from './assets/image9.png';

const Page4 = () => {
  return (
    <div className="Page4">
      <div className="portfolio-section">
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-column">
            <img src={portfolioImage1} alt="Portfolio 1" />
            <img src={portfolioImage2} alt="Portfolio 2" />
            <img src={portfolioImage3} alt="Portfolio 3" />
          </div>
          <div className="portfolio-column middle-column">
            <img src={portfolioImage4} alt="Portfolio 4" />
            <img src={portfolioImage5} alt="Portfolio 5" />
            <img src={portfolioImage6} alt="Portfolio 6" />
          </div>
          <div className="portfolio-column">
            <img src={portfolioImage7} alt="Portfolio 7" />
            <img src={portfolioImage8} alt="Portfolio 8" />
            <img src={portfolioImage9} alt="Portfolio 9" />
          </div>
        </div>
      </div>
      <div className="we-do-best-section">
        <h2>We do Best</h2>
        <div className="we-do-best-grid">
          <div className="we-do-best-item">
            <div className="icon sketch-production"></div>
            <h3>Sketch Production</h3>
            <ul>
              <li>A few points</li>
              <li>A few points</li>
              <li>A few points</li>
            </ul>
          </div>
          <div className="we-do-best-item" style={{backgroundColor:'white'}}>
            <div className="icon ads-promotion"></div>
            <h3 style={{color:"rgba(13, 1, 37, 1)"}}>Ads & Promotion</h3>
            <ul>
              <li style={{color:"rgba(13, 1, 37, 1)"}}>A few points</li>
              <li style={{color:"rgba(13, 1, 37, 1)"}}>A few points</li>
              <li style={{color:"rgba(13, 1, 37, 1)"}}>A few points</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;
