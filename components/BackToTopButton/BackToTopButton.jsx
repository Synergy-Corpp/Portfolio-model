'use client'
import React, { useState,useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import styles from './BackToTopBotton.css';

const BackToTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });

      return () => {
          window.removeEventListener('scroll', () => {});
      };
  }, []);

  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };

  return (
      <div className="top-to-btm">
          {showTopBtn && (
              <div className="icon-position" onClick={goToTop}>
                  <FaAngleUp className="icon-style" />
              </div>
          )}
      </div>
  );
};

export default BackToTopButton;