"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
export default function Last() {
  useEffect(() => {
    gsap.fromTo("#test",{
      scale:0.7
    }
    ,{
      scale:1,
      duration:1,
      ease:"ease-in-out",
      scrollTrigger:{
        trigger:"#test",
        start:"top 50%",
        end:"bottom 50%",
        scrub:1,
      
  
      }
    })
  }, [])
  return (
    <div className="flex justify-center h-[130vh] relative mb-24 ">
    <div id="test" className="h-[100vh]  rounded-3xl  bg-black flex flex-col lg:flex-row  sticky top-0  ">
      <div className="lg:w-[50%]  h-[100vh] ">
        {" "}
        <img
          className="w-full h-full object-cover"
          src="/burger2.jpg"
          alt=""
        />
      </div>
      <div className="lg:w-[50%] bg-[#ff5c7d] h-[100vh] lg:p-12 p-2  flex justify-center items-center flex-col">
          <h2 className="heading2  staat text-4xl lg:text-6xl text-black mb-6">Appeler no<span className='rock'>U</span>s <br/> pour commander !</h2>
          <p className="title text-3xl lg:text-6xl rock  text-black">06 10 34 17 25</p>
      </div>
    </div>
  
  </div>
  )
}
