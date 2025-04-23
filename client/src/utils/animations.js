import { useEffect } from 'react';
import { gsap } from 'gsap';

export const fadeIn = (element) => {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 1 });
};

export const slideIn = (element, direction = 'left') => {
    const distance = direction === 'left' ? '-100%' : '100%';
    gsap.fromTo(element, { x: distance, opacity: 0 }, { x: '0%', opacity: 1, duration: 1 });
};

export const bounce = (element) => {
    gsap.fromTo(element, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'bounce.out' });
};

export const rotate = (element) => {
    gsap.fromTo(element, { rotation: 0 }, { rotation: 360, duration: 1 });
};

export const scaleUp = (element) => {
    gsap.fromTo(element, { scale: 0 }, { scale: 1, duration: 0.5 });
};

export const scaleDown = (element) => {
    gsap.fromTo(element, { scale: 1 }, { scale: 0, duration: 0.5 });
};