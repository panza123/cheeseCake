import React from "react";
import { CiPlay1 } from "react-icons/ci";
import image1 from "../assets/chaseimg/chasecake.png";
import image2 from "../assets/chaseimg/chasecake2.png";
export default function Home() {
  return (
    <main id='name' className="  w-full h-full px-10">
      <section className=" grid md:grid-cols-2 w-full h-full relative ">
        <div className="w-[864px]  h-[166px">
          <h2 className="max-sm:text-[17px] font-extrabold md:text-5xl lg:text-7xl">
            Bite The World of Cheesecake Wonders{" "}
          </h2>
          <p className="font-light max-sm:text-[15px]  pt-2 lg:text-[25px] overflow-hidden ">
            We always make our customer happy by providing <br />
            as many choices as possible{" "}
          </p>
          <div className="grid mt-10 gap-2 md:flex ">
            <button className="btn3  bg-[#523728] text-white hover:bg-[#bd804a] ">
              Get Started
            </button>
            <button className="btn3  border-2 border-[#523728] hover:bg-slate-50 flex justify-center items-center">
              {" "}
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>
        <div className="absolute  max-sm: top-[200px]   lg:top-[-120px] right-[-80px]  ">
          <img
            src={image1}
            alt="cheese cake  "
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* {second part} */}

      <section className=" grid mt-10 w-full h-full md:grid-cols-  relative px-10 ">

      <div className="absolute ml-10   m max-sm: top-[200px]   md:top-[-120px] left-[-80px]  ">
          <img
            src={image2}
            alt="cheese cake  "
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-[864px] h-[166px]  absolute lg:right-[-200px]">
          <h2 className="max-sm:text-[30px] font-extrabold md:text-5xl lg:text-7xl">
          We Love Cheesecake{" "}
          </h2>
          <p className="font-light max-sm:text-[15px] lg:text-lg pt-2 max-w-[330px]
           lg:max-w-[600px] overflow-hidden">
  At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. We believe in delivering not just desserts but moments of sheer indulgence.
</p>


          <div className="grid mt-10 gap-2 md:flex ">
            <button className="btn3 text-white bg-[#523728]  hover:bg-[#bd804a] ">
              Read More
            </button>
            
          </div>
        </div>
        
      </section>
    </main>
  );
}
