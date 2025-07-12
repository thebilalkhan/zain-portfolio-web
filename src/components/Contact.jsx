import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='w-[100%]  mt-14 h-[380px]'>

      <div className='w-[100%] '>
        <h2 className='text-center font-semibold text-2xl'>  Contact Us </h2>
        <div className='text-center w-[80%] mx-auto pb-[50px]'>Get in touch with us to make your presense online.</div>




        <div className='w-[70%] m-auto box-border grid gap-10 lg:grid-cols-2 grid-cols-1 sm:text-lg text-[11px]   border p-8 bg-gray-100 rounded-xl'>
          <a href="https://wa.me/923327002396" target="_blank" rel="noopener noreferrer" className="block">
            <div className="flex items-center space-x-2">
              <span className="font-bold">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>+92 332 7002396</span>
            </div>
          </a>


          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=syedzain7002396@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block pointer"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>syedzain7002396@gmail.com</span>
            </div>
          </a>


          <div> <span className='font-bold'><FontAwesomeIcon icon={faAddressBook} /> </span> &nbsp; DHA Phase 2, Islamabad </div>
          <a href='https://www.linkedin.com/in/zain-fiaz-874324246' target='_blank'> <div> <span className='font-bold'> <FontAwesomeIcon icon={faLinkedin} />  </span> &nbsp; www.linkedin.com/in/zain-fiaz-874324246 </div> </a>

        </div>


      </div>

    </div>
  )
}

export default Contact