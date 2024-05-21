'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const AboutBot=()=> {
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
        <div ref={leftColumnRef} className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
          <img
            src="/img/aboutBot.png"
            alt="aboutBot"
          />
        </div>
        <div ref={rightColumnRef}  className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch px-5 max-md:max-w-full max-md:mt-10">
            <div className="text-neutral-700 text-3xl leading-10 max-md:max-w-full">
            What Sets Us Apart?
            </div>
            <div className="text-neutral-700 text-3xl leading-10 mt-2.5 max-md:max-w-full">

            Innovative Leadership in Digital Strategy            </div>
            <p className="text-gray-500 text-base leading-6 mt-1.5">

            At Synergy, our approach is grounded in the belief that the best solutions come from a blend of creativity, technology, and strategic insight. Here’s what makes our services stand out:
           </p>
            <div className="flex justify-between gap-5 mt-16 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-5 flex-col border-solid border-teal-500" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-neutral-700 text-xl leading-8">
                Pioneering Innovation
                </div>
                <div className="text-gray-500 text-base leading-6 mt-1.5">
                At Synergy, we do more than keep pace with industry evolution; we drive it. Our dedication to innovation is evidenced by a 92% success rate in delivering solutions that not only address today’s challenges but also anticipate tomorrow’s opportunities. We transform complex problems into scalable and impactful solutions
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-[19px] flex-col border-solid border-teal-500" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                <div className="text-neutral-700 text-xl leading-8">
                Customized Excellence
                </div>
                <div className="text-gray-500 text-base leading-6 mt-2.5">
                Recognizing the unique nature of each client, Synergy excels in crafting bespoke strategies that ensure personalization at every touchpoint. This approach results in 76% of our campaigns outperforming benchmarks, as we align our tactics specifically to the nuanced needs of your business and industry  
                 </div>
              </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="border shadow-lg bg-teal-500 flex w-[52px] shrink-0 h-[19px] flex-col mt-1 border-solid border-teal-500" />
              <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
              <div className="text-neutral-700 text-xl leading-8 grow shrink basis-auto">
              Strategic Vision
               </div>
              <div className="text-gray-500 text-base leading-6">
              Synergy is not just about achieving short-term goals; we are about setting new standards. 80% of our projects not only meet but create industry benchmarks. Our strategic vision ensures that your business not only meets its current digital aspirations but also establishes a foundation for future growth and innovation.
                </div>
            </div>
            </div>
            <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
             
            <div className="items-stretch shadow-sm bg-[linear-gradient(269deg,#8F00FF_0%,#C356F7_50%,#7000FF_100%)] flex w-[218px] max-w-full flex-col justify-center  px-10 py-4 rounded-3xl self-start max-md:mt-5 mb-5 max-md:px-5">
                <span className="justify-between items-stretch flex gap-3 px-0.5">
                  <a href="/Contact" className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                    Contact us
                  </a>
                  <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto"></div>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutBot;