import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>
      
      <div className="container">
        <div className="footer-top">
          <motion.div 
            className="footer-logo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="logo-container">
              <img src="/assets/images/amogus-logo.png" alt="Amogus Logo" />
              <span>Amogus</span>
            </div>
            <div className="fly-container">
              <p>Let's Fly!</p>
              <div className="rocket-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5L3 20L6.5 18.5M4.5 16.5L9 12M4.5 16.5L16.5 4.5C17.3284 3.67157 18.6716 3.67157 19.5 4.5C20.3284 5.32843 20.3284 6.67157 19.5 7.5L7.5 19.5M9 12L7.5 19.5M16 16L18 18M12 12L14 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="https://twitter.com/amogus" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z" />
              </svg>
            </a>
            <a href="https://t.me/amogus" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a href="https://discord.gg/amogus" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
            <a href="https://github.com/amogus" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://etherscan.io/token/amogus" target="_blank" rel="noopener noreferrer">
              <div className="etherscan-icon">
                <div className="icon-bg"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.243 8.063v3.022L7.409 14l3.348 1.97v2.69c-.187-.115-.366-.24-.496-.365l-5.078-2.977v-1.889l5.078-2.978c.13-.13.309-.26.496-.388zM12 6.83c.257 0 .513.094.752.234l5.078 2.978V11.9l-5.078 2.977c-.24.14-.495.24-.752.24-.26 0-.537-.1-.775-.24L6.17 11.9V10.04l5.055-2.977c.238-.14.515-.234.775-.234zm1.243 8.914V13.06L16.578 14l-3.335 1.743zm4.935-2.582v-.07l-.07.046.07.023z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-link"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-link"
          >
            About us
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="footer-link"
          >
            Contact us
          </ScrollLink>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>All rights reserved. Amogus © 2024 — ∞</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;