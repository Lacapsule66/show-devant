"use client";
import React, { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function First() {
  const splitText = useRef(null);
  useEffect(() => {
    gsap.from("#rotate", {
      duration: 8,
      rotate: 360,
      ease: "linear",
      repeat: -1,
    });
    const split = new SplitText("#split", { type: "chars, words, lines" });
    gsap.fromTo(
      split.words,
      {
        opacity: 0,
      },
      {
        delay: 1.9,
        opacity: 1,
        stagger: 0.02,
        duration: 1.8,
        ease: "elastic.out(4, 0.7)",
      }
    );
    gsap.to("#scaleH1", {
      delay: 1.9,
      duration: 0.8,
      scale: 1,
      ease: "elastic.out(4, 0.7)",
    });
    gsap.to("#reveal", {
      delay: 2,
      duration: 1,
      y: "-100%",
      ease: "power2.out",
    });
    const split2 = new SplitText("#split2", { type: "chars, words, lines" });
    const tl = gsap.timeline();
    tl.fromTo(
      split2.words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.02,
        ease: "elastic.out(4, 0.7)",
        scrollTrigger: {
          trigger: "#split2",
          start: "top center",
          end: "bottom 100px",
          toggleActions: "restart none none none",
          scrub: 1,
        },
      }
    );
    tl.to(split2.chars, {
      delay: .5,
      color: "#ff5c7d",
      stagger: 0.03,
      ease: "elastic.out(4, 0.7)",
      scrollTrigger: {
        trigger: "#split2",
        start: "top center",
        end: "bottom 100px",
        toggleActions: "restart none none none",
        scrub: 1,
      },
    });

    
  }, []);
  return (
    <div className="lg:h-screen flex justify-center items-center gap-12 my-12  max-lg:flex-col">
      <div className="lg:w-1/2  h-full flex justify-center items-center flex-col gap-12 relative">
        <div className="h-full lg:h-[30%] w-full text-white text-center relative ">
          <img
            id="rotate"
            src="/burger2.png"
            alt=""
            className="absolute top-0 left-0 w-1/4 lg:w-1/4"
          />

          <h1
            id="scaleH1"
            className=" scale-[10%] heading2 lg:text-8xl text-6xl  staat tracking-wide "
          >
          Sh<span className="rock">ow</span> devant<br />{" "}
            <span>
              F<span className="rock">a</span>st - F
              <span className="rock">oo</span>d
            </span>
            <br /> Argelès-sur-mer{" "}
          </h1>
        </div>
        <div id="split" className="text-white w-[80%] text-2xl max-lg:hidden">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe fuga
            numquam totam animi explicabo
          </p>{" "}
          <p>
            {" "}
            eaque libero necessitatibus expedita aspernatur? Voluptatibus
            accusantium, blanditiis quidem illum
          </p>{" "}
          <p> quas necessitatibus alias perferendis tempore animi! Quis! </p>
        </div>
      </div>
      <div className="lg:w-1/2  h-full flex relative overflow-hidden">
        <img src="/svg.svg" alt="" />
        <div
          id="reveal"
          className="h-full w-full absolute top-0  bg-[#222223] z-10"
        ></div>
      </div>
      <div id="split2" className="text-white w-[80%] text-[2rem] lg:hidden">
        <p>
        Savourez nos burgers juteux garnis de produits frais et délectez-vous de nos frites maison croustillantes pour une expérience fast-food inoubliable
        </p>{" "}
        
      </div>
    </div>
  );
}
