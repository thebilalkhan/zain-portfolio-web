import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='w-[100%] h-screen mt-14 h-[450px]'>

      <div className='w-[100%] '>
        <h2 className='text-center font-semibold text-2xl'>  Contact Us </h2>
        <div className='text-center w-[80%] mx-auto pb-[50px]'>Get in touch with us to make your presense online.</div>




        <div className='w-[70%] m-auto box-border grid gap-10 lg:grid-cols-2 grid-cols-1 sm:text-lg text-[11px]   border p-8 bg-gray-100 rounded-xl'>

          <div> <span className='font-bold'> <FontAwesomeIcon icon={faPhone}/> 
          </span>  +92 3146836950 </div>
          <div><span className='font-bold'> <FontAwesomeIcon icon={faEnvelope}/> </span> &nbsp; thebilalkhancs@gmail.com </div>
          <div> <span className='font-bold'><FontAwesomeIcon icon={faAddressBook}/> </span> &nbsp; I8 Markaz, Islamabad </div>
          <div> <span className='font-bold'> <FontAwesomeIcon icon={faLinkedin}/>  </span> &nbsp; www.linkedin.com/in/thebilalkhancs </div>
          <div> <span className='font-bold'> <FontAwesomeIcon icon={faGithub}/> </span> &nbsp; https://github.com/thebilalkhan </div>

        </div>


      </div>

    </div>
  )
}

export default Contact