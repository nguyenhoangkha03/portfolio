import { useRef, useEffect } from 'react';

const useTilt = (options = {}) => {
  const ref = useRef(null);
  
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  
  const settings = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reverse = settings.reverse ? -1 : 1;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / width;
      const y = (e.clientY - top - height / 2) / height;
      
      const tiltX = reverse * (settings.max * y);
      const tiltY = reverse * (settings.max * -x);
      
      element.style.transform = `
        perspective(${settings.perspective}px) 
        rotateX(${settings.axis === 'x' ? 0 : tiltX}deg) 
        rotateY(${settings.axis === 'y' ? 0 : tiltY}deg) 
        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
      `;
    };

    const handleMouseEnter = () => {
      element.style.willChange = 'transform';
      element.style.transition = '';
    };

    const handleMouseLeave = () => {
      if (settings.reset) {
        element.style.transform = `
          perspective(${settings.perspective}px) 
          rotateX(0deg) 
          rotateY(0deg) 
          scale3d(1, 1, 1)
        `;
      }
      
      if (settings.transition) {
        element.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
      }
      
      element.style.willChange = 'auto';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [settings]);

  return ref;
};

export default useTilt;