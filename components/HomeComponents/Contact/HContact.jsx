'use client'
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useRef,useState } from "react";

const HContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const restartAnimation = () => {
    leftColumnRef.current.classList.add('slideInLeft');
    rightColumnRef.current.classList.add('slideInRight');
  };

  useIntersectionObserver(leftColumnRef, restartAnimation);
  useIntersectionObserver(rightColumnRef, restartAnimation);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

    
  return (
    <div className="items-center  bg-slate-50 flex flex-col px-8 py-12 max-md:pl-5 max-md:pr-20 max-sm:pr-9">
  <div className="w-full px-5 max-md:max-w-full max-md:mt-10">
    <div className="gap-5 flex px-12 max-md:flex-col max-md:items-stretch max-md:gap-0">
      
      {/* Left Column (Image) */}
      <div ref={leftColumnRef} className="flex flex-col w-6/12  max-md:w-full max-md:ml-0">
        <img 
          loading="lazy" 
          src="/img/22.webp" 
          alt="Contact us at synergycorrp" 
          className="w-full h-auto max-h-96 object-cover mt-0 pt-0 mb-0 pb-0" 
        />
      </div>
      
      {/* Right Column (Form) */}
      <div ref={rightColumnRef} className="flex items-start w-6/12  mr-0 max-md:w-full max-md:ml-0">
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-12 pr-6 py-8 rounded-3xl max-md:max-w-full max-md:px-5"
        >
          <h5 className="text-teal-500">ANALYSIS</h5>
          <h1 className="font-bold leading-10">Get Free SEO Analysis?</h1>
          <p>Have questions? You want to work with us?</p>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="flex-grow-0 border-b border-black mt-8 max-md:max-w-full max-md:mt-8"
            required
          />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="flex-grow-0 border-b border-black mt-8 max-md:max-w-full max-md:mt-8"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="flex-grow-0 border-b border-black mt-8 max-md:max-w-full max-md:mt-8"
            style={{ width: '100%', minHeight: '100px', height: 'auto' }}
            rows={4}
            required
          />

          <button
            type="submit"
            className="shadow-sm text-white text-center justify-content-center items-center py-5 text-nowrap bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex px-6 mr-auto flex-col mt-12 rounded-3xl max-md:mt-10"
          >
            Submit
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  </div>
</div>

  
  
  );
};

export default HContact;