'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";


const About1=()=> {
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
    <section
    className="justify-center items-center flex flex-col px-16 max-md:px-5">
         <div className="w-full max-w-[1037px] max-md:max-w-full">
         <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         <div ref={leftColumnRef} className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
              src="/img/33.webp"
              alt="SEO Image"
            />
          </div>
          
           <header ref={rightColumnRef} className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
              WHO ARE WE?
              </h2>
              <br />
              {/* <h1 className="text-neutral-700 text-3xl leading-10 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              We're on a Mission to Change Your View of SEO
              </h1> */}
              
              <p className="text-gray-500 text-base leading-6 self-stretch max-md:max-w-full">
              At Synergy Solutions, we are more than a digital services company; we are innovators and problem solvers committed to redefining the way businesses operate in the digital age. Our mission is to empower businesses by providing integrated and comprehensive solutions that transform challenges into opportunities for growth.
              </p>
             <br />
              <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
              Our Mission: Empowering Transformation
              </h2>
              <br />
              <p className="text-gray-500 text-base leading-6 self-stretch max-md:max-w-full">
              Synergy Solutions is on a mission to change the way businesses perceive and utilize digital services. From SEO to comprehensive digital transformation strategies, we are dedicated to not just meeting, but exceeding the digital needs of our clients. We don’t just follow digital trends; we create them, setting our clients apart from their competition and establishing them as industry leaders.              </p>
              
              <div className="items-stretch shadow-sm bg-[linear-gradient(269deg,#8F00FF_0%,#C356F7_50%,#7000FF_100%)] flex w-[218px] max-w-full flex-col justify-center mt-5 px-10 py-4 rounded-3xl self-start max-md:mt-10 max-md:px-5">
                <span className="justify-between items-stretch flex gap-3 px-0.5">
                  <a href="/Contact" className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                    Contact us
                  </a>
                  <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto"></div>
                </span>
              </div>
            </span>
          </header> 
          </div>
      </div>
    </section>    
  );
}
export default About1

