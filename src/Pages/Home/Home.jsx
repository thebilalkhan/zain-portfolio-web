import React from 'react'
import homeImg from './../../assets/myImg.png'
import Technologies from '../../components/Technologies'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer/Footer'

function Home() { 
  return (
    <>
      <div id='home' className='w-[100%] h-auto bg-gray-100 flex flex-col-reverse md:flex-row  justify-center items-center m-auto  md:px-24 md:py-10 gap-10 ' >


        {/* info div */}
        <div id="home-section" className="w-[80%] md:w-[50%]">

          <div className=' text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Hi</div>
          <div className=' text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' >I'm <span className='text-red-600'>Zain,</span> </div>
          <div className=' text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Audit Officer</div>
          <div className=' text-sm lg:text-lg xl:text-xl 2xl:text-2xl'>Experienced Finance & Audit Professional with 4+ years in financial accounting, bookkeeping, and internal audit across diverse sectors including manufacturing, construction, and real estate. Skilled in IFRS, GAAP, WPS Payroll, and advanced Excel (Pivot Tables, Power Pivot). Currently pursuing ICMA (Pakistan) alongside a Master’s from BZU. Proven expertise in financial reporting, budgeting, forecasting, and auditing. <a href='#portfolio-section' className='text-blue-600'>Read More</a></div>
          <div>  <button className='bg-gray-900  rounded-md text-white p-2 my-4 px-4 text-sm lg:text-xl'> <a href = "https://drive.google.com/file/d/1UhQmcHHkIZzgDvRQsf-oW3_ecWkPHJVm/view?usp=drivesdk" target='_blank'> Resume  </a> </button></div>
        </div>



        {/* your main image, home image */}
        <div className='w-[50%] '>
          <img className='w-[90%] home-img' src={homeImg} alt="homeimage" />
        </div>


      </div>

      <div id='tech-stack-section' className='py-20'>
        <h2 className='text-center font-semibold text-2xl'>  My Tech Stack </h2>
        <div className='text-center'>Technologies in which I am proficient</div>

        <Technologies />

      </div>

      <div id='portfolio-section' className='bg-gray-200 pt-24 pb-14' >

        <h2 className='text-center font-semibold text-2xl'>  About Me </h2>
        <div className='text-center w-[80%] mx-auto'>Here are a few projects I'have worked on recently</div>
        <Portfolio />
      </div>

      <div id='contact-section'> <Contact /> </div>

      <Footer />
    </>

  )
}

export default Home