import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';

export default function Microsoft () {
   const baseAssetUrl = "/assets/microsoft/";
   const painPoints = ["pt1.webp", "pt2.webp", "pt3.webp","pt4.webp","pt5.webp","pt6.webp"];
    return (
        <div className="flex w-screen min-h-screen flex-col items-center bg-[url('/assets/microsoft/bg.svg')] bg-no-repeat  bg-cover">
         <Navbar/>
            <div className='flex w-full lg:w-[50%] md:w-[50%] justify-center items-center px-4 pt-16'>
                <Image src={`${baseAssetUrl}title.webp`} alt="logo" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='flex w-full lg:w-[50%] md:w-[50%]  justify-center items-center'>
                <Image src={`${baseAssetUrl}mockup.webp`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                The purpose of this project was to design a high-fidelity university course registration system utilizing Microsoft Azure cloud services. The final result is a full-stack system consisting of the student frontend perspective and the backend Azure SQL database database necessary to support this.
            </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8">
               <div className="header-title">
                Project Goals
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-between w-full'>
                    <div className='flex w-full lg:w-[60%] md:w-[50%] justify-center items-center' >
                        <Image src={`${baseAssetUrl}goals.svg`} alt="goals" height={0} width={290} layout="responsive" className="flex w-full"/>
                    </div>
                    <div style={{ fontSize: '6rem', fontWeight:'600', color: 'var(--title-color)' }}>
                        👩🏽‍💻
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="whitespace-nowrap" style={{ fontSize: 'xx-large', fontWeight:'600', color: 'var(--title-color)'}}>
                            My contributions:
                        </div>
                        <div className="picture-header pt-2 whitespace-nowrap">
                            User Experience Research
                        </div>
                        <div className="picture-header whitespace-nowrap">
                            Frontend Development
                        </div>
                    </div>
                </div>
               <div className="header-title pt-4">
                 User Research - Primary & Secondary
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className="picture-header">
                    Primary Research:
               </div>
               <div className='description-text w-full pt-2'>
                    The primary research for the course registration system is focused on understanding user behavior and pain points, particularly with Cornell’s Course Registration System. This involves using a <span className='bolder-text'>survey method to collect data for UI/UX enhancements</span>. We aimed to evaluate ease of use, function usability, and identify potential improvements. We collected <span className='bolder-text'>feedback from 28 respondents</span> and the comprehensive data on the survey method and results can be found&nbsp;
                    <a href={`${baseAssetUrl}UserResearch.pdf`} target="_blank" title="Primary Research Findings">
                    <span className="bolder-text" style={{ textDecoration: 'underline' }}>here</span>
                    </a>. The following are user <span className='bolder-text'>pain points</span> highlighted by several respondents:
               </div>
               <div className="flex justify-center mt-3 items-center flex-row flex-wrap">
                {painPoints.map((item)=>{
                    return (
                        <Image src={`${baseAssetUrl}${item}`} alt="painpoint" width={150} height={150} className="rounded-lg" />
                    );
                })}
               </div>
               <div className="picture-header pt-4">
                    Secondary Research:
               </div>
               <div className='description-text w-full pt-2'>
                    To grasp the intricacies of the course registration system’s information architecture, we conducted a thorough <span className="bolder-text">secondary analysis of existing university systems</span>. Specifically, we scrutinized the course registration processes at <span className="bolder-text">Cornell University, Carnegie Mellon University, and the National University of Singapore</span>. Future works would include analysis of a broader number of university course registration system to understand different university and student needs. Our thorough usability analysis was meticulously compiled into a comprehensive&nbsp;
                        <a href={`${baseAssetUrl}CourseRegistrationFeatureAnalysis.pdf`} target="_blank" title="Secondary Research Case Study">
                            <span className="bolder-text" style={{ textDecoration: 'underline' }}>Case Study slide deck</span>
                        </a>.
                </div>
                <div className='flex justify-center items-center flex-col lg:flex-row md:flex-row sm:flex-col gap-4' style={{ marginTop: '40px' }}>
                    <div className="w-[80%] lg:w-[31%] sm:w-[80%] md:w-[30%]">
                        <Image src={`${baseAssetUrl}cornellPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-[80%] lg:w-[30%] sm:w-[80%] md:w-[30%]">
                        <Image src={`${baseAssetUrl}cmuPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-[80%] lg:w-[28%] sm:w-[80%] md:w-[30%]">
                        <Image src={`${baseAssetUrl}nusPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" />
                    </div>
                </div>
                <div className='description-text w-full pt-4'>
                    Subsequently, using Figma, we synthesized the case study features, identifying five pivotal modules crucial to the student course registration experience: <span className='bolder-text'>the Home Page, Course Catalog, Schedule, Registration, and Student Information modules</span>. This analysis formed the basis for our Research Analysis, where we distilled key feature takeaways and defined must-haves and nice-to-haves based on our findings.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                  <div className="picture-header pb-2">
                       Feature Analysis
                    </div>
                    <a href="https://www.figma.com/board/jeSb53KDMHuS19KytU4ipJ/Course-Registration_Case-Study-Feature-Synthesis?node-id=0-1&t=taHA45dyBOxfHHOS-1" target="_blank" rel="noopener noreferrer">
                     <Image src={`${baseAssetUrl}featureAnalysis.webp`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                  </div>
               </div>
               <div className="header-title pt-4">
                    Figma Prototypes
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                    We then delved into detailing the Figma Prototype, including <span className='bolder-text'>Lo-fi, Mid-fi, and Hi-fi Prototypes</span>. This comprehensive approach ensures a clear and systematic understanding of the essential elements guiding the course registration system’s development.
               </div>
               <div className='flex flex-col md:flex-row lg:flex-row sm:flex-col justify-center pt-4'>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/MooiMOAVEL7Oe0OiI0wp5R/Lo-Fi-Prototype?node-id=0-1&t=4IdGsfycJpHyoOJc-1" target="_blank" title="Lo-Fi Prototype">
                        <Image src={`${baseAssetUrl}lofiDesign.webp`}  alt="lofi"  width={100} height={100} layout="responsive" className="rounded-lg"/>
                    </a>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/w25Fq3HTZC20cfcb1wEaQR/Mid-Fi-Prototype?node-id=697-6&t=8bUwtuAQMtx0idjK-1" target="_blank" title="Mid-Fi Prototype">
                        <Image src={`${baseAssetUrl}midfiDesign.webp`}  alt="midfi"  width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/WXSxqGwZogvZwJUQpvP73B/Hi-Fi-Prototype?node-id=697-6&t=Z0zfmZrIgfx6dmHK-1" target="_blank" title="Hi-Fi Prototype">
                        <Image src={`${baseAssetUrl}hifiDesign.webp`}  alt="hifi"  width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                </div>
                <div className='description-text w-full pt-8'>
                    In developing the prototype, we implemented a&nbsp;
                        <a href="https://www.figma.com/design/rjzrqWxZ1CkClEYtEd54yE/Design-System_Style-Guide-%26-Components?node-id=491-1064&t=0k6uosuUcul1ruxe-1" target="_blank" title="Design System">
                            <span className="bolder-text" style={{ textDecoration: 'underline' }}>design system with a color and font scheme</span>
                        </a>&nbsp;
                        from Cornell University. It was chosen as an illustrative example due to our accessibility to its resources. This intentional design choice ensures scalability, facilitating the seamless replacement of colors to align with those of other universities. Within this framework, we integrated PrimeNG Components for development purposes, contributing to a cohesive and visually consistent design system.
                </div>
                <div className="header-title pt-4">
                    Frontend Development
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                As for the frontend, I developed it using <span className='bolder-text'>AngularJs framework</span> and utilised third-party packages <span className='bolder-text'>PrimeNG, PrimeFlex and FullCalendar.io</span>. PrimeNG is an AngularJS-compatible library with UI components that make development faster, cleaner, and more efficient. It is combined with PrimeFlex, a responsive CSS utility library to accompany Prime UI libraries. The most challenging component to develop was the Scheduler screen, as we needed a third-party component compatible with AngularJS. Hence, after much investigation, we used FullCalendar, which had most of the functionalities we needed for our development. However, as we need Premium features to fully display all the features we planned to develop, our Scheduler as of now, is only capable of displaying static data.
               </div>
               <div className="flex w-full justify-center items-center py-4">
                  <div className="w-[80%] lg:w-[50%] md:w-[70%] sm:w-[80%]">
                     <Image src={`${baseAssetUrl}frontend.webp`} alt="frontend" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
            </div>
             <div className='description-text w-[80%] md:w-[60%] lg:w-[80%] sm:w-[80%] pt-4 text-center'>
                We presented the finalized course registration system to our clients and received high praise and appreciation for the development efforts. The clients thoroughly enjoyed the product and has
                    <a href="https://devblogs.microsoft.com/azure-sql/course-registration-project-with-azure-sql-database/" target="_blank" title="Microsoft Dev Blog"> published our work on&nbsp;
                        <span className='bolder-text' style={{ textDecoration: 'underline' }}>Microsoft’s Dev Blogs</span>
                     </a>, indicating a successful demonstration of the system's capabilities.
            </div>
            <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-[80%] lg:w-[50%] sm:w-[80%] md:w-[60%]">
                     <Image src={`${baseAssetUrl}final.gif`} alt="teamPicture"  width={100} height={100} layout="responsive" className="rounded-lg" unoptimized style={{ marginBottom: 10, borderRadius: 15 }} />
                  </div>
            </div>
            <div className="header-title pb-12">
                  <a href="https://github.com/ssunil3232/MPS_Project" target="_blank" title="Github Repository">
                    <span  style={{ textDecoration: 'underline', fontSize: '25px' }}>Github Repository Link</span>
                  </a>
            </div>
           <ScrollTop /> 
        </div>
    );
}