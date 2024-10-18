import React, { useState } from 'react';
import './get.css';

function URLValidation() {
  const [url, setUrl] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlRegex = /^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\/[a-zA-Z0-9.-]+)*$/;
    if (urlRegex.test(url)) {
      setIsValid(true);
      alert("URL is valid!");
    } else {
      setIsValid(false);
      alert("Please enter a valid URL.");
    }
  };

  const handleScroll = () => {
    document.getElementById("urlForm").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header>
        <div>
          <nav>
            <h1>URL Validation</h1>
          </nav>
        </div>
      </header>
      <video autoplay muted loop plays-inline preload='auto' className="myvideo">
        <source src={require("./video/video bg.mp4")} type="video/mp4" />
      </video>
      <div className="custom-scrollbar">
        <h1 style={{ textAlign: "center" }}>DOCUMENTATION</h1>
        <h3 style={{ textAlign: "left" }}>What is Malicious URL and Malware?</h3>
        <p style={{ textAlign: "justify", fontSize: "14px" }}>
          A malicious URL is a link that is created with the intent of promoting scams and frauds. Clicking on such a link can download a multitude of malware that will compromise your machine or network.
          <br />
          <br />
          These URLs are well-known threats in cybersecurity that act as an efficient tool for propagating viruses, worms, and other types of malware online. They can be delivered via email links, text messages, browser popup ads, and more. Eventually, this allows the attacker to gain access to the users’ sensitive data, such as banking information, social security number, email password, etc.
          Malware, or “malicious software,” is a term that describes any malicious program or code that is harmful to systems.Malware is any software intentionally designed to cause disruption to a computer.
          <br />
          An efficient way of steering clear of this extensive racket is by blocking or blacklisting such URLs, which is precisely what we aim to help with.
        </p>
        <img src={require("./images/working.png")} alt="How it works?" width="380px" height="580px" />
      </div>
      <div className="content">
        <b>
          <h1 style={{ color: "#f596ba", marginTop: "50px" }}>
            SAFENET... <br />
            Your Shield against Suspicious links, <br />
            Check Out there...
          </h1>
        </b>
        <button id="scrollButton" onClick={handleScroll}>
          Validate your URL
        </button>
      </div>
      <form id="urlForm" onSubmit={handleSubmit}>
        <b>
          <h2 style={{ color: "#f596ba", fontFamily: "initial" }}>
            “Are you a URL? Because We’d like to validate our connection!”
          </h2>
          <h3>
            <label for="urlInput" style={{ color: "#fff" }}>
              Enter a URL:
            </label>
          </h3>
        </b>
        <input
          type="url"
          id="urlInput"
          name="url"
          pattern="^(http|https):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}(\/[a-zA-Z0-9.-]+)*$"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Check URL</button>
      </form>

      <footer>
        <div className="container">
          <p>&copy; 2024 SafeNet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default URLValidation;