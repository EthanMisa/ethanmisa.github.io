import React from 'react';
import me from './me.jpeg';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="introduction">
        <div className="picture-wrap">
          <img src={me} className="picture" alt="Your Name" />
        </div>
        <h1>Ethan Misa</h1>
      </div>

      <div className="info-wrap">
        <div>
          Hello world! My name is Ethan and I am a third year computer science
          student at the University of Waterloo. I'm hoping to apply my passion
          for problem solving and technology in the world of software
          development. Please see below for my previous internship experience.
        </div>
      </div>
    </header>
  );
}

export default Header;
