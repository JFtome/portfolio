import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Josh Tome</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I'm a web developer passionate about creating beautiful and functional
          user experiences. I love working with React, JavaScript, and modern web
          tools.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li><strong>Portfolio Website:</strong> The site you're on now!</li>
          <li><strong>Weather App:</strong> A React app that shows weather using a public API.</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: your-email@example.com</p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">github.com/yourusername</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Josh Tome</p>
      </footer>
    </div>
  );
}

export default App;
