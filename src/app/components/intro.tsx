import Image from "next/image";
import Link from "next/link";
import React from 'react';
export default function Intro() {
    return (
        <div className="flex flex-col lg:flex-row row-start-2 justify-between w-full">
          <div className="flex flex-col lg:w-full items-center lg:items-start sm:items-center md:items-center px-16">
            <p style={{ fontSize: 'xxx-large', color: '#ededed' }}>Hello I am,</p>
            <p className="sonia">Sonia</p>
            <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col items-center lg:items-start text-center lg:text-left">
              <p style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>Frontend Developer |&nbsp;</p>
              <p style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>UX Designer</p>
            </div>
            <div className="center-align-sm" style={{ fontSize: 'large' }}>
              <p style={{ fontStyle: 'italic', display: 'inline' }}>with</p> a knack for <p style={{ color: 'var(--focus-color)', display: 'inline' }}>designing & developing</p>, aesthetically appealing User Interfaces.
            </div>
            <div style={{ fontSize: 'large'}} className="center-align-sm pt-2">
              Passionate about Human-Centered computing that <p style={{ color: 'var(--focus-color)', display: 'inline' }}>enhance user experiences</p>.
            </div>
            <div className="pt-5">
              <div><p style={{ fontSize: 'x-large', display: 'inline'}}>📍</p>New York, United States</div>
              <div> &nbsp;<p style={{ fontSize: 'small', display: 'inline'}}>🟢&nbsp;</p> Available for new projects</div>
            </div>
            <div className="flex flex-row pt-8 gap-2 z-10">
              <a href="./assets/Resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
                <Image src="/assets/resume.svg" alt="Resume" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="https://github.com/ssunil3232" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Image src="/assets/github.svg" alt="Github" width={50} height={50} className="rounded-lg" />
              </a>
              <a href="https://sonia-sunil-d3.onrender.com/" target="_blank" rel="noopener noreferrer" title="D3 Data Visualization">
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
          <div className="relative flex lg:w-2/3 sm:w-full mt-0 sm:mt-4 lg:mt-0 justify-center ml-auto z-10">
              <Image src="/assets/profile_pic.png" alt="My Profile Picture" width={500} height={800} className="rounded-lg" />
          </div>
          <div className="absolute left-0 w-screen h-[70%] overflow-hidden z-0 yellow-brick-lg yellow-brick-sm" >
              <Image src="/assets/yellow_bricks.png" alt="Yellow Bricks" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        </div>
    );
}