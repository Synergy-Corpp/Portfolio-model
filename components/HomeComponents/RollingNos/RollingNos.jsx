import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef } from "react";


const RollinNos =()=> {
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const restartAnimation = () => {
    // Restarts animations
    leftColumnRef.current.classList.add('slideInLeft');
    rightColumnRef.current.classList.add('slideInRight');
  };

  // Intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(rightColumnRef, restartAnimation);
  return (
 <>
  <section className="self-stretch justify-center w-auto px-20 max-md:px-5  mx-10 max-md:max-w-full">
      <header className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div ref={leftColumnRef} className=" flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <header className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase pb-16 self-start max-md:max-w-full">
          Why Partner with Synergy?          
          </header>
          <h2 className="text-black text-lg font-bold leading-7 tracking-normal uppercase grow shrink basis-auto mt-11 max-md:mt-10">
          Unlock Your Business Potential with Proven, Powerful Results!

          </h2>
          <div className="text-black text-lg leading-7 tracking-normal  -mr-1 max-md:max-w-full max-md:mt-10 max-sm:ml-1">   
          Why should Synergy be your partner of choice? Because we’re not just a service provider — we’re your growth partner. Here’s why you can count on us:
           <br /> <br />
           Expertise & Innovation: We blend cutting-edge technology and innovative strategies to create solutions that are not just effective but also ahead of the curve.

            <br />   Customized Solutions: We believe each client is unique. That’s why we tailor our services to fit your specific needs and challenges, ensuring solutions that are not just effective but also sustainable.
            <br /> Measurable Success: With Synergy, every investment is an opportunity for growth. We’re proud to deliver quantifiable improvements, with clients seeing up to a 300% increase in website traffic, a 250% rise in social media engagement, and a 150% boost in sales conversions.

           <br /> Dedicated Support: Our team is your team. From the first consultation to post-launch support, we ensure you have expert guidance every step of the way, ensuring smooth transitions and continued success.

            <br />  <br /> Industry Recognition: Trusted by hundreds, our commitment to excellence has made us a leader in the industry. Let us take your business to new heights.

            <br />
            Don’t settle for average. Choose Synergy and let us help you make your mark in the digital world. Ready to start? Let’s achieve greatness together.
          </div>
          <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5">
            <span className="justify-between items-stretch flex gap-3 px-0.5">
              <a
                href="/About"
                className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap"
              >
                More About us
              </a>
              <div className="text-white text-center text-base font-black leading-4 capitalize self-center whitespace-nowrap my-auto">
                
              </div>
            </span>
          </button>
        </div>
        <div ref={rightColumnRef} className=" flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
         
          {/* 1 */}
          <div
            href="#"
            className="items-stretch mt-20 bg-white flex justify-between gap-5 w-full   rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:mt-10"
          >
            <a
              href="#"
              className="text-white text-sm font-black leading-3 justify-center items-stretch bg-teal-400 w-auto grow basis-auto px-1.5 py-5 rounded-3xl"
            >
              <span className="text-xl">300%</span> <br />
              <span className="text-xs">BOOST</span>
            </a>
            <div className="text-black p-2 text-base leading-6 grow shrink basis-auto md:text-center">
           With Synergy, every investment is an opportunity for growth. We’re proud to deliver quantifiable improvements, with clients seeing up to a 300% increase in website traffic            </div>
          </div>
          {/* 2 */}
          <div
            href="#"
            className="items-stretch bg-white flex justify-between gap-5 w-full mt-3  rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:mt-10"
          >
            <a
              href="#"
              className="text-white text-sm font-black leading-3 justify-center items-stretch bg-teal-400 w-auto grow basis-auto px-1.5 py-5 rounded-3xl"
            >
              <span className="text-xl">250%</span> <br />
              <span className="text-xs">RISE</span>
            </a>
            <div className="text-black p-2 text-base leading-6 grow shrink basis-auto md:text-center">
            With Synergy, every investment is an opportunity for growth. We’re proud to deliver quantifiable improvements, a 250% rise in social media engagement            </div>
          </div>
          {/* 3 */}
          <div
            href="#"
            className="items-stretch bg-white flex justify-between gap-5 w-full mt-3 rounded-3xl max-md:max-w-full max-md:flex-wrap max-md:mt-10"
          >
            <a
              href=""
              className="text-white text-sm font-black leading-3 justify-center items-stretch bg-teal-400 w-auto grow basis-auto px-1.5 py-5 rounded-3xl"
            >
              <span className="text-xl">150%</span> <br />
              <span className="text-xs">SALES</span>
            </a>
            <div className="text-black p-2 text-base leading-6 grow shrink basis-auto md:text-center">
            With Synergy, every investment is an opportunity for growth. We’re proud to deliver quantifiable improvements, 150% boost in sales conversions.            </div>
          </div>
        </div>
      </header>
    </section>
 </> 
  );
}
export default RollinNos