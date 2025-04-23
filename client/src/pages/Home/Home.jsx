import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutUs from '../../components/AboutUs/AboutUs';
import Mogs from '../../components/Mogs/Mogs';
import Airdrop from '../../components/Airdrop/Airdrop';
import './Home.css';

const Home = () => {
  // Stars animation
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`
    }));
  };

  const stars = generateStars(50);

  // Hero section animations
  const heroControls = useAnimation();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    if (heroInView) {
      heroControls.start('visible');
    }
  }, [heroControls, heroInView]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="home-page">
      <section id="home" className="hero-section">
        <div className="background-ellipse"></div>
        {stars.map(star => (
          <div 
            key={star.id} 
            className="star" 
            style={{ 
              width: `${star.size}px`, 
              height: `${star.size}px`,
              left: star.left, 
              top: star.top,
              animationDuration: star.animationDuration 
            }}
          />
        ))}
        
        <div className="container">
          <motion.div 
            className="hero-content"
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={heroVariants}
          >
            <motion.h1 variants={itemVariants} className="hero-title">
              Welcome aboard, crewmates!
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subtitle">
              Something strange is happening here...
            </motion.p>
            <motion.div variants={itemVariants} className="hero-buttons">
              <motion.button 
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join our spaceship
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <AboutUs />
      <Mogs />
      <Airdrop />
      
      <section id="contact" className="contact-section">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows="5" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn primary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;