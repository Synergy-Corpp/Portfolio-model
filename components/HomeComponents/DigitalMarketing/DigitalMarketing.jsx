
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
              <div className="Group1  relative">
              <Image
                src="/img/digi1.png"
                alt="ROI Graphic"
                width={20}
                height={20}
                layout="responsive"
                className="aspect-square object-contain object-center mt-6 w-[20px] h-[20px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Seamless Web Design
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Craft a captivating online presence<br /> that not only attracts but retains visitors <br />
              with our seamless web design solutions, <br /> ensuring a smooth and memorable 
                <br />
                user journey from start to finish. 
              </div>
            
             <a href="#"
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
                src="/img/roi1.png"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className="aspect-square mt-6 object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              UI/UX Review
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Elevate your digital presence to <br />  new heights with our expert UI/UX review,     <br />  
              optimizing every aspect of your interface to
               <br /> enhance user engagement,  satisfaction,<br /> and ultimately,  conversions. 
              
              </div>
              <a href="#"
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
                src="/img/digi2.png"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className="aspect-square mt-6 object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Social Media Marketing
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Ignite your brand’s growth across social  <br />  platforms with our tailored social  media marketing 
                <br /> strategies, driving engagement, fostering community,  and 
                <br />
               propelling your brand  to the forefront <br />of conversations.
              </div>
              <a href="#"
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