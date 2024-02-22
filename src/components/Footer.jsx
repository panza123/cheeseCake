import React from 'react'
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
export default function Footer() {
  return (
    <div className='w-full h-[100px] bg-transparent px-10 max-sm:mt-[200px] md:mt-[100px] '>
 <div className=' grid  lg:grid-cols-2 w-full h-full '>
    <div className='text-white flex gap-3'>
 <FaFacebook className='hover:text-[#FCAE36] cursor-pointer'  size={30}/>
 <FaInstagram className='hover:text-[#FCAE36] cursor-pointer'  size={30}/>
 <FaTwitter className='hover:text-[#FCAE36] cursor-pointer'  size={30} />
 <FaYoutube className='hover:text-[#FCAE36] cursor-pointer'  size={30} />
 </div>
 <div className=' flex w-full gap-10  '>
<p className='text-[15px] md:text-[20px] flex '>Copy right <MdCopyright size={18} className='text-white'/>  </p>
<p className='text-[15px] md:text-[20px]'>2024 Dscode / All rights</p>
</div>
 </div>
    </div>
  )
}
