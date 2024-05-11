'use client'
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef } from "react";

const  ServicesGrid=()=> {
  const zoomInUpRef = useRef(null);
  
  const restartAnimation = () => {
    // Add animation classes to restart animations
    zoomInUpRef.current.classList.add('zoomInUp');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(zoomInUpRef, restartAnimation);

  return (
    <section className="flex flex-col items-center px-5">
      <h3 className="text-teal-500 text-center text-sm leading-7 uppercase whitespace-nowrap">
        OUR SERVICES
      </h3>
      <h4 className="text-neutral-700 text-center text-3xl leading-10 whitespace-nowrap mt-6">
        Let’s Check Our Services
      </h4>
      <div ref={zoomInUpRef}  className="self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services1.png"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <h4 className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                Social Media Strategy
              </h4>
              <p className="text-gray-500 text-center text-base leading-6 mt-3">
              Navigate the social landscape with our expert strategy tailored to amplify your brand’s voice. Engage your audience, spark meaningful conversations, and convert followers into
               fans with our innovative campaigns designed for impact.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-5 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services2.png"
                className="aspect-[1.17] object-contain object-center w-[103px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2">
                Online Analysis
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2">
              Unlock the power of data with our comprehensive online analysis. Dive deep into metrics that matter and emerge with actionable insights to outpace the competition. Optimize your digital 
              presence with strategies informed by real-time analytics
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-6 py-9 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services3.png"
                className="aspect-[1.23] object-contain object-center w-[103px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-4">
                Web Development
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-4">
              Bring your digital vision to life with our expert web development services. From responsive design to custom features, we build websites that perform flawlessly on all devices, crafted 
              to engage your audience and elevate your online presence.
              </div>
            </span>
          </div>
        </div>
      </div>
      <div ref={zoomInUpRef}  className="self-stretch w-full mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-6 py-10 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services4.png"
                className="aspect-[1.17] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                SEO Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
              Gain visibility where it counts with our strategic SEO marketing. We focus on driving your website to the top of search rankings, connecting you with your target audience through optimized content and cutting-edge
              techniques to increase organic traffic and conversions
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services5.png"
                className="aspect-[1.25] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
                Payment Gateway Integration
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
              Seamlessly empower your online transactions with our secure payment gateway integration services. Offering a smooth checkout experience, we ensure reliability and flexibility for your customers, supporting a wide range of payment methods to
               boost your sales and streamline your financial processes.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-5 py-9 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services6.png"
                className="aspect-[1.26] object-contain object-center w-[106px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-4">
                AI Chatbot Integration
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-4">
              Revolutionize customer interaction with our AI chatbot integration. Available 24/7, our smart chatbots provide instant, accurate responses to customer inquiries, enhancing user experience, reducing wait times, and
               freeing up your staff to focus on growing your business
              </div>
            </span>
          </div>
        </div>
      </div>
      <div ref={zoomInUpRef}  className="self-stretch w-full mt-7 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-5 py-12 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services7.png"
                className="aspect-[1.25] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
                Media Promotion
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
              Make your brand the center of attention with our strategic media promotion services. We craft compelling narratives that resonate with your target audience, deploying them across the perfect mix of platforms 
              to amplify your message and elevate your brand’s profile.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
              src="/img/services8.png"
                alt="image-icon"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full mt-2"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap">
                Email Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mb-2">
              Connect with your customers where it matters most — their inbox. Our email marketing campaigns combine persuasive content with stunning design to grab attention, boost open rates, and 
              foster enduring customer relationships that drive sales
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-6 py-10 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/services9.png"
                className="aspect-[1.19] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                Comprehensive UI/Ux
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
              We will do a very extensive User interface analysis for your product and we will also at a very cost effective price, 
              conduct a user experience test for your application
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesGrid;