'use client'
import Image from "next/image";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef } from "react";


const Afrowithphone=()=> {
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
    <>
    <section className="justify-center mt-10 mx-10 pb-2 px-20 max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
       {/* left */}
        <div ref={leftColumnRef} className=" flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
          <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
              Why choose us
            </div>
            <div className="text-black text-lg font-bold leading-7 tracking-normal uppercase self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              Boosts Your Website Traffic!
            </div>
            <div className="text-black text-lg leading-7 tracking-normal self-stretch mt-14 max-md:max-w-full max-md:mt-10">
            Hey there! Why choose us?   <br />   
          <br />  Because we’re your friendly neighborhood problem solvers
           here to 
          make your life easier and your day brighter. 
           <br />  <br />  No fancy jargon, just real people with a passion for helping you succeed.
           <br /> <br />  We’re like your favorite playlist – upbeat, energizing, and guaranteed to put a smile on your face.
           <br /> <br />So why wait? 
            <br />Join the fun and let’s make magic happen together!
            </div>
            <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5">
              <span className="justify-between items-stretch flex gap-3 px-0.5">
                <div className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                  More About us
                </div>
                <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
                  
                </div>
              </span>
            </button>
          </span>
        </div>
       {/* right */}
        <div ref={rightColumnRef} className=" flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <Image
            loading="lazy"
            src="/img/testimonial.png"
            alt="Description of the image"
            layout="responsive"
            width={1000}
            height={1340}
            className="aspect-[1.34] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
    </>
  );
};
export default Afrowithphone;