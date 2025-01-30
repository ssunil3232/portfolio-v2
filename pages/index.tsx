import IntroPage from "@/app/components/intro";
import Navbar from "@/app/components/navbar";
import Projects from "@/app/components/projects";
import About from "./about";
import Image from 'next/image';
import { reenie_beanie } from "@/app/ui/fonts";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-[100%] pt-4">
        {/* <div className="bg-transparent">
            <Navbar />
        </div> */}
      <div className="grid grid-rows-[20px_1fr_20px] items-start lg:justify-items-start md:justify-items-center sm:justify-items-center h-full pt-4">
        <IntroPage />
      </div>
    </div>
    <div className="flex w-full flex-row arrow-1">
      <Image src="/assets/arrow-1.gif" alt="arrow" width={200} height={200} className="rounded-lg" />
    </div>
    {/* <div className="arrow-down flex  justify-center ml-auto z-10">
      <Image src="/assets/arrow2.gif" alt="arrow" width={200} height={800} className="rounded-lg" />
    </div> */}
    <div className="flex content-bg min-h-screen content pt-8">
      <div className=" flex flex-col justify-between flex-grow w-full">
        <main className=" items-start lg:justify-items-start md:justify-items-center sm:justify-items-center flex w-full flex-grow">
          <section id="projects-section" className="flex h-full">
            <Projects />
          </section>
        </main>
        <div className="flex w-full flex-row arrow-2">
          <Image src="/assets/arrow-2.gif" alt="arrow" width={200} height={200} className="rounded-lg" />
        </div>
        <div className="flex content-bg min-h-screen">
          <div className=" flex flex-col justify-between flex-grow w-full">
            <main className="relative justify-center items-start lg:justify-items-start md:justify-items-center sm:justify-items-center flex w-full flex-grow">
              {/* <div className="arrow-down-about flex lg:w-2/3 sm:w-full mt-0 sm:mt-4 lg:mt-0 justify-center ml-auto z-10">
                <Image src="/assets/arrow3.gif" alt="arrow" width={200} height={200} className="rounded-lg" />
              </div> */}
              {/* <div className="flex w-full flex-row arrow-1">
                <Image src="/assets/arrow3.gif" alt="arrow" width={200} height={200} className="rounded-lg" />
              </div> */}
              <section id="about-section" className="flex h-full justify-center lg:w-[80%] md:w-[80%] sm:w-full w-full lg:px-10 md:px-10 sm:px-0 px-0">
                <About />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
    <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center">
          <div className="flex sm:flex-col md:flex-row lg:flex-row flex-col" style={{ fontSize: 'xx-large', alignItems: "center"}}>
            <p className="flex flex-inline">Let's&nbsp;<span style={{color: "#fd5655"}}> connect</span>!</p>
            <div className="flex flex-row pl-2 gap-2 z-10">
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
          <p className={`${reenie_beanie.className} flex text-center`} style={{fontSize: 'x-large'}}>© 2024 Sonia Sunil · Developed with React ✨</p>
      </footer>
    </>
  );
}
