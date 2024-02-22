import React from "react";
import logo from '../assets/chaseimg/finalChaseCake.png'
export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full h-full flex flex-col items-center max-sm:mt-[1400px] mt-[200px] px-10"
    >
      <div className="w-full h-full ">
        <h2 className="text-4xl md:text-7xl font-bold">Contact Us</h2>
        <p className="font-light text-[15px]  md:text-[30px]">
          Need to get in touch with us? Either fill out the form with your
          inquiry or find the department phone, email you’d like to connect
          below
        </p>
        <div className="w-full h-[600px] grid lg:grid-cols-2">
        <img src={logo} alt="" className="w-[300px]" />
        <form action="https://getform.io/f/NbW5ZWey" method="POST" className="max-w-[500px] mt-5 flex flex-col gap-2">
            <input type="text" name="" id=""  placeholder="Name" className="w-[300px] px-4 h-[50px] rounded-[20px]"/>
            <input type="emai" name="" id="" placeholder="Email" className="w-[300px] h-[50px]  px-4 rounded-[20px]" />
            <textarea name="" id="" cols="10" rows="10" placeholder="Your Message" className="
            px-5 pt-5
            w-[300px] h-[150px] rounded-[20px]"></textarea>
            <button className="max-sm:w-[300px] md:w-[350px] bg-[#FCAE36] h-[50px]  rounded-[20px] 
            hover:bg-[#91713d]">Contact Us</button>
        </form>
        </div>
      </div>
    </div>
  );
}
