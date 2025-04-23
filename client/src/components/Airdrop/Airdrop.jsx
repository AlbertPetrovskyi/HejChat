import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/AppContext';
import './Airdrop.css';

const Airdrop = () => {
  const { isWalletConnected, connectWallet, walletAddress } = useContext(AppContext);
  const [isRegistered, setIsRegistered] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleAirdropRegistration = async () => {
    if (!isWalletConnected) {
      await connectWallet();
      return;
    }
    
    // Call backend API to register for airdrop
    try {
      const response = await fetch('/api/users/register-airdrop', {  // Updated from /api/register-airdrop
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: walletAddress })
      });
      
      if (response.ok) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error("Error registering for airdrop:", error);
    }
  };

  return (
    <section id="airdrop" className="airdrop-section">
      <div className="background-ellipse red"></div>
      
      <div className="stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="airdrop-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get ready for the Airdrop!
          </motion.h2>
          
          <motion.div variants={itemVariants} className="airdrop-steps">
            <div className="airdrop-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="12" fill="#D9D9D9"/>
                  <path d="M7 13L10 16L17 9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Mint NFTs</h3>
            </div>
            
            <div className="airdrop-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 8L15 12H18C18 15.3137 15.3137 18 12 18C10.8595 18 9.7962 17.6549 8.9066 17.0599L7.4993 18.4672C8.7927 19.4322 10.3369 20 12 20C16.4183 20 20 16.4183 20 12H23L19 8ZM6 12C6 8.6863 8.6863 6 12 6C13.1405 6 14.2038 6.34508 15.0934 6.94015L16.5007 5.53284C15.2073 4.56784 13.6631 4 12 4C7.5817 4 4 7.5817 4 12H1L5 16L9 12H6Z" fill="#D9D9D9"/>
                </svg>
              </div>
              <h3>Follow us</h3>
            </div>
            
            <div className="airdrop-step">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#D9D9D9"/>
                </svg>
              </div>
              <h3>Be active</h3>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="airdrop-action"
          >
            <motion.button 
              className="btn primary-btn get-started-btn"
              onClick={handleAirdropRegistration}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isRegistered}
            >
              {isRegistered ? "Registration Complete!" : "Get started"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Airdrop;