import Image from "next/image";
import React from 'react';

export default function Intro() {
    return (
        <div className="flex flex-col lg:flex-row row-start-2 justify-center w-full items-center">
          <div className="flex flex-col w-full items-center px-4" style={{ alignItems: 'center' }}>
            {/* <p style={{ fontSize: 'xxx-large', color: '#ededed' }} className={crafty_girls.className}>Hello I am,</p>
            <p className={`${crafty_girls.className} sonia`}>Sonia</p> */}
            <p style={{ fontSize: 'xxx-large', textAlign: "center"}}>I'm <span className="sonia">Sonia</span>, and I am a product engineer</p>
            {/* <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col items-center lg:items-start text-center lg:text-left">
              <p style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>Frontend Developer |&nbsp;</p>
              <p style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>UX Designer</p>
            </div> */}
            <div className="center-align" style={{ fontSize: 'large', textAlign: "center"}}>
              <p style={{ fontStyle: 'italic', display: 'inline' }}>with</p> 3+ years of <p style={{ color: 'var(--focus-color)', display: 'inline' }}>designing & developing</p> intuitive digital experiences,
            </div>
            <div style={{ fontSize: 'large', textAlign: "center"}} className="center-align pt-2">
              I merge elegance and empathy to <p style={{ color: 'var(--focus-color)', display: 'inline' }}>craft accessible interfaces that connect with people</p> effortlessly.
            </div>
            <div className="pt-5">
              <div><p style={{ fontSize: 'x-large', display: 'inline'}}>📍</p>Boston, United States</div>
              <div><p style={{ fontSize: 'x-large', display: 'inline'}}>👩🏽‍💻</p>Master's in HCI, Cornell University</div>
            </div>
            <div className="flex flex-row pt-8 gap-2 z-10">
              <a href="./assets/Resume_2025.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                <Image src="/assets/resume.svg" alt="Resume" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="https://github.com/ssunil3232" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Image src="/assets/github.svg" alt="Github" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="https://sonia-sunil-d3.vercel.app/" target="_blank" rel="noopener noreferrer" title="D3 Data Visualization">
                <Image src="/assets/data.svg" alt="Data Visualization" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" title="Email"  target="_blank" rel="noopener noreferrer">
                <Image src="/assets/mail.svg" alt="E-Mail" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="https://www.linkedin.com/in/sonia-sunil-ss32" title="LinkedIn"  target="_blank" rel="noopener noreferrer">
                <Image src="/assets/linkedin.svg" alt="LinkedIn" width={50} height={50} className="rounded-lg" />
              </a>
            </div>
          </div>
          {/* <div className="relative flex lg:w-2/3 sm:w-full mt-0 sm:mt-4 lg:mt-0 justify-center ml-auto z-10">
              <Image src="/assets/profile_pic.png" alt="My Profile Picture" width={500} height={800} className="rounded-lg" />
          </div>
          <div className="absolute flex w-full h-[100%] overflow-hidden z-0 yellow-brick hidden sm:hidden md:hidden lg:block" >
              <Image src="/assets/yellowbricks.svg" alt="Yellow Bricks" layout="fill" objectFit="cover" className="rounded-lg" />
          </div> */}
        </div>
    );
}