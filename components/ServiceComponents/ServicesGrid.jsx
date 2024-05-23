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
      <h3 className="text-teal-500 mt-10  text-center text-3xl leading-7 uppercase whitespace-nowrap">
        OUR SERVICES
      </h3>
      
      <div ref={zoomInUpRef}  className="self-stretch w-full mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex grow flex-col w-full mt-8 px-8 py-11 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/28.webp"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <h4 className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                Social Media Strategy
              </h4>
              <p className="text-gray-500 text-center text-base leading-6 mt-3">
              Synergy crafts comprehensive social media strategies that elevate your brand’s presence and influence. Our experts design campaigns that not only engage and enlarge your audience but also convert them into active brand advocates. With targeted content and continuous interaction, we create a thriving social ecosystem for your brand.
              </p>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-5 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/29.webp"
                className="aspect-[1.17] object-contain object-center w-[103px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2">
                Online Analysis
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2">
              Our online analysis service utilizes advanced analytics to dissect your digital performance across all platforms. Synergy provides detailed insights into user behavior, traffic sources, and engagement patterns, allowing you to make data-driven decisions that outpace the competition and optimize your digital strategy for maximum impact.
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
              Synergy specializes in developing high-performing websites that are both aesthetically pleasing and highly functional. From responsive designs that adapt to any device to custom features that cater specifically to your business needs, our web development services ensure your online platform is powerful, intuitive, and ready to convert visitors into customers.
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
                src="/img/30.webp"
                className="aspect-[1.17] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
                SEO Marketing
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
              Enhance your visibility and organic search rankings with Synergy’s SEO marketing services. We implement cutting-edge SEO tactics focused on long-term growth, ensuring your website attracts high-quality traffic and maintains a strong online presence. Our approach is tailored to align with your specific market and audience, providing sustained results
            </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/31.webp"
                className="aspect-[1.25] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
                Payment Gateway Integration
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
              Synergy streamlines your e-commerce operations with seamless payment gateway integration services. Our solutions are designed to facilitate easy, secure, and quick transactions, enhancing the user experience and boosting customer trust. With our expert integration, ensure smooth and efficient payment processes that keep your customers satisfied.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-5 py-9 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/32.webp"
                className="aspect-[1.26] object-contain object-center w-[106px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-4">
                AI Chatbot Integration
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-4">
              Leverage the power of artificial intelligence with Synergy’s AI chatbot integration. Our chatbots are engineered to provide real-time, efficient customer support and engagement. They are capable of handling a wide range of queries with prompt responses, ensuring your customers receive the attention they need whenever they need it, thereby boosting overall customer satisfaction.
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
                src="/img/33.webp"
                className="aspect-[1.25] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-2.5">
              Custom Software Development              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-2.5">
              Transform your operational challenges into streamlined solutions with Synergy’s custom software development. We design and develop bespoke software tailored to meet the unique demands of your business. From automating routine tasks to creating complex data management systems, our custom solutions are built to improve efficiency, scalability, and performance.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full px-8 py-12 rounded-xl max-md:mt-8 max-md:px-5">
              <img
              src="/img/34.webp"
                alt="image-icon"
                className="aspect-[1.22] object-contain object-center w-[105px] overflow-hidden self-center max-w-full mt-2"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap">
              Digital Transformation Consulting
              </div>
              <div className="text-gray-500 text-center text-base leading-6 mb-2">
              Navigate your digital transformation journey with Synergy as your expert guide. We help businesses leverage digital technologies to reinvent their operations and strategies. Our consulting services cover everything from IT infrastructure upgrades to the implementation of digital tools that enhance decision-making and customer engagement.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch shadow-lg bg-white flex flex-col w-full mt-8 px-6 py-10 rounded-xl max-md:mt-10 max-md:px-5">
              <img
                alt="image-icon"
                src="/img/35.webp"
                className="aspect-[1.19] object-contain object-center w-[105px] overflow-hidden self-center max-w-full"
              />
              <div className="text-neutral-700 text-center text-base leading-7 tracking-wide self-center whitespace-nowrap mt-3">
              Cloud Services and Management              </div>
              <div className="text-gray-500 text-center text-base leading-6 mt-3">
              Synergy offers comprehensive cloud services and management solutions designed to ensure your business enjoys the full benefits of cloud technology. Our services include cloud migration, infrastructure management, and security, providing you with scalable, flexible, and secure cloud environments that support your business growth and operational needs.
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ServicesGrid;