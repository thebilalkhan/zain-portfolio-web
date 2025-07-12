import React from 'react'
import  erpImg from '../assets/tech-stack/erp.png'
import excelImg from '../assets/tech-stack/excel.svg'
import odoImg from '../assets/tech-stack/odo.png'
import  quickBookImg from '../assets/tech-stack/quickbook.svg';
import wordImg from '../assets/tech-stack/word.svg'
import powerPoint from '../assets/tech-stack/powerPoint.svg'


function Technologies() {
  return (
    <div className="grid justify-center gap-[100px] items-center grid-cols-2 sm:grid-cols-3 px-8 py-12 ">

    <div className='flex justify-center'><img src={erpImg} className="w-[4rem] h-[3rem]" alt="" /> <div className='flex justify-center items-center'>ERP</div> </div>
    <div className='flex justify-center'><img src={excelImg} alt="" className="w-[4rem] h-[3rem]" /><div className='flex justify-center items-center'> Ms Excel</div> </div>
    <div className='flex justify-center '> <img src={wordImg} alt="" className="w-[4rem] h-[3rem]" /> <div className='flex justify-center items-center'>Ms Word</div> </div>
    <div className='flex justify-center'><img src={odoImg} alt="" className="w-[4rem] h-[3rem]" /> <div className='flex justify-center items-center'>Odoo</div> </div>
    <div className='flex justify-center'> <img src={quickBookImg} alt="" className="w-[4rem] h-[3rem]" /> <div className='flex justify-center items-center'>Quick Book</div> </div>
   <div className='flex justify-center'> <img src={powerPoint} alt="" className="w-[4rem] h-[3rem]" /> <div className='flex justify-center items-center'>Power Point</div> </div>
  
  </div>
   
  
  )
}

export default Technologies