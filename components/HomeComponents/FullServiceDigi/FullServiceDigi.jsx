'use client'
import Image from "next/image";



const FullServiceDigi = () => {
  
  return (
    <section className="items-stretch self-stretch flex flex-col pb-12 bg-backgroundColor">
      <header className="text-teal-500 text-center text-sm font-extrabold leading-8 uppercase self-center whitespace-nowrap">
        SEARCH ENGINE &amp; SOCIAL MEDIA OPTIMIZATION
      </header>
      <h1 className="text-neutral-700 text-center text-3xl font-extrabold leading-10 self-center mt-2 max-md:max-w-full">
        Full Service Digital Marketing Agency
      </h1>
      <div className="justify-center w-full -mr-0.5 mt-5 mb-3.5 pr-20 max-md:max-w-full max-md:ml-0 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         {/* 1 */}
         <div     
          className="fullDigi container hover:bg-white hover:shadow-2xl hover:opacity-100 transition-colors duration-300 rounded-md ml-20 flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0 "
                >
          <div
            className="items-center flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
            aria-label="Significant ROI"
            role="region"
          >
            <div className="Group1 mt-6 rounded-full  bg-white shadow-2xl hover:opacity-100
         transition-colors imgShadow duration-300 w-28 h-28 relative">
              <Image
                src="/img/digi1.png"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className="aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
            </div>
            <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
            Organic Long Term SEO
            </h2>
            <div className="text-black text-center text-base leading-6 self-stretch mt-5">
            Propel your website to the top of search  <br /> engine results and keep it there with our organic,
             <br /> long-term SEO approach, ensuring sustained  <br /> visibility, credibility, and growth for your  <br />  online presence.
            </div>
            <button
          className="digiButton text-center mt-6 text-white text-xl font-bold leading-8
          bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)]
          whitespace-nowrap px-8 py-2 rounded-3xl max-md:px-5 "
        >
              <a href="#">Read More</a>
            </button>
          </div>
        </div>
          {/* 2 */}
          <div className="fullDigi container hover:shadow-2xl hover:bg-white transition-colors duration-300 rounded-md flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div
              className="items-center  flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
              aria-label="Significant ROI"
              role="region"
            >
              <div className="Group1  mt-6 rounded-full bg-white  shadow-xl imgShadow w-28 h-28 relative">

              <Image
                src="/img/roi1.png"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className=" aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              AI Chatbot Integration
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Delight your customers and streamline  <br /> your operations with our AI chatbot  integration<br /> services, offering personalized and responsive <br /> assistance 24/7
            enhancing customer     <br />  satisfaction and loyalty.
              </div>
              <button className="text-center mt-6 text-white text-xl font-bold leading-8
              bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)]
             whitespace-nowrap px-8 py-2 rounded-3xl max-md:px-5 digiButton">
              <a href="#">Read More</a>
            </button>
            </div>
          </div>
          {/* 3 */}
          <div className="fullDigi container hover:shadow-2xl hover:bg-white transition-colors duration-300 rounded-md flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div
              className="items-center flex grow flex-col w-full pb-12 max-md:mt-9 max-md:px-2.5"
              aria-label="Significant ROI"
              role="region"
            >
              <div className="Group1  mt-6 rounded-full bg-white shadow-xl imgShadow w-28 h-28 relative">

              <Image
                src="/img/digi2.png"
                alt="ROI Graphic"
                layout="responsive"
                width={20}
                height={20}
                className=" aspect-square object-contain object-center w-[120px] overflow-hidden self-center max-w-full"
              />
              </div>
              <h2 className="text-neutral-700 text-center text-xl font-bold leading-8 self-center whitespace-nowrap mt-14 max-md:mt-10">
              Payment Gateway Integration
              </h2>
              <div className="text-black text-center text-base leading-6 self-stretch mt-5">
              Simplify the payment process and enhance <br /> customer convenience with our seamless payment <br />  gateway integration solutions, ensuring   secure 
                <br />
              transactions and a frictionless checkout  <br /> experience for your users.
              </div>
              <button className="text-center mt-6 text-white text-xl font-bold leading-8
            bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)]
             whitespace-nowrap px-8 py-2 rounded-3xl max-md:px-5 digiButton">
              <a href="#">Read More</a>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FullServiceDigi