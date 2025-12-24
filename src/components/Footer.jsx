import './Footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (

    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MyPortfolio</h3>
            <p>Showcasing my projects and skills</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-container">
              <a
                href="https://github.com/VishwasAlhat124"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon github"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/vishwas-alhat-037926243/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Vishwas Alhat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
