import React, { useRef,useState,useEffect } from 'react';
import './txt.css';

const Carousel = () => {
  const carouselItems = [
    {
      imgSrc: '/img/retail.jpg',
      title: 'Revolutionized E-commerce',
      excerpt: 'Discover how our innovative web design and targeted SEO strategies doubled visitor traffic and skyrocketed online sales for a fashion retailer.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/B2B.jpg',
      title: 'B2B Lead Generation',
      excerpt: ' Find out how we revamped a SaaS company’s website and lead-gen strategy to triple their qualified leads in just six months.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/health.jpg',
      title: 'Healthcare on The Web',
      excerpt: 'Read about the custom-developed patient management system and user-friendly website interface that increased patient engagement by over 200%.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/Education.jpg',
      title: 'Education Reimagined',
      excerpt: 'A look into how our e-learning solutions and SEO-optimized content increased user enrollments and course completion rates for an online education platform.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/startup.jpg',
      title: 'Startup Ecosystems',
      excerpt: ' See how our full-spectrum digital marketing campaign helped a tech startup become a market leader, featuring a 300% user base growth.',
      readMoreUrl: '#',
    },
    {
      imgSrc: '/img/global.jpg',
      title: 'Local to Global',
      excerpt: ' Learn about our comprehensive branding and social media approach that transformed a local craftsman’s shop into a globally recognized brand.',
      readMoreUrl: '#',
    },
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