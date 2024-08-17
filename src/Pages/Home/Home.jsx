import React from 'react'
import homeImg from './../../assets/myImg.png'
import Technologies from '../../components/Technologies'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <div className='w-[100%] h-auto bg-gray-100 flex flex-col-reverse md:flex-row  justify-center items-center m-auto  md:px-24 md:py-16 gap-10 ' >


        {/* info div */}
        <div className="w-[70%] md:w-[50%]">

          <div className=' text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>Hi 👋</div>
          <div className=' text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl' >I'm <span className='text-red-600'>Bilal,</span> </div>
          <div className=' text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>Frontend Web Developer</div>
          <div className=' text-sm lg:text-lg xl:text-xl 2xl:text-2xl'>I have 3+ years of experience as a Frontend Web Developer (HTML, CSS, Javascript,Bootstrap, Tailwind CSS ) Included 1 years as a Reacts Js Developer. Experienced with React Redux and Context Api.</div>
          <div>  <button className='bg-gray-900  rounded-md text-white p-2 my-4 px-4 text-sm lg:text-xl'>Get in touch </button></div>
        </div>



        {/* your main image, home image */}
        <div className='w-[50%] '>
          <img className='w-[100%] ' src={homeImg} alt="homeimage" />
        </div>


      </div>

      <div className='py-20'>
        <h2 className='text-center font-semibold text-2xl'>  My Tech Stack </h2>
        <div className='text-center'>Technologies in which I am proficient</div>
        
        <Technologies />

      </div>

      <div className='bg-gray-200 pt-12 pb-8'>
        
      <h2 className='text-center font-semibold text-2xl'>  My Portfolio </h2>
      <div className='text-center w-[80%] mx-auto'>Here are a few projects I'have worked on recently</div>
      <Portfolio/>
      </div>

      <Contact/>
      
      <Footer/>
    </>

  )
}

export default Home