import { useEffect } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export const useAnimations = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    });
  }, []);
};

export const fadeIn = (element) => {
  gsap.to(element, { opacity: 1, duration: 1, ease: 'power2.out' });
};

export const fadeOut = (element) => {
  gsap.to(element, { opacity: 0, duration: 1, ease: 'power2.out' });
};

export const slideIn = (element) => {
  gsap.from(element, { x: -100, opacity: 0, duration: 1, ease: 'power2.out' });
};

export const slideOut = (element) => {
  gsap.to(element, { x: 100, opacity: 0, duration: 1, ease: 'power2.out' });
};

// Fade up animation
export const fadeUpAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Stagger container animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2 
    }
  }
};

// Scale animation
export const scaleAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

// Bounce animation
export const bounceAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
};

// Create stars generator function
export const generateStars = (count, containerWidth, containerHeight) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
    animationDelay: `${Math.random() * 2}s`
  }));
};

// Use this for components that need to be revealed when scrolled into view
export const withScrollReveal = (Component) => {
  return function WrappedComponent(props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};