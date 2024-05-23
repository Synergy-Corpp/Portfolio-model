
'use client'
import Image from 'next/image';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useRef } from 'react';

const DigitalMarketing = () => {
  const slideInUp = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    slideInUp.current.classList.add('slideInUp');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(slideInUp, restartAnimation);
  return (
    <div className="items-stretch self-stretch flex flex-col pb-12  ">
      <div className="justify-center w-full  mt-10 mb-3.5 pr-20 max-md:max-w-full max-md:ml-0 max-md:px-5">
        <div ref={slideInUp}  className=" gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {/* 1 */}
          <div className="container shadow-2xl bg-white rounded-md flex flex-col items-stretch mb-10  w-[33%] ml-20 max-md:w-full max-md:ml-0 ">
           <div
              className="items-center  flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
              aria-label="Significant ROI"
              role="region"
            >
                 <div className="Group1 w-28 h-28 relative">

                <Image
                  src="/img/2.webp"
                  alt="ROI Graphic"
                  layout="responsive"
                  width={20}
                  height={20}
                  className="aspect-square mt-6 object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
                />
                </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Integrated Solutions Development
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Create a robust online ecosystem with our integrated solutions Synergy’s approach ensures not just visitor attraction but retention by
              weaving various functionalities into a cohesive user experience that supports your business objectives from the ground up.
              
              </div>
            
             <a href="/About"
             className="text-center text-purple-600 text-xl font-bold leading-8 mt-5">
                Read More
              </a>
           
            </div>
          </div>
        {/* 2 */}
          <div className=" container shadow-2xl bg-white rounded-md flex flex-col items-stretch mb-10 w-[33%] ml-5 max-md:w-full max-md:ml-0 ">
            <div
              className="items-center  flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
              aria-label="Significant ROI"
              role="region"
            >
             <div className="Group1 w-28 h-28 relative">

              <Image
                src="/img/3.webp"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className="aspect-square mt-6 object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Systems Optimization Consulting
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Take your operational efficiency to the next level with Synergy’s systems optimization services. Our expertise in UI/UX design and backend integration will help refine all facets of your digital interfaces,
               boosting both user engagement and conversion rates              
              </div>
              <a href="/About"
             className="text-center text-purple-600 text-xl font-bold leading-8 mt-5">
                Read More
              </a>
            </div>
          </div>
          {/* 3 */}
          <div  className="container shadow-2xl bg-white rounded-md flex flex-col items-stretch mb-10 w-[33%] ml-5 max-md:w-full max-md:ml-0  ">
            <div
              className="items-center  flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
              aria-label="Significant ROI"
              role="region"
            >
             <div className="Group1 w-28 h-28 relative">

              <Image
                src="/img/4.webp"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className="aspect-square mt-6 object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Strategic Digital Marketing
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Activate the potential of your brand with Synergy’s strategic digital marketing services. We focus on leveraging multi-platform strategies to amplify your brand’s voice, increase engagement, and build a
               thriving community around your products and services.
              </div>
              <a href="/About"
             className="text-center text-purple-600 text-xl font-bold leading-8 mt-5">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DigitalMarketing