"use client"

import { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button className="fixed bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow" onClick={scrollToTop}>
          Back To Top
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
