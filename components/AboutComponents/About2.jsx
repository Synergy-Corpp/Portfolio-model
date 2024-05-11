import CircularProgressBar from './CircularProgressBar';
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef, useEffect } from 'react';

const About2 = () => {
  const percentages = [92, 76, 80]; 
  const progressBarRefs = Array.from({ length: 3 }, () => useRef(null));
  const isMounted = useRef(true);

  useEffect(() => {

    progressBarRefs.forEach((ref) => {
      const callback = () => {
        ref.current.classList.add('rotateIn');
      };
      const observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (ref.current && observer) {
          // Delay the disconnect by 4 seconds if the component is still mounted
          if (isMounted.current) {
            setTimeout(() => {
              observer.disconnect();
            }, 5000);
          }
        }
      };
    });

    // Cleanup function to update the mounted flag when the component unmounts
    return () => {
      isMounted.current = false;
    };
  }, [progressBarRefs]);


  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    leftColumnRef.current.classList.add('slideInLeft');
    rightColumnRef.current.classList.add('slideInRight');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(rightColumnRef, restartAnimation);

  return (
    <section className="justify-center items-stretch flex flex-col">
    <header className="flex-col overflow-hidden relative flex min-h-[512px] w-full justify-center items-stretch py-3 max-md:max-w-full">
      <span className="relative flex flex-col max-md:mt-10">
     
          <div className="max-w-full justify-center relative w-[1140px] mx-auto px-3 py-6 max-md:pl-5">
          <div className="text-teal-500 text-sm leading-7 uppercase max-md:max-w-full">
                WHAT DO WE DO?
        </div>
        <h1 className="text-neutral-700 text-3xl leading-10 mt-6 max-md:max-w-full">
                Fresh Ideas for Every Business
        </h1>
            <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
              {/* progress bar and description */}
              <div ref={leftColumnRef} className="flex flex-row items-stretch  max-md:w-full max-md:ml-0">
                {/* progress bar */}
                <div className="flex flex-col w-[28%] items-center max-md:mt-10">
                {progressBarRefs.map((ref, index) => (
                <div
                  key={index}
                  className={`flex-col text-neutral-700 text-center text-2xl leading-6 relative whitespace-nowrap overflow-hidden aspect-[1.055045871559633] justify-center items-stretch px-9 py-4 max-md:px-5 rotateIn`}
                  ref={ref}
                >
                      <CircularProgressBar percentage={percentages[index]} color="purple" animate={true} />
                  </div>
              ))}
                </div>
                {/* description of progress bar */}
                <div className="flex flex-col mt-10 w-[72%] items-stretch max-md:mt-10">
                  <h2 className="text-neutral-700 text-xl leading-8">
                  Innovative Solutions
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3">
                  Charting the uncharted in digital innovation, we deliver solutions that defy convention. Our creative prowess translates into a 92% success 
                  rate for businesses seeking transformative strategies.
                  </p>
                  <h2 className="text-neutral-700 text-xl leading-8 mt-11 max-md:mt-10">
                  Tailored Tactics
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3">
                  Customization is at the core of our tactics, resulting in 76% of our campaigns outperforming industry benchmarks. We tune into your 
                  unique frequency to hit the sweet spot of innovation
                  </p>
                  <h2 className="text-neutral-700 text-xl leading-8 mt-12 max-md:mt-10">
                  Strategic Mastery
                  </h2>
                  <p className="text-gray-500 text-base leading-6 mt-3.5">
                  With 80% of our projects setting new industry standards, our strategic mastery ensures your business 
                  not only meets but exceeds its digital aspirations
                  </p>
                </div>
              </div>
              
                {/* image */}
                <div ref={rightColumnRef} className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    src="/img/aboutus2.png"
                    alt="about us"
                  /> 
                </div>
            
            </div>
          </div>
       
       
      </span>
       
      </header>

    
    </section>
  );
}
export default About2;

