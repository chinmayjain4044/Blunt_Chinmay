// src/pages/Page3.js

import React from 'react';
import './Page3.css';
import castImage from './assets/cast.png';

const Page3 = () => {
    return (
        <div className="page3-container">
            <div className="text-containers">
                <h1>Be part of Our Stories</h1>
                <h2>The Cast</h2>
            </div>
            <div className="image-container">
                <img src={castImage} alt="The Cast" />
            </div>
        </div>
    );
}

export default Page3;
