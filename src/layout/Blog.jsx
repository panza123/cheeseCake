import React from 'react'
import { data2 } from '../index'
export default function Blog() {
  return (
    <div  id='menu' className='w-full h-screen max-sm:mt-[1000px] lg:mt-[100px]  px-10 ' >
      <h2 className='text-center text-2xl md:text-7xl'>Our Blog</h2>
      <p className='text-center'>Our Recent Posts</p>
<div className='w-full h-full justify-center
 items-center grid lg:grid-cols-3 ml-auto gap-10'>
  
{data2.map((item,index)=>(
<div key={index} >
 <div className='flex flex-col max-sm: mt-10 shadow-lg shadow-black cursor-pointer
  max-sm:w-[300px] rounded-[20px] md:w-[350px] px-10 items-center h-[600px] bg-[#FFF8E1] hover:scale-[1.1] '>
  <img src={item.img} alt="" className='w-[250px] object-cover mt-10 rounded-[10px]' />
  <p className='font-bold text-[18px] pt-4'>{item.date}</p>
  <p className='font-light  text-[15px] '>{item.title}</p>
  <p className='text-[15px] pt-2'>{item.message}</p>


  <p className="text-left  mt-2">Read more...</p>

 </div>
</div>

))}
</div>

    </div>
    
  )
}
