import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import URLValidation from './get';

function Header() {
  return (
    <header>
      <div className="container">
        <img src={require('./images/SafeNet.png')} alt="logo" width="50px" height="50px" />
        <h1>SafeNet...</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#partners">Collaborators</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <h2>Protect Your Information and Data with Accurate Intelligence</h2>
        <p>“Secure your business: Use advanced IP scoring, malicious URL & malware detection tools for robust protection.” Stay vigilant!</p>
        {/* Using Link component to navigate to the URLValidation page */}
        <Link to="/validate">
          <button>Validate</button>
        </Link>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features">
      <h2>Our Features</h2>
      <p>Effective feature representation is essential for identifying malicious URLs, Suspicious sites, viruses, and malware detection. <br />
        Common features include:
        <br />
        <b>URL Components:</b> Analyzing the domain, path, query parameters, and subdomains.
        <br />
        <b>Lexical Features:</b> Examining the length, character distribution, and presence of suspicious keywords.
        <br />
        <b>Host Reputation:</b> Checking the reputation of the hosting server or domain.
        <br />
        <b>Content Features:</b> Analyzing the content of the webpage associated with the URL.
        <br />
        <b>Network Features:</b> Considering network-level information, such as IP addresses and DNS records.
      </p>
      <img src={require('./images/features.jpg')} alt="Features" width="800px" height="500px" />
    </section>
  );
}

function Collaborators() {
  return (
    <section id="partners">
      <div className="containerr">
        <h2 className="ha">Our Amazing Collaborators</h2>
        <div className="main-card">
          <div className="cards">
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/first.png')} alt="1st" />
                </div>
                <div className="details">
                  <div className="name">First Company</div>
                </div>
              </div>
            </div>
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/second.png')} alt="2nd" />
                </div>
                <div className="details">
                  <div className="name">Second Company</div>
                </div>
              </div>
            </div>
            <div className="cardd">
              <div className="contentt">
                <div className="imgg">
                  <img src={require('./images/third.png')} alt="3rd" />
                </div>
                <div className="details">
                  <div className="name">Third Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 SafeNet. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the main page */}
        <Route path="/" element={<MainPage />} />
        {/* Route for the URL validation page */}
        <Route path="/validate" element={<URLValidation />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Collaborators />
      <Contact />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
