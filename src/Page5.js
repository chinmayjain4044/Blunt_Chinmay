import React, { useState } from 'react';
import './Page5.css';
import logos from './assets/logos.png'; // Single image for all logos
import person1 from './assets/satish-ray.jpg'; // Import your person images
import person2 from './assets/img1.png';
import person3 from './assets/img2.png';
import person4 from './assets/img3.png';
import person5 from './assets/img4.png';

const people = [
  { img: person1, name: 'John Doe', profession: 'Photographer' },
  { img: person2, name: 'Satish Ray', profession: 'Youtuber, Actor' },
  { img: person3, name: 'Jane Smith', profession: 'Musician' },
  { img: person4, name: 'Mike Johnson', profession: 'Writer' },
  { img: person5, name: 'Anna Brown', profession: 'Designer' },
];

const Page5 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
  };

  return (
    <div className="page5">
      <div className="brands-section">
        <h2>Your Brand, Our Stories</h2>
        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q</p>
        <div className="logos">
          <img src={logos} alt="Logos" />
        </div>
      </div>
      <div className="carousel">
        <button onClick={prevPerson} className="carousel-btn">◀</button>
        <div className="carousel-images">
          {people.map((person, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? 'active' : ''
              }`}
              style={{
                transform: `translateX(${
                  (index - currentIndex) * 100
                }%)`,
                opacity: index === currentIndex ? 1 : 0.5,
              }}
            >
              <img src={person.img} alt={person.name} />
              {index === currentIndex && (
                <div className="description">
                  <h3>{person.name}</h3>
                  <p>{person.profession}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button onClick={nextPerson} className="carousel-btn">▶</button>
      </div>
    </div>
  );
};

export default Page5;
