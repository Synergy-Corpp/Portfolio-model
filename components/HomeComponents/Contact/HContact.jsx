'use client'
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef,useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';

const HContact=()=> {
  const [state, handleSubmit] = useForm("mrgnkzqv");
  const [captchaToken, setCaptchaToken] = useState('');

    if (state.succeeded) {
        console.log("success!");
        document.getElementById("contact-form").reset();
    }

  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const recaptchaRef = useRef(null);

  const restartAnimation = () => {
    // Add animation classes to restart animations
    leftColumnRef.current.classList.add('slideInLeft');
    rightColumnRef.current.classList.add('slideInRight');
  };

  // Apply intersection observer to both columns
  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(rightColumnRef, restartAnimation);

  const onCaptchaChange = (token) => {
    // Set the captcha token
    setCaptchaToken(token);
  };


    
  return (
    <div className="items-center bg-slate-50 flex flex-col justify-center pl-5 pr-32 py-12 max-md:pl-5 max-md:pr-20 max-sm:pr-9">
      <div className="max-w-[1794px] w-full mt-16 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div  ref={leftColumnRef} className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/img/contact.png"
              alt="Description of the image"
            />
          </div>
          <div  ref={rightColumnRef} className="flex  items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              {/* form */}
                   <form 
                   id="contact-form"
                   onSubmit={handleSubmit}
                    className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-12 pr-6 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
                    <h5 className="text-teal-500 ">ANALYSIS</h5> 
                    <h1 className="font-bold leading-10">
                      Get Free SEO Analysis?
                    </h1>                      
                    <p>
                      Have questions? You want to work with us?
                    </p>
                  
                    <input
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Name"
                     className=" flex-grow-0 border-b border-black mt-12 max-md:max-w-full max-md:mt-10" />
                  
                    <input 
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" flex-grow-0 border-b border-black mt-10 max-md:max-w-full max-md:mt-10" />

                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />

                    <textarea 
                    id="message"
                    name="message"
                    type="message"
                    placeholder="Your message"
                    className=" flex-grow-0 border-b border-black mt-10 max-md:max-w-full max-md:mt-10" 
                    style={{ width: '100%', minHeight: '100px', height: 'auto' }}
                    rows={4}/>
                    <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                    {/* Add the reCAPTCHA widget */}
                      <div className="pb-20px">
                   <ReCAPTCHA
                  className="g-recaptcha"
                  size="normal"
                  sitekey="6LcDLnwpAAAAAE4jXZ8wmcGhDJ5wb-K7GeU26ofP" 
                  ref={recaptchaRef}
                  />
                  </div>
                    <button type="submit" disabled={state.submitting}

                        className="shadow-sm text-white text-center justify-content-center items-center py-5 text-nowrap bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex px-6 mr-auto flex-col mt-16 rounded-3xl max-md:mt-10"
                    >
                       Submit
                    </button> 
                    </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HContact
