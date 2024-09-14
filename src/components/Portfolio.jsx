import React from 'react'
import ecommerceImg from '../assets/ecommerceImg1.png'
import PasswordGneratorImg from '../assets/passwordGenerator.PNG'
import ReactFaqImg from '../assets/reactFaq.PNG'
import WeatherAppImg from '../assets/reactWeatherApp.PNG'
import foodDeliveryWeb from '../assets/htmlCssFoodDeliveryWeb.PNG'
import EcommerceImg from '../assets/ecommerceImg1.png'
import portfolioWeb from '../assets/htmlCssPortfolioImg.PNG'


function Portfolio() {
    return (

        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 4xl:grid-cols-4 w-[85%]  gap-x-4 gap-y-6 border  mx-auto my-12 relative   '>


            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://react-ecommerce-web-using-api.vercel.app/products" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={EcommerceImg} alt="" /> </a></div>
                <div className='py-3 font-bold '>React Ecommerce Website Using Api </div>
                <div className='mb-[55px]'> I created Ecommerce website using React and use context api to share state between the components to reduce props drilling and code redundancy. I created product showing category wise , dynamic routing, sorting products functionality and dynamic product detail page with add to cart button with different options.
                </div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://react-ecommerce-web-using-api.vercel.app/products" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/React-Ecommerce-Web-Using-Api" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>


            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://react-password-generator-liard-ten.vercel.app/" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={PasswordGneratorImg} alt="" /> </a></div>
                <div className='py-3 font-bold '>Random Password Generator</div>
                <div className='mb-[55px]'>React Random Password Generator have different option to generate random password like you can generate password with your desire length and with sigle or with multiple combination  with numbers,characters,symbols and can copy this password using copy button </div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://react-password-generator-liard-ten.vercel.app/" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/React-Password-Generator" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>



            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://react-faq-sigma.vercel.app/" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={ReactFaqImg} alt="" /> </a></div>
                <div className='py-3 font-bold '>React FAQ</div>
                <div className='mb-[55px]'> React Faq is a simple Frequently Asked Question template as you see in different webiste as the most important question are writen and when we click the corresponded Question ,the hidden answered is showed,Such type of effort i done in this project using State Managment</div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://react-faq-sigma.vercel.app/" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/React-FAQ" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>




            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://weather-app-vert-eight.vercel.app/" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={WeatherAppImg} alt="" /> </a></div>
                <div className='py-3 font-bold '>Weather App Using HTML, CSS, JS</div>
                <div className='mb-[55px]'> Weather app is created using api and we intergrated this api to get whether data from all over the word as you have search button to search any city and get the weather detail of this city, click to open the live preview to get more insight on the project. </div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://weather-app-vert-eight.vercel.app/" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/Weather-App" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>



            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://responsive-food-delivery-website.vercel.app/" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={foodDeliveryWeb} alt="" /> </a></div>
                <div className='py-3 font-bold '>Responsive Food Delivery Website With HTML,CSS,JS </div>
                <div className='mb-[55px]'>Food Delivery Website with different sections and i made it fully responsive, best for begginers to learn the concept of css responsivenes , for more you can visit the below link to see code on github or live demo of the project.</div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://responsive-food-delivery-website.vercel.app/" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/Responsive-Food-Delivery-Website" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>




            <div className='w-90 p-3 border border-gray-400 rounded bg-gray-100 relative'>
                <div className='flex justify-center w-[100%]'> <a href="https://html-css-portfolio-chi.vercel.app/" target='_blank' rel="noopener noreferrer"> <img className='w-[100%] h-44' src={portfolioWeb} alt="" /> </a></div>
                <div className='py-3 font-bold '>Portfolio Web Using HTML, CSS</div>
                <div className='mb-[55px]'>This portfolio website is designed using HTML,CSS and JS with different sections and i make this fully responsive with moderen hamberger icon while screen size become small.</div>
                <div className='py-3 flex justify-between w-[94%] absolute bottom-[2px] ' ><button className='text-white  bg-gray-900 rounded-md p-2 text-sm'><a href="https://html-css-portfolio-chi.vercel.app/" target='_blank' rel="noopener noreferrer"> Live Preview</a></button>
                    <button className='text-white  bg-gray-900 rounded-md p-2 text-sm '> <a href="https://github.com/thebilalkhan/Html-css-portfolio" target='_blank' rel='noreferrer noopener'> View Code </a></button>
                </div>
            </div>











        </div>
    )
}

export default Portfolio