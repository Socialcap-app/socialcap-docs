// src/components/CustomFooter.js
import React from 'react';
import './CustomFooter.css'; // Import your custom styles

const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Docs</h5>
            <ul>
              <li><a href="/docs/intro">Introduction</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Community</h5>
            <ul>
              <li><a href="https://discordapp.com/invite/docusaurus">Discord</a></li>
              <li><a href="https://twitter.com/socialcap_">Twitter</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>More</h5>
            <ul>
              <li><a href="https://github.com/socialcap-app">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Socialcap Team, Built with Docusaurus.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
