'use client'
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef } from "react";

const Awesome=()=> {
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
    <div>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        {/* left */}
        <div ref={leftColumnRef} className=" flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="/img/keyword analyst.png"
            alt="analyst"
            width={500}
            height={500}
            className="aspect-[1.23] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
       {/* right */}
        <div ref={rightColumnRef} className=" flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
          <span className="max-w-[1140px] items-stretch flex grow flex-col pr-3 pt-12 pb-5 max-md:max-w-full max-md:mt-10 max-sm:px-5">
            <div className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase max-md:max-w-full">
              Grow Traffic & Increase Revenue
            </div>
            <div className="text-black text-lg font-bold leading-7 tracking-normal uppercase mt-7 max-md:max-w-full">
              Outstanding Digital Experience
            </div>
            <div className="justify-center text-black text-lg leading-7 tracking-normal  mt-10 pr-11 max-md:max-w-full">
            Harness the power of SEO to propel your business to new heights! 
            </div>
            <div className="flex flex-row "></div>
            <div className="flex items-stretch justify-between gap-5 mt-7 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              {/* progress bar */}
              <div className="flex grow basis-[0%] flex-col items-stretch max-sm:max-w-[200px]">
                <div className="items-start bg-purple-700 flex shrink-0 h-2 flex-col rounded-3xl max-sm:max-w-[200px]" />
                <div className="items-start bg-purple-700 flex shrink-0 h-2 flex-col mt-7 rounded-3xl" />
                <div className="items-start bg-purple-700 flex shrink-0 h-2 flex-col mt-8 rounded-3xl" />
              </div>
              {/* % */}
              <span className="flex basis-[0%] flex-col items-stretch self-start">
                <div className="justify-center text-black text-right text-lg leading-7 tracking-normal uppercase whitespace-nowrap ">
                  95 %
                </div>
                <div className="justify-center text-black text-lg leading-7 tracking-normal uppercase whitespace-nowrap mt-5">
                  95 %
                </div>
                <div className="justify-center text-black text-lg leading-7 tracking-normal uppercase whitespace-nowrap mt-6">
                  95 %
                </div>
              </span>
            
            </div>
            <a href= "/About">
            <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)]
                 flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5">
                  <span className="justify-between items-stretch flex gap-3 px-0.5">
                    <div className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                      More About us
                    </div>
                    <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
                      
                    </div>
                  </span>
             </button>
             </a>
          </span>

        </div>
      </div>
    </div>
  );
}
export default Awesome