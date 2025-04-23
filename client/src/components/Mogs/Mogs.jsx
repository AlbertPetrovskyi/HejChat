import React from 'react';
import { motion } from 'framer-motion';
import './Mogs.css';

const Mogs = () => {
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

  return (
    <section id="mogs" className="mogs-section">
      <div className="background-ellipse blue"></div>
      <div className="background-ellipse gray"></div>
      
      <div className="stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="mogs-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Introducing $MOGS!
          </motion.h2>
          
          <div className="mogs-cards">
            <motion.div variants={itemVariants} className="mogs-card">
              <div className="mogs-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#D9D9D9"/>
                  <path d="M2 17L12 22L22 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Complete tasks</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mogs-card">
              <div className="mogs-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#D9D9D9"/>
                  <path d="M2 17L12 22L22 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Don't act sus</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mogs-card">
              <div className="mogs-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#D9D9D9"/>
                  <path d="M2 17L12 22L22 17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Win this game!</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mogs;