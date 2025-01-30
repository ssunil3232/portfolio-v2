import CirclePacking from '@/app/components/bubble';
import BubbleChart from '@/app/components/bubble';
import CircularPackGraph from '@/app/components/bubble';
import Navbar from '@/app/components/navbar';
import { crafty_girls, poppins, reenie_beanie } from '@/app/ui/fonts';
import { image } from 'd3';
import Image from 'next/image';
import React from 'react';

export default function About () {
  const journey = ["nus.webp", "pslove.webp", "dbs.webp", "cornell.webp", "aimpower.webp", "aiecd.webp"]
  // const hobbies = [
  //   {
  //     "title": "🧳 Travelling",
  //     "asset": "travelling.webp",
  //     "description": "My love for travelling spurred me to visit 13 counties, with many more to come!"
  //   },
  //   {
  //     "title": "🎨 Painting",
  //     "asset": "painting.webp",
  //     "description": "Painting is therapeutic to me - an avenue to let my creativity flow~"
  //   },
  //   {
  //     "title": "🏃🏽‍♀️‍➡️ Running",
  //     "asset": "running.webp",
  //     "description": "Running is a form of stress relief as I am one with nature!"
  //   }
  // ]

  // const data = [
  //   { name: "NUS", size: 1000, imageUrl: "/assets/nus.webp" },
  //   { name: "Pslove", size: 1000, imageUrl: "/assets/pslove.webp"  },
  //   { name: "DBS", size: 1000, imageUrl: "/assets/dbs.webp"  },
  //   { name: "Cornell", size: 1000, imageUrl: "/assets/cornell.webp"  },
  //   { name: "Aimpower", size: 1000, imageUrl: "/assets/aimpower.webp"  },
  //   { name: "AI ECD", size: 1000, imageUrl: "/assets/aiecd.webp"  },
  // ];
  return (
    <div className="flex flex-col justify-start w-full min-h-screen">
      <div className="lg:relative md:unset sm:unset unset flex lg:flex-row md:flex-row sm:flex-col flex-col justify-start w-full item-center">
        <div className="flex flex-col w-full lg:w-3/5 pr-4">
          <div className={`${reenie_beanie.className} center-align`} style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
            a bit <span style={{ color: 'var(--focus-color)' }}>about me</span>
          </div>
          <div>
            I'm an end-to-end Product Engineer, with a <span style={{ color: 'var(--focus-color)' }}>Master's in Information Science</span> (focus on HCI/UX) at <span style={{ color: 'var(--focus-color)' }}>Cornell University</span>, and a <span style={{ color: 'var(--focus-color)' }}>Bachelor's in Computer Engineering</span> from the <span style={{ color: 'var(--focus-color)' }}>National University of Singapore (NUS)</span>. My journey began at the intersection of three distinct yet interconnected worlds: science, technology, and arts. These fields, while seemingly divergent, harmoniously satisfied my innate curiosity and desire to drive meaningful change.
          </div>
        </div>
        <div className="lg:absolute md:unset sm:unset unset lg:top-[-50%] md:top-[0%] sm:top-[0%] top-[0%] flex w-full lg:w-2/5 justify-center ml-auto z-10 profile-pic">
          <Image src="/assets/me.svg" alt="My Profile Picture" width={400} height={400} className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col w-full lg:pt-32 md:pt-8 sm:pt-8 pt-8">
        <div className={`${reenie_beanie.className} center-align-sm`} style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
          my <span style={{ color: 'var(--focus-color)' }}>journey</span> thus far
        </div>
        <div className='flex flex-col lg:flex-row sm:flex-col justify-center'>
              {journey.map((item, index)=>{
                return (
                  <div key={index} className='flex justify-center'>
                    <Image src={`/assets/${item}`} alt="Journey" width={300} height={200} className="rounded-lg" />
                  </div>
                );
              })}
        </div>
      </div>
      <div className="flex flex-col w-full pt-10 items-center">
        <div className={`${reenie_beanie.className} center-align-sm relative`} style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
          what are my <span style={{ color: 'var(--focus-color)' }}>skills</span>?
          <div className="focus-arrow flex  mt-0 sm:mt-4 lg:mt-0 justify-center ml-auto z-10">
            <Image src="/assets/focus-arrow.gif" alt="focus" width={200} height={300} className="rounded-lg" />
          </div>
        </div>
        <CirclePacking />
      </div>
      <div className="flex flex-col w-full pt-5 items-center justify-center">
        <div className={`${reenie_beanie.className} center-align-sm relative w-full`} style={{ fontSize: 'xx-large', color: 'var(--description-color)' , textAlign: 'center'}}>
          professional & personal <span style={{ color: 'var(--focus-color)' }}>ethos</span>
          <div className={`${poppins.className}`} style={{ fontSize: 'medium', color: 'black' }}>
            My work ethic is rooted in three core principles that have shaped my professional and personal growth over the years.
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  mt-0 sm:mt-4 lg:mt-0 justify-between ml-auto z-10 w-full">
            <div className='flex flex-col justify-start items-center w-full sm:w-1/2 lg:w-1/3 p-4'>
              <Image src="/assets/collaborate.png" alt="collaborate" width={200} height={300}  className='pb-3' />
              <div style={{ fontSize: '22px' }}>Collaboration Over Silos</div>
              <div className={`${poppins.className}`} style={{ fontSize: 'x-small', color: 'black' }}>As a frontend developer with a strong UI/UX focus, collaboration is at the heart of how I work. Whether I’m building a product with designers, working with backend engineers, or even managing personal projects, avoiding silos and embracing teamwork has made a huge difference in both my professional growth and personal efficiency.</div>
            </div>
            <div className='flex flex-col justify-start items-center w-full sm:w-1/2 lg:w-1/3 p-4'>
              <Image src="/assets/balance.png" alt="balance" width={200} height={300} className='pb-3'  />
              <div style={{ fontSize: '22px' }}>Balancing Aesthetics & Functionality</div>
              <div className={`${poppins.className}`} style={{ fontSize: 'x-small', color: 'black' }}>I constantly navigate the balance between beautiful design and practical functionality. A product that looks amazing but is hard to use is just as ineffective as one that works well but feels clunky and uninspired. Striking the right balance ensures that users not only enjoy the experience but also accomplish their tasks effortlessly.</div>
            </div>
            <div className='flex flex-col justify-start items-center w-full sm:w-1/2 lg:w-1/3 p-4'>
              <Image src="/assets/feedback.png" alt="feedback" width={200} height={300}  className='pb-3' />
              <div style={{ fontSize: '22px' }}>Accepting Feedback Gracefully</div>
              <div className={`${poppins.className}`} style={{ fontSize: 'x-small', color: 'black' }}>No design, code, or idea is perfect on the first try—iteration is what makes a product great. Early in my career, I would get attached to my designs and code, but I realized that constructive feedback often leads to better solutions. I now welcome feedback early to refine my work faster instead of making big changes later.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-20 items-center">
        <div className={`${reenie_beanie.className} center-align-sm relative w-full`} style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
          when i'm<span style={{ color: 'var(--focus-color)' }}> not working</span>...
          <div className={`${poppins.className}`} style={{ fontSize: 'medium', color: 'black' }}>
            I delight in the thrill of <span style={{ color: 'var(--focus-color)' }}>travel</span>, the warmth of <span style={{ color: 'var(--focus-color)' }}>baking</span>, the exhilaration of <span style={{ color: 'var(--focus-color)' }}>running</span>, and the serenity of <span style={{ color: 'var(--focus-color)' }}>painting</span>. Each passion enriches my life, offering a blend of adventure, creativity, and self-expression.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-0 sm:mt-4 lg:mt-0 justify-between ml-auto z-10 w-full items-center" style={{justifyItems: 'center'}}>
            <Image src="/assets/travel.png" alt="travel" width={200} height={300} className='pt-5' />
            <Image src="/assets/bake.png" alt="bake" width={200} height={300} className='pt-5' />
            <Image src="/assets/paint.png" alt="paint" width={200} height={300} className='pt-5' />
            <Image src="/assets/jog.png" alt="jog" width={200} height={300} className='pt-5' />
          </div>
        </div>
      </div>
    </div>
    
    );
      {/* <div className="relative flex lg:w-2/3 sm:w-full mt-0 sm:mt-4 lg:mt-0 justify-center ml-auto z-10">
        <Image src="/assets/profile_pic.png" alt="My Profile Picture" width={500} height={800} className="rounded-lg" />
      </div> */}
          {/* <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col justify-around'>
            <div className='flex flex-col justify-center lg:w-2/3 md:w-full sm:w-full gap-4'>
              <div style={{ fontSize: 'large'}} className="center-align-sm pt-2 about-bordered">
                I am deeply passionate about <span className="emphasis-line">blending the art of design with the power of technology</span> to create impactful user experiences and innovative digital solutions.
              </div>
              <div style={{ fontSize: 'large'}} className="center-align-sm pt-2 about-bordered">
                My skills span across a broad spectrum, including advanced <span className="emphasis-line">frontend development, user experience design, and interactive data visualization</span>, with a proficient command over tools like <span className="emphasis-line">AngularJS, React, Vue3, Flutter and Figma</span>.
              </div>
              <div style={{ fontSize: 'large'}} className="center-align-sm pt-2 about-bordered">
                My primary goal is to leverage these skills in a dynamic environment where I can contribute to projects that not only <span className="emphasis-line">drive meaningful change but also push the boundaries of what's possible in digital interactions</span>.
              </div>
              <div style={{ fontSize: 'large'}} className="center-align-sm pt-2 about-bordered">
                By continuously refining my technical expertise and staying abreast of the latest industry trends, I aim to become a leader in the field, guiding projects that enhance user engagement and deliver tangible results in the world of technology and design.
              </div>
            </div>
            
            {/* <div className="flex justify-center lg:w-1/3 md:w-full sm:w-full">
              <Image src="/assets/about_pic.webp" alt="My Profile Picture" width={400} height={200} className="rounded-lg" />
            </div> 
          </div> */}
          
          {/* <div className='flex flex-col w-full' style={{ paddingTop: '2rem'}}>
            <div className='center-align-sm' style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
              My <span style={{ color: 'var(--focus-color)' }}>journey</span>
            </div>
            <div className='flex flex-col lg:flex-row sm:flex-col justify-center'>
              {journey.map((item, index)=>{
                return (
                  <div key={index} className='flex justify-center'>
                    <Image src={`/assets/${item}`} alt="Journey" width={300} height={200} className="rounded-lg" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex flex-col' style={{ paddingTop: '2rem'}}>
            <div className='center-align-sm' style={{ fontSize: 'xx-large', color: 'var(--description-color)' }}>
              Life <span style={{ color: 'var(--focus-color)' }}>outside work</span>
            </div>
            <div className='flex lg:flex-row sm: flex-col justify-center'>
              {hobbies.map((item, index)=>{
                return (
                  <div key={index} className="flex flex-col justify-center items-center lg:items-start sm:items-center w-full sm:w-1/2 lg:w-1/3 p-4">
                    <span style={{ fontSize: 'x-large'}}>{item.title}</span>
                    <div className='flex flex-col w-full lg:w-[85%] sm:w-full justify-center items-center lg:items-start sm:items-center'>
                      <Image
                        src={`/assets/${item.asset}`}
                        alt="asset-img"
                        width={300}
                        height={300}
                        className="rounded-full object-cover border border-gray-300 hover:border-gray-500 hover:shadow-lg transition duration-300 ease-in-out"
                      />
                      <div className="center-align-sm pt-4 block" style={{ fontSize: 'large', color: 'var(--description-color)'}}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
  // );
};