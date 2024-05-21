import React, { useRef,useState,useEffect } from 'react';
import './txt.css';

const Carousel = () => {
  const carouselItems = [
    {
      imgSrc: '/img/retail.jpg',
      title: 'Healthcare on The Web',
      excerpt: 'Explore our bespoke healthcare solutions at Synergy. We specialize in developing patient management systems that are not only user-friendly but also enhance the efficiency of medical staff operations. Our custom solutions have been shown to increase patient engagement by over 200%, ensuring a smoother, more responsive healthcare experience',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/B2B.jpg',
      title: 'Education Reimagined',
      excerpt: ' Synergy transforms the educational landscape with our advanced e-learning solutions. By integrating SEO-optimized content and intuitive learning interfaces, we have successfully increased user enrollments and course completion rates. Our platforms are designed to engage students and educators alike, making learning accessible and effective for everyone.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/health.jpg',
      title: 'Startup Ecosystems',
      excerpt: 'At Synergy, we empower startups to thrive in competitive markets. Our full-spectrum digital marketing campaigns are tailored to drive significant growth, as evidenced by a 300% increase in user base for our clients. We provide end-to-end support from initial strategy to execution, ensuring that your startup not only launches successfully but also scales to become a market leader.',
      readMoreUrl: '#',
    },
    // {
    //   imgSrc: '/img/Education.jpg',
    //   title: 'Education Reimagined',
    //   excerpt: 'A look into how our e-learning solutions and SEO-optimized content increased user enrollments and course completion rates for an online education platform.',
    //   readMoreUrl: '#',
    // },
    // {
    //   imgSrc: '/img/startup.jpg',
    //   title: 'Startup Ecosystems',
    //   excerpt: ' See how our full-spectrum digital marketing campaign helped a tech startup become a market leader, featuring a 300% user base growth.',
    //   readMoreUrl: '#',
    // },
    // {
    //   imgSrc: '/img/global.jpg',
    //   title: 'Local to Global',
    //   excerpt: ' Learn about our comprehensive branding and social media approach that transformed a local craftsman’s shop into a globally recognized brand.',
    //   readMoreUrl: '#',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1); // Number of items to display based on viewport
  const slideRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setVisibleItems(3);
    } else if (width >= 768) {
      setVisibleItems(2);
    } else {
      setVisibleItems(1);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      setCurrentIndex(carouselItems.length - visibleItems); // Adjust for visible items
    } else if (newIndex >= carouselItems.length - visibleItems + 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };

  const startAutoScroll = () => {
    if (!isUserInteracting) {
      updateIndex(currentIndex + 1);
    }
  };

  const manualScroll = (direction) => {
    clearInterval(autoScrollRef.current);
    setIsUserInteracting(true);
    const newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
    updateIndex(newIndex);
    setTimeout(() => {
      setIsUserInteracting(false);
      autoScrollRef.current = setInterval(startAutoScroll, 3000);
    }, 5000);
  };

  useEffect(() => {
    autoScrollRef.current = setInterval(startAutoScroll, 3000);
    return () => clearInterval(autoScrollRef.current);
  }, [currentIndex, isUserInteracting, visibleItems]); // Added visibleItems as a dependency

  return (
    <div className="carousel-container">
      <button className="carousel-nav left" onClick={() => manualScroll('left')}>❮</button>
      <div className="carousel-slide" ref={slideRef}>
        {/* Adjust rendering to display a dynamic slice of items */}
        {carouselItems.slice(currentIndex, currentIndex + visibleItems).map((item, index) => (
          <div className="carousel-card" key={index}>
            <img src={item.imgSrc} alt={item.title} className="carousel-image" />
            <h3 className="carousel-title">{item.title}</h3>
            <p className="carousel-excerpt">{item.excerpt}</p>
            <a href={item.readMoreUrl} target="_blank" rel="noopener noreferrer" className="read-more-btn">Read More</a>
          </div>
        ))}
      </div>
      <button className="carousel-nav right" onClick={() => manualScroll('right')}>❯</button>
    </div>
  );
};

export default Carousel;