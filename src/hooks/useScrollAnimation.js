import { useEffect } from 'react';
import AOS from 'aos';

export const useScrollAnimation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 100,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
};

export const scrollAnimations = {
  fadeUp: {
    'data-aos': 'fade-up'
  },
  fadeDown: {
    'data-aos': 'fade-down'
  },
  fadeLeft: {
    'data-aos': 'fade-left'
  },
  fadeRight: {
    'data-aos': 'fade-right'
  },
  zoomIn: {
    'data-aos': 'zoom-in'
  },
  slideUp: {
    'data-aos': 'slide-up'
  }
};