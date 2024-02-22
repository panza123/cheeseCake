import React from 'react'
import {data} from '../index.js'
import { IoStarSharp } from "react-icons/io5";
export default function About() {
  return (
    <div id='about' className='w-full h-screen mt-[700px] px-10 ' >
      <h2 className='text-center text-2xl md:text-7xl'>Our Menu</h2>
<div className='w-full h-full justify-center
 items-center grid lg:grid-cols-3 ml-auto gap-10'>
  
{data.map((item,index)=>(
<div key={index} >
 <div className='flex flex-col max-sm: mt-10 shadow-lg shadow-black cursor-pointer
  max-sm:w-[300px] rounded-[20px] md:w-[350px]  items-center h-[400px] bg-[#FFF8E1] hover:scale-[1.1] '>
  <img src={item.img} alt="" className='w-[200px] object-cover' />
  <p className='text-2xl pt-4'>{item.name}</p>
  <p className='font-light  text-[15px] '>{item.text}</p>
  <div className='flex px-10   justify-between w-full mt-5'>
  
    <p><span className='text-green-400'>$</span>{item.price}.00</p>
    <div className='flex gap-2'><IoStarSharp size={15} />
    <IoStarSharp size={15} />
    <IoStarSharp size={15} />
    <IoStarSharp size={15} />
    <IoStarSharp size={15} />
    </div>
    
    
  </div>
 </div>
</div>

))}
</div>

    </div>
  )
}
