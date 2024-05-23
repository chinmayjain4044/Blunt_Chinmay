import React, { useState } from 'react';
import './BrandStories.css';
import satishRay from './assets/satish-ray.jpg';
import Picture1 from './assets/Picture1.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';

const BrandStories = () => {
  const profiles = [
    { name: 'Profile 1', image: img1, description: 'lorem ipsum, lorem' },
    { name: 'Profile 2', image: img4, description: 'lorem ipsum, lorem' },
    { name: 'Satish Ray', image: satishRay, description: 'YouTuber, Actor' },
    { name: 'Profile 3', image: img3, description: 'lorem ipsum, lorem' },
    { name: 'Profile 4', image: img2, description: 'lorem ipsum, lorem' },
  ];

  const [profileOrder, setProfileOrder] = useState([...profiles]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrevProfile = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newOrder = [...profileOrder];
    const firstProfile = newOrder.shift();
    newOrder.push(firstProfile);
    setProfileOrder(newOrder);
    setTimeout(() => setIsTransitioning(false), 600); // Adjust timing as needed
  };

  const handleNextProfile = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const newOrder = [...profileOrder];
    const lastProfile = newOrder.pop();
    newOrder.unshift(lastProfile);
    setProfileOrder(newOrder);
    setTimeout(() => setIsTransitioning(false), 600); // Adjust timing as needed
  };

  return (
    <div className="brand-stories-container">
      <h1>Your Brand, Our Stories</h1>
      <p className="subtitle"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q </p>
      <div className="brands">
        <img src={Picture1} alt="Brand 1" />
      </div>
      <div className={`profiles ${isTransitioning ? 'transitioning' : ''}`}>
        {profileOrder.map((profile, index) => (
          <div
            key={index}
            className={`profile ${index === 2 ? 'profile-active' : ''} ${
              index === 0 || index === profileOrder.length - 1 ? 'profile-img1 profile-imgg2' : ''
            }`}
          >
            <img src={profile.image} alt={profile.name} />
            {index === 2 && profile.description && (
              <p>
                {profile.name} <br /> {profile.description}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrevProfile}>&larr; </button>किरदार
        <button onClick={handleNextProfile}> &rarr;</button>
      </div>
    </div>
  );
};

export default BrandStories;
