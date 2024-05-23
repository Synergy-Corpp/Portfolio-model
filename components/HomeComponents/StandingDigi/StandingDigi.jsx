'use client'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useRef } from 'react';


const StandingDigi=()=> {
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
              src="/img/9.webp"
              aria-label="Image"
              role="img"
            />
          </section>
          <section ref={slideInUp} className="slideInUp flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto max-md:mt-10">
              <div className="items-stretch bg-white flex flex-col pl-2.5 pb-12 rounded-2xl">
                <div className=" flex flex-col mb-5 pl-5 pr-8 pt-7 pb-12 items-start max-md:px-5">
                  {/* 1 */}
                  <img
                    loading="lazy"
                    src="/img/10.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  Strategic Consulting
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3">
                  Navigate complexity with ease! Synergy’s strategic consulting services provide customized insights and action plans that address your specific business challenges,
                   helping you to innovate and grow sustainably
                   
                  </p>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-12 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-5 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  {/* 2 */}
                  <img
                    loading="lazy"
                    src="/img/11.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  Data Analytics & Insights
                   </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Transform data into decisions! Our advanced analytics services unlock the power of your data, providing you with actionable insights that enhance operational 
                  efficiency and drive strategic business outcomes
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
                    src="/img/12.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-md font-bold leading-11 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  Integrated Campaign Management
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Command your market! Synergy’s integrated marketing campaigns use a combination of digital and traditional media to create cohesive and persuasive narratives that
                   elevate your brand presence and consumer engagement.
                  </p>
                </div>
              </div>
              <div className="items-stretch bg-white flex flex-col mt-11 pl-2.5 pb-12 rounded-2xl max-md:mt-10">
                <div className="flex flex-col mb-4 pl-5 pr-8 pt-6 pb-12 items-start max-md:px-5">
                  {/* 4 */}
                  <img
                    loading="lazy"
                    src="/img/13.webp"
                    aria-label="Image"
                    role="img"
                    className='w-28 h-28'
                  />
                  <h2 className="text-neutral-700 text-center text-lg font-bold leading-7 whitespace-nowrap mr-4 self-end max-md:mr-2.5">
                  Chatbot Heroes
                  </h2>
                  <p className="text-black text-sm leading-5 self-stretch mt-3.5">
                  Empower your business with cutting-edge technology. From system architecture to implementation, Synergy ensures smooth integration of new technologies into your business processes, enhancing connectivity and automation.
                  </p>
                </div>
              </div>
            </div>
          </section>
       
          
        </header>
      </div>
    );
  }

export default StandingDigi;
