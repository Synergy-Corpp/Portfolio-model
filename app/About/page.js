'use client'

import About1 from "../../components/AboutComponents/About1"
import About2 from "../../components/AboutComponents/About2"
import AboutBot from "../../components/AboutComponents/AboutBot"
import AboutClientReviews from "../../components/AboutComponents/AboutClientReviews"
import AboutTeam from "../../components/AboutComponents/AboutTeam"

const page = () => {
  return (
    <>
    <section className=''>
    <div className="items-stretch  bg-fuchsia-700 flex w-full flex-col mb-6 justify-center mx-auto px-12 py-12 max-md:max-w-full max-md:px-5">
            <div className="text-white text-4xl text-center font-extrabold leading-10 grow mt-10 max-md:max-w-full">
                 About us
            </div>
        </div>
   <About1 />
   <About2 />
   <AboutTeam />
   <AboutBot />
   <AboutClientReviews />
    </section>
        
    </>
  )
   
    
}

export default page
