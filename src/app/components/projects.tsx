import React from 'react';
import projects from "../data/project-info.json";
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    const colors = [
        "#f5febd", "#FA9D89", "#FDE298", "#F4B7D5", "#D9E5F9", "#E7D6FB", "#eddbc9", "#b8cff3" 
    ];
  return (
    <div className='flex flex-col min-h-screen w-full'>
        <h1 style={{ fontSize: 'xx-large', color: 'var(--focus-color)' }}>Projects</h1>
        <div className='header-underline mt-2'></div>
        <div className='project-section w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 pb-8'>
    {projects.map((project, index) => (
        <Link href={project.link} key={index}>
            <div className="block h-full flex flex-col justify-between">
                <div className="card-content flex flex-col flex-grow" style={{ background: colors[index] }}>
                    <Image src={project.preview} alt={`${project.id}-Preview`} width={600} height={400} layout="responsive" className="w-full h-auto rounded-lg" />
                    <h2 style={{ fontSize: 'x-large', color: 'var(--description-color)' }}>{project.header}</h2>
                    <p style={{ fontSize: 'large' }}>{project.description}</p>
                </div>
                <div className="flex flex-row flex-wrap space-x-3 pt-3">
                    {project.tools.map((point, idx) => (
                        <div key={idx} className="py-1 px-3 bg-[#ECECEC] rounded-3xl mb-3">
                            {point}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    ))}
</div>



    </div>
  );
};

export default Projects;