import React from "react";

function Header() {

    return (
        <div className=' flex flex-col fixed z-50 lg:flex-row bg-white text-black justify-between    h-auto w-full    items-center cursor-pointer py-5 px-24 shadow '>
            <div  className="text-2xl lg:text-3xl sm:text-xl  "> <a href="#home"> Zain Fiaz </a></div>
            <div>
                <ul className=" nav flex flex-row gap-x-6 text-xs sm:text-sm md:text-base lg:text-2xl">
  <a href="#home">
    <li className="hover:text-gray-600">
      <span className="block sm:hidden">Home</span>
      <span className="hidden sm:block">Home</span>
    </li>
  </a>

  <a href="#tech-stack-section">
    <li className="hover:text-gray-600">
      <span className="block sm:hidden">Tech</span>
      <span className="hidden sm:block">Tech Stack</span>
    </li>
  </a>

  <a href="#portfolio-section">
    <li className="hover:text-gray-600">
      <span className="block sm:hidden">About </span>
      <span className="hidden sm:block">About Me</span>
    </li>
  </a>

  <a href="#contact-section">
    <li className="hover:text-gray-600">
      <span className="block sm:hidden">Contact</span>
    
    </li>
  </a>
</ul>

            </div>

            <a href="#contact-section"> <div className=" hidden lg:text-2xl lg:block text-lg bg-gray-900  py-1.5 px-5 rounded-lg hover:bg-red-600 text-white " >Contact</div> </a>

        </div>
    )



}
export default Header;
