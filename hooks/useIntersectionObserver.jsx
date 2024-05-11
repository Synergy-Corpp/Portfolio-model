'use client'
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (ref, callback) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold:0.5 } 
    );

    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        // Delay the disconnect by 4 seconds
        setTimeout(() => {
          observer.current.disconnect();
        }, 4000);
      }
    };
  }, [ref, callback]);
};
export default useIntersectionObserver;