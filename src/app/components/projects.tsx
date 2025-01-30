import React, { CSSProperties, useRef } from 'react';
import projects from "../data/project-info.json";
import Image from 'next/image';
import Link from 'next/link';
import { reenie_beanie } from '../ui/fonts';
import '../globals.css'; 
import { motion } from 'framer-motion';

const Projects = () => {
    const colors = [
        "#f5febd", "#FA9D89", "#FDE298", "#F4B7D5", "#f3edf7", "#D9E5F9", "#E7D6FB", "#eddbc9"
    ];

    const [hovered, setHovered] = React.useState(false);

    const projectsRef = useRef<HTMLDivElement>(null);

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div ref={projectsRef}  className='flex flex-col w-full'>
        {/* <h1 style={{ fontSize: 'xx-large', color: 'var(--focus-color)' }}>Projects</h1>
        <div className='header-underline mt-2'></div> */}
        <div className={`${reenie_beanie.className} center-align-sm`} style={{ fontSize: 'xx-large', color: 'var(--description-color)', justifyContent: 'center', display: 'flex' }}>
            {/* <a className="underline-animation" style={{ color: 'var(--focus-color)' }}>the work i do </a> */}
            <motion.div className='flex flex-col' onClick={scrollToProjects} onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)} whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <a
                    className=" cursor-pointer"
                    style={{ color: 'var(--focus-color)' }}
                >
                    the work i do
                </a>
                <div style={{color: 'var(--description-color'}} className={`border-t-4  rounded-xl transition-all duration-300 ease-in-out ${hovered ? 'w-full': 'w-0'}`}></div>
            </motion.div>
            
        </div>
        <div className='project-section w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-8'>
    {projects.map((project, index) => (
        <Link href={project.link} key={index}>
            <div className="block h-full flex flex-col justify-between">
                <div className="card-content flex flex-col flex-grow project-card" style={{ background: colors[index], '--glow-color': colors[index] } as CSSProperties}>
                    <Image src={project.preview} alt={`${project.id}-Preview`} width={600} height={600} layout="responsive" className="w-full h-auto rounded-lg" />
                    {/* <h2 style={{ fontSize: 'x-large', color: 'var(--description-color)' }}>{project.header}</h2> */}
                    <p style={{ fontSize: 'small', textAlign: 'center' }}>{project.description}</p>
                </div>
                {/* <div className="flex flex-row flex-wrap space-x-3 pt-3">
                    {project.tools.map((point, idx) => (
                        <div key={idx} className="py-1 px-3 bg-[#ECECEC] rounded-3xl mb-3">
                            {point}
                        </div>
                    ))}
                </div> */}
            </div>
        </Link>
    ))}
</div>
    <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'end', color: 'var(--description-color)'}}>
        
        Click to read more!
        <Image src="/assets/click-arrow.png" alt="click" width={30} height={30} style={{marginLeft: '1rem'}}/>
        
    </div>



    </div>
  );
};

export default Projects;