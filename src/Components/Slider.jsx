import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



function Slider() {
      const [val,setVal] = useState(false)

    return(
          <div  className="w-full h-screen bg-zinc-300 flex justify-center items-center">
             <div className=" relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
              <img className={` ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}  transition-transform duration-400 ease-in h-full w-full object-cover shrink-0`}  src="https://images.unsplash.com/photo-1530076886461-ce58ea8abe24?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D   " alt="" />
              <img  className={` ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}  transition-transform duration-400 ease-in h-full w-full object-cover shrink-0`} src="https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <span  onClick={()=>setVal(()=>!val)} className="w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada9b] absolute bottom-[0.5%] left-1/2 -translate-x-[50%]  -translate-y-[50%]">
              < FaArrowRight size={".7em"} /> 
              </span>
             
             </div>

          </div>
    )
}

export default Slider