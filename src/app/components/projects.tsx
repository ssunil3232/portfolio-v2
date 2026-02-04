import React, { useRef } from 'react';
import projects from "../data/project-info.json";
import Image from 'next/image';
import Link from 'next/link';
import { reenie_beanie } from '../ui/fonts';
import '../globals.css'; 
import { motion } from 'framer-motion';

const Projects = () => {
    const [hovered, setHovered] = React.useState(false);

    const projectsRef = useRef<HTMLDivElement>(null);

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    <div ref={projectsRef} className="projects-shell">
        <div className="projects-header">
            <motion.div
                className={`${reenie_beanie.className} projects-kicker`}
                onClick={scrollToProjects}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 240 }}
            >
                <span className="projects-kicker-text">selected work</span>
                <span className={`projects-kicker-underline ${hovered ? 'is-active' : ''}`} />
            </motion.div>
            <h2 className="projects-title">Projects with product, UX, and storytelling focus.</h2>
            <p className="projects-subtitle">
                Large, case-study style highlights inspired by clean editorial layouts.
            </p>
        </div>

        <div className="projects-list">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className={`project-row ${index % 2 === 1 ? 'project-row--reverse' : ''}`}
                    initial={{ opacity: 0, y: index % 2 === 1 ? -40 : 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: index * 0.08 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                        <div className="project-text">
                            <p className="project-subtitle-text">{project.header}</p>
                            <h3 className="project-title">{project.description}</h3>
                            <p className="project-meta">
                                {project.timeline} | {project.tools.join(', ')}
                            </p>
                        </div>
                        <Link href={project.link} className={`project-media ${index % 2 === 1 ? 'project-media--tilt-left' : 'project-media--tilt-right'}`} aria-label={project.header}>
                            <Image
                                src={project.preview}
                                alt={`${project.id}-Preview`}
                                width={900}
                                height={700}
                                className="project-image"
                            />
                            {project.new && <span className="project-read">new!</span>}
                        </Link>
                </motion.div>
            ))}
        </div>
    </div>
  );
};

export default Projects;
