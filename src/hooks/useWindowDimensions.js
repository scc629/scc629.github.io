import { useState, useEffect } from 'react';

function getWindowDimensions() {
  if(typeof window === 'undefined') {
    return { windowWidth: 1024, windowHeight: 1000 }
  }
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
  return {
    windowWidth,
    windowHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    if(typeof window === 'undefined') {
      return () => {}
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}