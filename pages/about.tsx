import Navbar from '@/app/components/navbar';
import Image from 'next/image';
import React from 'react';

export default function About () {
  const journey = ["nus.webp", "pslove.webp", "dbs.webp", "cornell.webp", "aimpower.webp", "aiecd.webp"]
  const hobbies = [
    {
      "title": "🧳 Travelling",
      "asset": "travelling.webp",
      "description": "My love for travelling spurred me to visit 13 counties, with many more to come!"
    },
    {
      "title": "🎨 Painting",
      "asset": "painting.webp",
      "description": "Painting is therapeutic to me - an avenue to let my creativity flow~"
    },
    {
      "title": "🏃🏽‍♀️‍➡️ Running",
      "asset": "running.webp",
      "description": "Running is a form of stress relief as I am one with nature!"
    }
  ]
  return (
    <div className=" flex flex-col justify-between w-full">
        <div className="bg-transparent">
            <Navbar />
        </div>
        <div>
        <main className="flex flex-col content min-h-screen w-full">
          <div className='center-align-sm' style={{ fontSize: 'xxx-large', color: 'var(--description-color)' }}>
            Hello there, my name is <span style={{ color: 'var(--focus-color)' }}>Sonia</span>
          </div>
          <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col justify-around'>
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
            <div className="flex justify-center lg:w-1/3 md:w-full sm:w-full">
              <Image src="/assets/about_pic.webp" alt="My Profile Picture" width={400} height={200} className="rounded-lg" />
            </div>
          </div>
          <div className='flex flex-col w-full' style={{ paddingTop: '2rem'}}>
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
          </div>
        </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>© 2024 Sonia Sunil · Designed in Figma and developed with React ✨</p>
      </footer>
      </div>
    </div>
  );
};