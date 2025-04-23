import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';

const AboutUs = () => {
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
    <section id="about" className="about-section">
      <div className="about-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      
      <div className="stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
        <div className="star star-5"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            What is Amogus?
          </motion.h2>
          
          <div className="about-cards">
            <motion.div 
              className="about-card"
              variants={itemVariants}
            >
              <div className="card-image">
                <img src="/assets/images/red-amogus.png" alt="Red Amogus" />
              </div>
              <p className="card-text">
                Amogus is a decentralized meme coin inspired by the game Among Us
              </p>
            </motion.div>
            
            <motion.div 
              className="about-card"
              variants={itemVariants}
            >
              <div className="card-image">
                <img src="/assets/images/shadow-amogus.png" alt="Shadow Amogus" />
              </div>
              <p className="card-text">
                The development and governance depend entirely on its community, making Amogus a truly community-powered project
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;