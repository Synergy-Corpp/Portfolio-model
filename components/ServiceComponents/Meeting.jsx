import React from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const Meeting=()=> {
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
     className="mt-10 justify-center items-center flex flex-col px-16 max-md:px-5">
      <div className="w-full max-w-[1037px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <header ref={leftColumnRef} className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
                Get Started
              </h2>
              <h1 className="text-neutral-700 text-3xl leading-10 self-stretch mt-16 max-md:max-w-full max-md:mt-10">
              Let’s get the digital
              </h1>
              <h1 className="text-neutral-700 text-3xl leading-10 self-stretch mt-4 max-md:max-w-full">
              party started!
              </h1>
              <p className="text-gray-500 text-base leading-6 self-stretch max-md:max-w-full">
              Isaacs Web Technologies is where ideas become brilliant realities.
               Got a project? We’ve got the flair to match. Click and kick off a collaboration that spells success.
              </p>
              <div className="items-stretch shadow-sm bg-[linear-gradient(269deg,#8F00FF_0%,#C356F7_50%,#7000FF_100%)] flex w-[218px] max-w-full flex-col justify-center mt-28 px-10 py-4 rounded-3xl self-start max-md:mt-10 max-md:px-5">
                <span className="justify-between items-stretch flex gap-3 px-0.5">
                  <a href="/Contact" className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                    Contact Us
                  </a>
                  <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto"></div>
                </span>
              </div>
            </span>
          </header>
          <div ref={rightColumnRef} className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
             src="/img/services-meeting.png"
             className="aspect-[1.15] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meeting;