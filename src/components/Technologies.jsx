import React from 'react'
import htmlImg from '../assets/tech-stack/html1.png'
import cssImg from '../assets/tech-stack/css-1.png'
import jsImg from '../assets/tech-stack/js1.png'
import  bootstrapImg from '../assets/tech-stack/bootstrap1.png'
import  tailwindImg from '../assets/tech-stack/tailwind1.png'
import  reactImg from '../assets/tech-stack/react1.png';
import gitImg from '../assets/tech-stack/git1.png'
import githubImg from '../assets/tech-stack/github1.png'
import reduxImg from '../assets/tech-stack/redux1.png'
import vscodeImg from '../assets/tech-stack/vscode1.png'

function Technologies() {
  return (
    <div className="grid justify-center  items-center grid-cols-2 sm:grid-cols-3 px-8 py-12 gap-3">

    <div className='flex justify-center'><img src={htmlImg} className="w-[4rem] h-[3rem]" alt="" /> <div>HTML5</div> </div>
    <div className='flex justify-center'><img src={cssImg} alt="" className="w-[4rem] h-[3rem]" /><div>CSS3</div> </div>
    <div className='flex justify-center'><img src={jsImg} alt="" className="w-[4rem] h-[3rem]" /> <div>Javascript</div> </div>
    <div className='flex justify-center'> <img src={reactImg} alt="" className="w-[4rem] h-[3rem]" /> <div>React Js</div> </div>
    <div className='flex justify-center '> <img src={githubImg} alt="" className="w-[4rem] h-[3rem]" /> <div>Github</div> </div>
    <div className='flex justify-center'> <img src={bootstrapImg} alt="" className="w-[4rem] h-[3rem]" /><div>Bootstrap5</div> </div>
    <div className='flex justify-center '> <img src={vscodeImg} alt="" className="w-[4rem] h-[3rem]" /> <div>VsCode</div> </div>
    <div className='flex justify-center '> <img src={gitImg} alt="" className="w-[4rem] h-[3rem]" /> <div>Git</div> </div>
    <div className='flex justify-center '> <img src={reduxImg} alt="" className="w-[4rem] h-[3rem]" /> <div>Redux</div> </div>
  </div>
   
  
  )
}

export default Technologies