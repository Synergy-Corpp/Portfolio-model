'use client'
import useIntersectionObserver from './../../hooks/useIntersectionObserver';
import { useRef } from 'react';


const SolutionsStanding=()=> {
  const leftColumnRef = useRef(null);
  const slideInUp = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    leftColumnRef.current.classList.add('slideInLeft');
    slideInUp.current.classList.add('slideInUp');  };

  // Apply intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(slideInUp, restartAnimation);
    return (
      <div className="justify-end px-20 max-md:px-5">
        <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">

          <section ref={leftColumnRef} className=" flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/img/37.webp"
              aria-label="Image"
              role="img"
            />
          </section>
          {/* <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
            Synergy Solutions: A Holistic Approach to Digital Excellence
            </h2> */}
          <section ref={slideInUp} className="slideInUp flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
          
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="items-stretch bg-white flex flex-col pl-2.5 pb-12 rounded-2xl">
                <div className="flex flex-col mb-5 pl-5 pr-8 pt-7 pb-12 items-start max-md:px-5">
                  {/* 1 */}
                  <img
                    loading="lazy"
                    src="/img/36.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold  whitespace-nowrap  self-end ">
                  Custom Web Design Solutions                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3">
                  At Synergy, we believe in creating more than just websites; we create digital experiences. Our approach to web design combines aesthetic elegance with functional design to craft websites that not only look stunning but also perform exceptionally. Each design is tailored to reflect the unique brand identity of our clients while enhancing user engagement through intuitive navigation and interactive elements.
                   
                  </p>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-12 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-5 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  {/* 2 */}
                  <img
                    loading="lazy"
                    src="/img/23.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  Advanced SEO Strategies                   </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Elevate your online visibility with Synergy’s advanced SEO strategies. We dive deep into the mechanics of search engines to develop SEO practices that push your website to the top of search results. Our holistic approach ensures that your site not only ranks higher but also maintains its position through continuous optimization and content updates, increasing your digital footprint and brand authority.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section ref={slideInUp} className=" flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-7">
              <div className="items-stretch bg-white flex flex-col pl-2.5 pb-12 rounded-2xl">
                <div className="flex flex-col mb-4 pl-5 pr-8 pt-7 pb-12 items-start max-md:px-5">
                 {/* 3 */}
                  <img
                    loading="lazy"
                    src="/img/24.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5 ">
                  Social Media Engagement                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Transform your social media presence with Synergy’s innovative engagement strategies. We harness the power of social platforms to foster meaningful interactions and build a community around your brand. Our campaigns are designed to resonate with your audience, enhancing brand loyalty and converting passive viewers into active participants and brand advocates.
                  </p>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-11 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-4 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  {/* 4 */}
                  <img
                    loading="lazy"
                    src="/img/25.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  AI-Powered Chatbot Services                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Experience the future of customer interaction with Synergy’s AI-powered chatbot services. We integrate state-of-the-art AI technology to provide responsive, 24/7 customer support solutions that enhance user satisfaction and streamline service experiences. Our chatbots are programmed to understand and adapt to your customer’s needs, offering personalized assistance that keeps them engaged and informed.                  </p>
                </div>
              </div>
            </div>
          </section>
       
          
        </header>
      </div>
    );
  }

export default SolutionsStanding;
