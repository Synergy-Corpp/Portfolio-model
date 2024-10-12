'use client'
import Image from "next/image";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef } from "react";


const WhyChooseUs=()=> {
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
            Our Results Speak for Themselves

Empowering Success Across All Fronts

When you partner with Synergy, you’re setting your business up for measurable success. Here are just a few ways we’ve made a significant impact:
<br />
	<br />•	Website Traffic Growth: Clients often see a 300% increase in traffic within the first six months, thanks to our optimized digital strategies that enhance visibility and attract more visitors.
	
  <br /><br />•	Social Media Engagement: We boost your social presence, leading to a 250% rise in interactions. Our tailored social media campaigns turn followers into fans, creating a vibrant community around your brand.
	<br /><br />•	Conversion Rate Improvement: With our focused marketing efforts, clients experience up to a 150% increase in sales conversions. We turn interest into action by refining user experience and streamlining the path to purchase.
	<br /><br />•	Customer Satisfaction: Our commitment to responsive support and continuous improvement ensures your customer satisfaction rates soar, with significant increases in loyalty and positive feedback.

  <br /><br />These achievements are not just numbers; they’re a testament to our dedication to your growth. 
  <br /><br />Choose Synergy, where we not only meet expectations but exceed them. Let’s drive real results together.

            </div>
            <button className="items-stretch shadow-sm bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex w-[219px] max-w-full flex-col justify-center mt-8 px-10 py-4 rounded-3xl self-start max-md:px-5">
              <span className="justify-between items-stretch flex gap-3 px-0.5">
              <a
                href="/About"
                 className="text-white text-center text-base font-bold leading-5 capitalize grow whitespace-nowrap">
                  More About us
                </a>
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
            src="/img/15.webp"
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
export default WhyChooseUs;