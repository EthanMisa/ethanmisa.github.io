import React from 'react';
import me from './me.jpeg';
import './styles.css';

const linkedinLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const emailLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="email">
    <path d="M27 4.71H5a4.505 4.505 0 0 0-4.5 4.5v13.58c0 2.481 2.019 4.5 4.5 4.5h22c2.481 0 4.5-2.019 4.5-4.5V9.21c0-2.481-2.019-4.5-4.5-4.5zm-1.33 3L24.29 8.8l-7.36 5.81c-.55.43-1.31.43-1.86 0L7.97 9 6.333 7.71h19.338zM27 24.29H5c-.827 0-1.5-.673-1.5-1.5V9.305l9.71 7.665c.82.65 1.81.97 2.79.97s1.97-.32 2.79-.97l9.71-7.662V22.79c0 .827-.673 1.5-1.5 1.5z"></path>
  </svg>
);

const githubLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
function Header() {
  return (
    <header className="header">
      <div className="introduction">
        <div className="picture-wrap">
          <img src={me} className="picture" alt="Your Name" />
        </div>
        <div className="contact-info">
          <h1>Ethan Misa</h1>
          <hr className="horizontal-line" />
          <h4>Software Developer</h4>
          <div className="socials-container">
            {linkedinLogo()}
            {emailLogo()}
            {githubLogo()}
          </div>
        </div>
      </div>

      <div className="info-wrap">
        <h3 className="hello-world">Hello World</h3>
        <div>
          My name is Ethan and I am a third year computer science student at the
          University of Waterloo. I'm hoping to apply my passion for problem
          solving and technology in the world of software development. Please
          see below for my previous internship experience.
        </div>
      </div>
    </header>
  );
}

export default Header;
