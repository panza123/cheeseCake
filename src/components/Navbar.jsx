import React, { useState } from "react";
import logo from "../assets/chaseimg/chasecakelogo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleClick() {
    setNav(!nav);
  }
  function CloseNav() {
    setNav(!nav);
  }

  return (
    <>
      <div className={`nav ${nav ? "active " : ""}`}>
        <header className="w-full h-[100x] flex justify-between relative">
          <img
            src={logo}
            alt="logo"
            className="w-[165px] h-[165px] object-contain z-20"
          />
          <nav className="w-full h-full flex justify-evenly items-center m-auto px-10">
            <ul
              className={`hidden md:flex justify-evenly items-center gap-3 w-[446px] rounded-[20px] h-[43px] bg-[#6F4436CC] m-auto ${
                nav ? "hidden" : ""
              }`}
            >
              
              <button className="btn smooth-scroll "><li> <a href="#home">Home</a></li></button>
              <button className="btn smooth-scroll "><li> <a href="#about">About</a></li></button>
              <button className="btn smooth-scroll "><li> <a href="#menu">Menu</a></li></button>
              <button className="btn smooth-scroll "><li> <a href="#contact">Contact</a></li></button>
            </ul>
            <button
              className="btn1"

            >
              Sign up
            </button>
          </nav>
          <div
            className="block m-10 cursor-pointer md:hidden z-20 "
            onClick={handleClick}
          >
            {!nav ? <CiMenuFries size={50} /> : <IoMdClose size={50} className="text-black" />}
          </div>
        </header>

        {/* {mobile menu} */}
        <nav
          className={
            nav
              ? "w-full h-screen bg-[#523728] absolute pt-10 z-10 top-0 righ-0  flex flex-col justify-center items-center md:hidden"
              : "hidden"
          }
        >
          <ul className="flex flex-col justify-center items-center gap-10 text-2xl z-0">
            
              <button className="btn2" onClick={CloseNav}>
              
            {" "}<li> <a href="#home">Home</a></li>
            
              </button>
            
            
              <button className="btn2" onClick={CloseNav}> <li>
            {" "}<li> <a href="#about">About</a></li>
            
          </li></button>
            
          
              <button className="btn2" onClick={CloseNav}>
              <li> <a href="#menu">Menu</a></li>
              </button>
            
            
              <button className="btn2 " onClick={CloseNav}>
              <li> <a href="#menu">Menu</a></li>
              </button>
            

            <li>
              {" "}
              <button className="btn2 mt-2">Sign Up</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
