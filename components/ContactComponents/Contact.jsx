'use client'
import { useForm, ValidationError } from '@formspree/react';
import { useRef,useState } from "react";

const Contact =()=> {
  const [state, handleSubmit] = useForm("mrgnkzqv");

    if (state.succeeded) {
        console.log("success!");
        document.getElementById("contact-form").reset();
    }

   
    return (
      <section className="justify-center ">
           <div className="items-stretch  bg-fuchsia-700 flex w-full flex-col mb-6 justify-center mx-auto px-12 py-12 max-md:max-w-full max-md:px-5">
              <div className="text-white text-4xl text-center font-extrabold leading-10 grow mt-10 max-md:max-w-full">
                   Contact us
              </div>
          </div>
  
  <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="items-start flex mx-auto max-md:ml-6 flex-col mb-auto pb-auto  px-5">
          <h1 className="text-teal-500 text-3xl leading-8 uppercase whitespace-nowrap">
          Contact Us
          </h1>
          <h1 className="text-neutral-700 bold text-4xl leading-10 mt-16 max-md:mt-10">
          Our Details
          </h1>        
          {/* Contact details */}
              <div className="ALPHA flex items-stretch mt-10 px-auto mx-auto max-md:max-w-full">
              <div className="A flex-grow flex-col  text-xl text-neutral-700 my-auto px-0 mx-2 max-md:max-w-full">
                  {/* <img
                  loading="lazy"
                  className="aspect-[0.9] object-contain object-center ml-0 w-16 overflow-hidden my-auto "
                  src="/img/phone.png"
                  /> */}
                  <img
                  loading="lazy"
                  src="/img/email.png"
                  className="aspect-[0.95] object-contain object-center ml-0 w-16 overflow-hidden mt-4 "
                  />
                  {/* <img
                  loading="lazy"
                  src="img/address.png"
                  className="aspect-[0.95] object-contain object-center ml-0 w-16 overflow-hidden  mt-4 "
                  /> */}
              </div>
              <div className="B flex-grow flex-col  text-xl text-neutral-700 my-auto px-5 max-md:max-w-full">
                  {/* <h5 className="leading-[160%]  max-md:max-w-full">Phone:</h5>
                  +66 789 12345 */}
                  <br />
                  <h5 className="leading-[160%] mt-4 max-md:max-w-full">Email:</h5>
                  info.isaacswebtechnologies@gmail.com
                  <br />
                  {/* <h5 className="leading-[160%] mt-4 max-md:max-w-full">Address:</h5>
                  123 Street, City */}
              </div>
              </div>
     </div>
  {/* form */}
      <div className=" flex px-6 mb-8 mt-6 flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
          <form 
           id="contact-form"
           onSubmit={handleSubmit}
           className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-12 pr-6 py-12 rounded-3xl max-md:max-w-full max-md:px-5">
          <div className="flex items-start justify-between gap-5 mt-1.5 px-px max-md:max-w-full max-md:flex-wrap">
              <h1 className="text-neutral-700 text-3xl leading-10 grow shrink basis-auto self-start">Keep in Touch</h1>
             
          </div>
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
                   
                    <button
                        className="shadow-sm text-white text-center justify-content-center items-center py-5 text-nowrap bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex px-6 mr-auto flex-col mt-16 rounded-3xl max-md:mt-10"
                        type="submit"
                        disabled={state.submitting}
                    >
                       Submit
                    </button> 
      
          </form>
      </div> 
  </div>
  </section>
        );
      }
  export default Contact
  
   