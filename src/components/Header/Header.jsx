import React from "react";

function Header() {

    return (
        <div className=' flex flex-col fixed z-50 lg:flex-row bg-white text-black justify-between    h-auto w-full    items-center cursor-pointer gap-4 py-5 px-24 shadow '>
            <div className="text-2xl lg:text-3xl sm:text-xl  ">Bilal khan</div>
            <div>
                <ul className="flex flex-row gap-x-12   lg:text-2xl md:text-base sm:text-xs ">
                    <li className="hover:text-gray-600">Home</li>
                    <li className="hover:text-gray-600">About</li>
                    <li className="hover:text-gray-600">Portfolio</li>
                    <li className=" lg:hidden hover:text-gray-600">Contact</li>
                </ul>
            </div>

            <div className=" hidden lg:text-2xl lg:block text-lg bg-gray-900  py-1.5 px-5 rounded-lg hover:bg-red-600 text-white " >Contact</div>

        </div>
    )



}
export default Header;
