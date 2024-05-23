'use client'
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { useRef} from 'react';

const Smallpple=() =>{
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
    <section className="justify-center px-20 max-md:px-5 pb-12  ">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
       {/* left */}
        <div ref={leftColumnRef} className=" flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="/img/5.webp"
            className="aspect-[1.31] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-8"
            alt="Image"
          />
        </div>
       {/* right */}
        <div ref={rightColumnRef} className=" flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
          <header className="flex flex-col mt-4 max-md:max-w-full max-md:mt-10">
            <h2 className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch max-md:max-w-full">
            Master Your Market with Synergy’s Integrated Marketing Solutions            </h2>
            <h3 className="text-black text-lg font-bold leading-7 tracking-normal uppercase self-stretch mt-16 max-md:max-w-full max-md:mt-10">
            Drive Growth with Targeted, Effective Marketing Strategies!            </h3>
            <p className="text-black text-lg leading-7 tracking-normal self-stretch mt-14 max-md:max-w-full max-md:mt-10">
            In today’s fast-paced digital landscape, effective marketing is about understanding and reaching your audience at every touchpoint. Synergy’s integrated marketing solutions provide a comprehensive approach that combines traditional and digital 
            methods to amplify your brand’s reach and impact.            
            <br />Our expertise spans across all channels — from digital advertising and social media campaigns to email marketing and public relations — ensuring that your message is consistent and compelling across all platforms. Synergy leverages data-driven insights to tailor campaigns that engage the right audience with the right message at the right time,
             maximizing both reach and response rates. <br />
              <br /> 
              
              With Synergy’s strategic marketing, we not only help you capture attention but also cultivate loyalty and trust amongst your customer base, turning casual browsers into lifelong customers. Our approach ensures that every marketing effort supports broader business objectives, driving measurable results and sustainable growth.

              <br /><br />
              
              Ready to dominate your industry and achieve unprecedented success?
              <br /> 
               <br />Partner with Synergy for marketing that delivers more than just results—it delivers transformation.


            </p>
            <a href= "/About">
            <button
              className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5"
              aria-label="More About us"
              role="button"
            >
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
          </header>
        </div>
      </div>
    </section>
  );
}
export default Smallpple