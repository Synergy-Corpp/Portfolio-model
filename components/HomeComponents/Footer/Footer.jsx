'use client'
// import ScrollEvent from '/hooks/ScrollEvent';

const Footer=()=> {
  // const { isScrolled, scrollToTop } = ScrollEvent();
  return (
    <div className="flex-col overflow-hidden relative flex min-h-[512px] justify-center items-stretch py-3">
             {/* Scroll to top button */}
             {/* {isScrolled && (
        <button
          className={`scroll-to-top ${isScrolled ? 'visible' : 'hidden'}`}
          onClick={scrollToTop}
        >
          Scroll to Top
        </button>
      )} */}
      <img
        loading="lazy"
        src="/img/herobk.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />
       < img
          loading="lazy"
          src="/img/herobk.png"
          alt="background-image"
          className="absolute h-full transform scale-x-[-1] w-full object-cover object-center inset-0"
        />
        
      <div className="flex-col relative overflow-hidden flex min-h-[512px] w-full justify-center items-stretch py-3 max-md:max-w-full">
        <span className="relative flex flex-col max-md:mt-10">
          <div className="max-w-full justify-center relative w-[1140px] mx-auto px-3 py-6 max-md:pl-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                <div className="text-teal-500 text-lg font-bold leading-7 tracking-normal uppercase self-stretch">
                Got goals?
                </div>
                <span className="self-stretch flex grow flex-col pr-10 pt-5 pb-12 items-start max-md:pr-5">
                  < img
                    loading="lazy"
                    src="/img/Transparent-logo.png"
                    className="aspect-[0.99] object-contain object-center w-[75px] overflow-hidden max-w-full"
                  />
                  <div className="text-neutral-700 text-base leading-6 self-stretch mt-11 mb-2.5 max-md:mt-10">
                   We’ve got game.
                   Hit us up for a free quote and let’s chat about your next big move in the digital world. 
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch self-stretch flex grow flex-col px-12 py-9 max-md:px-5">
                  <div className="text-neutral-700 text-lg font-extrabold leading-7">
                    Contacts
                  </div>
                  <span className="items-center flex justify-between gap-2.5 mt-10">
                    <div className="text-neutral-700 text-lg font-black leading-5 whitespace-nowrap my-auto">
                      
                    </div>
                    <div className="text-neutral-700 text-base leading-8 self-stretch grow shrink basis-auto">
                      +234 806 947 8351
                    </div>
                  </span>
                  <span className="items-center flex justify-between gap-2.5 mt-1.5">
                    <div className="text-neutral-700 text-lg font-black leading-5 whitespace-nowrap my-auto">
                      
                    </div>
                    <div className="text-neutral-700 text-base leading-8 self-stretch grow shrink basis-auto">
                      zicogunfolaju@gmail.com
                    </div>
                  </span>
                  <span className="items-center flex justify-between gap-3.5 mt-1.5 pr-2.5">
                    <div className="text-neutral-700 text-lg font-black leading-5 whitespace-nowrap my-auto">
                      
                    </div>
                    <div className="text-neutral-700 text-base leading-8 self-stretch grow shrink basis-auto">
                      Lagos, Nigeria
                    </div>
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="items-start self-stretch flex grow flex-col pl-12 py-10 max-md:pl-5">
                  <div className="text-neutral-700 text-lg font-extrabold leading-7 self-stretch">
                    Services
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap mt-10 self-start">
                    SEO Marketing
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    SEO Services
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    Payment Gateway
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    AI Chatbot Integration
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <span className="items-start self-stretch flex grow flex-col pl-12 py-10 max-md:pl-5">
                  <div className="text-neutral-700 text-lg font-extrabold leading-7 self-stretch">
                    <span className="bg-neutral-100">Community</span>
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap mt-10 self-start">
                    <span className="bg-neutral-100">Our Product</span>
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    SEO Services
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    Media Promotion
                  </div>
                  <div className="text-neutral-700 text-base leading-8 whitespace-nowrap self-start">
                    Social Media
                  </div>
                </span>
              </div>
            </div>
          </div>
        </span>
        <div className="relative text-neutral-700 text-base leading-6 capitalize grow shrink basis-auto">
          Copyright © 2024 by Isaac's Web Technologies - All Rights Reserved
        </div>
      </div>
    </div>
  );
}
export default Footer