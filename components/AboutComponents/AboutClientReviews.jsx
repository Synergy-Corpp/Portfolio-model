'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const AboutClientReviews=()=> {
  const slideInDownRef = useRef(null);
  const slideInUpRef = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    slideInDownRef.current.classList.add('slideInDown');
    slideInUpRef.current.classList.add('slideInUp');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(slideInDownRef, restartAnimation);
  useIntersectionObserver(slideInUpRef, restartAnimation);

  return (
    <div className="flex flex-col items-center px-5">
      <header className="text-teal-500 text-center text-sm leading-7 uppercase whitespace-nowrap">CLIENT TESTIMONIALS</header>
      <h1 className="text-neutral-700 text-center text-3xl leading-10 whitespace-nowrap mt-4">Some reviews from our clients</h1>
      <div ref={slideInDownRef} className="self-stretch w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12  max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-16 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">"The team at Isaacs Web Technologies transformed our digital marketing, making it both effective and hassle-free." 
              Their creativity and dedication are unmatched, and our brand has gained exceptional visibility!
              </p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-3 self-start max-md:ml-2.5"> Marco Jennings</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 self-start max-md:ml-2.5"> Director of Marketing, Bloom Gardens
</div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-16 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">"I'm blown away by the results! Isaacs Web Technologies has not only improved our website's performance but also
               our overall digital strategy. Their expert advice and round-the-clock support have been invaluable."
              </p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-4 self-start max-md:ml-2.5">Sophia Myles</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 mt-1.5 self-start max-md:ml-2.5"> TechVenture Inc.</div>
            </div>
          </div>
        </div>
      </div >
      <div ref={slideInUpRef} className="self-stretch w-full mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-16 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full">3. "Isaacs Web Technologies’ approach to SEO and digital marketing is revolutionary. They've helped us achieve outstanding growth in our online audience and a significant boost in conversions."
              </p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-4 self-start max-md:ml-2.5"> Alex Tremblay</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 self-start max-md:ml-2.5">Founder, EcoSolutions

           </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-9 pr-20 py-8 rounded-xl max-md:max-w-full max-md:mt-9 max-md:px-5">
              <p className="text-gray-500 text-base leading-6 max-md:max-w-full"> "Isaacs Web Technologies was a game-changer for our online presence. They delivered not just a website, but a comprehensive digital strategy that has seen our traffic soar and sales triple. Their hands-on approach made all the difference!"
              </p>
              <div className="text-neutral-700 text-lg leading-7 whitespace-nowrap ml-20 mt-3 self-start max-md:ml-2.5"> Jimmy Ron</div>
              <div className="text-gray-500 text-sm leading-5 whitespace-nowrap ml-20 mt-1.5 self-start max-md:ml-2.5">Founder of RonTech Innovations
            </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}
export default AboutClientReviews;