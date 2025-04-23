import React, { useState, useEffect, useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isWalletConnected, connectWallet, walletAddress, disconnectWallet } = useContext(AppContext);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container header-container">
        <div className="logo">
          <Link to="/">
            <img src="/assets/images/amogus-logo.png" alt="Amogus Logo" />
            <span>Amogus</span>
          </Link>
        </div>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link active"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
              >
                About us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="mogs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
              >
                $MOGS
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="airdrop"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
              >
                Airdrop
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link"
              >
                Contacts
              </ScrollLink>
            </li>
          </ul>
        </nav>
        
        <motion.button 
          className="connect-wallet-btn"
          onClick={isWalletConnected ? disconnectWallet : connectWallet}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isWalletConnected ? formatAddress(walletAddress) : "Connect Wallet"}
        </motion.button>
        
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;