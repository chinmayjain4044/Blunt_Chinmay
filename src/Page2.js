import React from 'react';
import './page2.css';
import handWritingImage from './assets/handsign.png'; // Ensure this path is correct

const Page2 = () => {
  return (
    <div className="Page2">
      <header className="Page2-header">
        <nav className="nav-bar">
          <a href="#ads-shoot">Ads Shoot</a>
          <a href="#short-films">Short Films</a>
          <a href="#web-series">Web Series</a>
          <a href="#promos">Promos</a>
          <a href="#ads-shoot">Ads Shoot</a>
          <a href="#short-films">Short Films</a>
          <a href="#web-series">Web Series</a>
          <a href="#promos">Promos</a>
          <a href="#ads-shoot">Ads Shoot</a>
          <a href="#short-films">Short Films</a>
          <a href="#web-series">Web Series</a>
        </nav>
      </header>
      <main className="content">
        <div className="image-container">
          <img src={handWritingImage} alt="Hand Writing" />
        </div>
        <div className="text-container">
          <h1>कहानी</h1>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q 
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q
          </p>
        </div>
      </main>
    </div>
  );
}

export default Page2;
