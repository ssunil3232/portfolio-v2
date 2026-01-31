import Image from "next/image";
import React from 'react';
import { reenie_beanie, poppins, gamja } from "../ui/fonts";

export default function Intro() {
    return (
        <div
          className="relative flex flex-col lg:flex-row row-start-2 justify-center w-full items-center gap-10 lg:gap-6 px-4 lg:px-12 py-6"
          
        >
          <div className="flex flex-col w-full lg:w-[45%] items-start text-left">
            <p className={`${poppins.className} text-lg font-light tracking-[0.4rem] text-[#b3a9a9]`}>
              sonia sunil
            </p>
            <h1 className={`${poppins.className} ml-[-7px] font-light text-[3.8rem] sm:text-[4.6rem] md:text-[5.4rem] leading-[0.95] text-[#111111]`}>
              port
              <span className={`${reenie_beanie.className} text-[#ff6b6b] ml-1`}>folio</span>
            </h1>
            <div className="mt-[3rem] text-lg text-[#6f737a]">
              <p className={`${poppins.className} font-extralight mb-2`}>crafting interfaces,</p>
              <p className={`${reenie_beanie.className} text-[1.8rem] text-[#222222]`}>design → code</p>
            </div>
          </div>

          <div className="relative flex w-full lg:w-[55%] justify-center items-center min-h-[380px]">
            <div className="absolute h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] rounded-full bg-[#f6d8db] opacity-80" />
            <div className="relative z-10 intro-fade">
              <Image
                src="/assets/common/sonia.svg"
                alt="Sonia Sunil illustration"
                width={420}
                height={520}
                className="h-auto w-[260px] sm:w-[320px] md:w-[360px]"
                priority
              />
            </div>
            <div className="relative mt-6 flex flex-row gap-3 intro-fade sm:absolute sm:mt-0 sm:flex-col sm:right-10 sm:bottom-6">
              <a href="./assets/Resume_2025.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                <Image src="/assets/common/cv.svg" alt="Resume" width={60} height={60} className="intro-icon" />
              </a>
              <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" title="Email" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/common/email.svg" alt="E-Mail" width={60} height={60} className="intro-icon" />
              </a>
              <a href="https://github.com/ssunil3232" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Image src="/assets/common/github.svg" alt="Github" width={60} height={60} className="intro-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sonia-sunil-ss32" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/common/linkedin.svg" alt="LinkedIn" width={60} height={60} className="intro-icon" />
              </a>
              <a href="https://sonia-sunil-d3.vercel.app/" target="_blank" rel="noopener noreferrer" title="Data Visualization">
                <Image src="/assets/common/viz.svg" alt="Data Visualization" width={60} height={60} className="intro-icon" />
              </a>
            </div>
          </div>
        </div>
    );
}
