import Image from "next/image";
import React from "react";
import { reenie_beanie, poppins } from "../ui/fonts";

export default function Intro() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center items-center w-[80%] px-4 lg:px-12 pt-2 pb-16 overflow-hidden">
      <div className="relative w-full max-w-6xl flex justify-center items-center min-h-[520px]">
        <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[400px] md:w-[400px] rounded-full bg-gradient-to-b from-[#f6d8db] to-[#ffdee1] opacity-90" />
        <div className="relative z-10 intro-fade">
          <Image
            src="/assets/common/sonia.svg"
            alt="Sonia Sunil illustration"
            width={300}
            height={400}
            className="h-auto w-[280px] sm:w-[360px] md:w-[350px]"
            priority
          />
        </div>

        <div className="absolute left-[2%] top-0 sm:top-6 md:top-10 flex flex-col items-start text-left">
          <p className={`${poppins.className} text-lg font-light tracking-[0.4rem] text-[#b3a9a9]`}>
            sonia sunil
          </p>
          <h1 className={`${poppins.className} ml-[-7px] font-light text-[3.8rem] sm:text-[4.6rem] md:text-[5.4rem] leading-[0.95] text-[#111111]`}>
            port
            <span className={`${reenie_beanie.className} text-[#ff6b6b] ml-[5px]`}>folio</span>
          </h1>
          <div className="mt-10 text-lg text-[#6f737a]">
            <p className={`${poppins.className} font-extralight mb-2`}>crafting interfaces,</p>
            <p className={`${reenie_beanie.className} text-[1.8rem] text-[#222222]`}>design → code</p>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 sm:right-6 sm:bottom-2 md:right-10 md:bottom-6 grid grid-cols-3 grid-rows-2 gap-3 intro-fade">
          <a href="./assets/Resume_2025.pdf" target="_blank" rel="noopener noreferrer" className="col-start-2 intro-icon-wrap">
            <Image src="/assets/common/cv.svg" alt="Resume" width={60} height={60} className="intro-icon" />
            <span className="intro-tooltip">Resume</span>
          </a>
          <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" target="_blank" rel="noopener noreferrer" className="col-start-3 intro-icon-wrap">
            <Image src="/assets/common/email.svg" alt="E-Mail" width={60} height={60} className="intro-icon" />
            <span className="intro-tooltip">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/sonia-sunil-ss32" target="_blank" rel="noopener noreferrer" className="row-start-2 col-start-1 intro-icon-wrap">
            <Image src="/assets/common/linkedin.svg" alt="LinkedIn" width={60} height={60} className="intro-icon" />
            <span className="intro-tooltip">LinkedIn</span>
          </a>
          <a href="https://github.com/ssunil3232" target="_blank" rel="noopener noreferrer" className="row-start-2 col-start-2 intro-icon-wrap">
            <Image src="/assets/common/github.svg" alt="Github" width={60} height={60} className="intro-icon" />
            <span className="intro-tooltip">GitHub</span>
          </a>
          <a href="https://sonia-sunil-d3.vercel.app/" target="_blank" rel="noopener noreferrer" className="row-start-2 col-start-3 intro-icon-wrap">
            <Image src="/assets/common/viz.svg" alt="Data Visualization" width={60} height={60} className="intro-icon" />
            <span className="intro-tooltip">Data Viz</span>
          </a>
        </div>
      </div>
    </div>
  );
}
