'use client'
import StandingDigi from '../../components/HomeComponents/StandingDigi/StandingDigi'
import ServicesGrid from '../../components/ServiceComponents/ServicesGrid'
import Meeting from '../../components/ServiceComponents/Meeting'

const page = () => {
  return (
    <>
    <section className=''>
    <div className="items-stretch  bg-fuchsia-700 flex w-full flex-col mb-6 justify-center mx-auto px-12 py-12 max-md:max-w-full max-md:px-5">
            <div className="text-white text-4xl text-center font-extrabold leading-10 grow mt-10 max-md:max-w-full">
                 Solutions
            </div>
        </div>
    <StandingDigi />
    <ServicesGrid />
    <Meeting />
    </section>
        
    </>
  )
   
    
}

export default page
