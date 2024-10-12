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

  // Handle form submission using SMTP
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/send-email', {
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
    <div className="items-center bg-slate-50 flex flex-col justify-center pl-5 pr-32 py-12 max-md:pl-5 max-md:pr-20 max-sm:pr-9">
      <div className="max-w-[1794px] w-full mt-16 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div ref={leftColumnRef} className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img loading="lazy" src="/img/22.webp" alt="Description of the image" />
          </div>
          <div ref={rightColumnRef} className="flex items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            {/* Form */}
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-12 pr-6 py-12 rounded-3xl max-md:max-w-full max-md:px-5"
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
                className="flex-grow-0 border-b border-black mt-12 max-md:max-w-full max-md:mt-10"
                required
              />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-grow-0 border-b border-black mt-10 max-md:max-w-full max-md:mt-10"
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="flex-grow-0 border-b border-black mt-10 max-md:max-w-full max-md:mt-10"
                style={{ width: '100%', minHeight: '100px', height: 'auto' }}
                rows={4}
                required
              />

              <button
                type="submit"
                className="shadow-sm text-white text-center justify-content-center items-center py-5 text-nowrap bg-[linear-gradient(269deg,#AD00FF_0%,#BA56F7_50%,#AD00FF_100%)] flex px-6 mr-auto flex-col mt-16 rounded-3xl max-md:mt-10"
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