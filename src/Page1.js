import React from 'react'
import './page1.css'

const Page1 = () => {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav">
          <a href="Page1.js" className="nav-link">Home</a>
          <a href="Page1.js" className="nav-link">Brands</a>
          <a href="Page1.js" className="nav-link">Team</a>
          <a href="Page1.js" className="nav-link">Contact</a>
        </nav>
      </header>
      <main className="main-content">
        <h1 className="title">The Blunt</h1>
        <p className="subtitle">
          <span className="arrow">↗</span>
          <span className="subtitle-text">कहानियां छोटे शहरों की</span>
        </p>
      </main>
    </div>
  )
}

export default Page1
