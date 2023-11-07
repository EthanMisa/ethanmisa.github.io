import React from 'react'
import me from './me.jpeg';
function Header() {
    return (
        <header className="header">
        <div className="profile">
          <img src={'./me.jpeg'} alt="Your Name" />
          <h1>Your Name</h1>
          <p>A brief introduction about yourself</p>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Add links to other social media profiles as needed */}
        </div>
      </header>
    );
}

export default Header