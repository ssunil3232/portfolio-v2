import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';
import { Image as PrimeImage } from 'primereact/image';
import { PrimeIcons } from 'primereact/api';

export default function Microsoft () {
   const baseAssetUrl = "/assets/microsoft/";
   const painPoints = ["pt1.webp", "pt2.webp", "pt3.webp","pt4.webp","pt5.webp","pt6.webp"];
    return (
        <div className="flex w-screen min-h-screen flex-col items-center">
         <Navbar/>
            <div className='flex w-full lg:w-[45%] md:w-[50%] justify-center items-center px-4 py-4'>
                <Image src={`${baseAssetUrl}title2.svg`} alt="logo" height={50} width={200}layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='flex w-full lg:w-[80%] md:w-[70%]  justify-center items-center'>
                <Image src={`${baseAssetUrl}mockup5.png`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                Designed & Prototyped a high-fidelity university course registration system, alleviating the tedious and overwhelming pain experienced by students using existing systems, in collaboration with Microsoft clients.
            </div>
            <div className="flex w-full justify-center perspective-container">
               <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-2 w-[90%]">
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Scope</div>
                     <div>Microsoft-Cornell <br />
                     Capstone project</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Role</div>
                     <div>UX Designer</div>
                     <div>Frontend Developer</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Timeline</div>
                     <div>Jul - Dec 2023</div>
                  </div>
                  
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Team</div>
                     <div>1 UX Researcher</div>
                     <div>1 UI/UX Engineer</div>
                     <div>2 Backend Engineers</div>
                     <div>2 Project Managers</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Process</div>
                     <div>UX Research</div>
                     <div>UX Design</div>
                     <div>Frontend Dev</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Recognition</div>
                     <div><span className='bolder-text'>Published </span>on Microsoft Dev Blogs (
                        <a href="https://devblogs.microsoft.com/azure-sql/course-registration-project-with-azure-sql-database/" target="_blank" title="Microsoft Dev Blog">
                            <span className='bolder-text' style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>link</span>
                        </a>)</div>
                  </div>
               </div>
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
                 User Research
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className="picture-header">
                    Primary Research:
               </div>
               <div className='description-text w-full pt-2'>
                    The primary research for the course registration system is focused on understanding user behavior and pain points, particularly with Cornell’s Course Registration System. This involves using a <span className='bolder-text'>survey method to collect data for UI/UX enhancements</span>. We aimed to evaluate ease of use, function usability, and identify potential improvements. We collected <span className='bolder-text'>feedback from 28 respondents</span> and the comprehensive data on the survey method and results can be found&nbsp;
                    <a href={`${baseAssetUrl}UserResearch.pdf`} target="_blank" title="Primary Research Findings">
                    <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>here</span>
                    </a>. The following are user <span className='bolder-text'>pain points</span> highlighted by several respondents:
               </div>
               <div className="flex justify-center mt-3 items-center flex-row flex-wrap">
                {painPoints.map((item)=>{
                    return (
                        <Image src={`${baseAssetUrl}${item}`} alt="painpoint" width={120} height={120} className="rounded-lg" />
                    );
                })}
               </div>
               <div className="picture-header pt-4">
                    Secondary Research:
               </div>
               <div className='description-text w-full pt-2'>
                    To grasp the intricacies of the course registration system’s information architecture, we conducted a thorough <span className="bolder-text">secondary analysis of existing university systems</span>. Specifically, we scrutinized the course registration processes at <span className="bolder-text">Cornell University, Carnegie Mellon University, and the National University of Singapore</span>. Future works would include analysis of a broader number of university course registration system to understand different university and student needs. Our thorough usability analysis was meticulously compiled into a comprehensive&nbsp;
                        <a href={`${baseAssetUrl}CourseRegistrationFeatureAnalysis.pdf`} target="_blank" title="Secondary Research Case Study">
                            <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Case Study slide deck</span>
                        </a>.
                </div>
                <div className='flex justify-center items-center flex-col lg:flex-row md:flex-row sm:flex-col gap-4' style={{ marginTop: '40px' }}>
                    <div className="w-[80%] lg:w-[31%] sm:w-[80%] md:w-[30%]">
                        <PrimeImage src={`${baseAssetUrl}cornellPrev.webp`} zoomSrc={`${baseAssetUrl}cornellPreview.png`} alt="secondaryResearch" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                        {/* <Image src={`${baseAssetUrl}cornellPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" /> */}
                    </div>
                    <div className="w-[80%] lg:w-[30%] sm:w-[80%] md:w-[30%]">
                    <PrimeImage src={`${baseAssetUrl}cmuPrev.webp`} zoomSrc={`${baseAssetUrl}cmuPreview.png`} alt="secondaryResearch" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                        {/* <Image src={`${baseAssetUrl}cmuPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" /> */}
                    </div>
                    <div className="w-[80%] lg:w-[28%] sm:w-[80%] md:w-[30%]">
                    <PrimeImage src={`${baseAssetUrl}nusPrev.webp`} zoomSrc={`${baseAssetUrl}nusPreview.png`} alt="secondaryResearch" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                        {/* <Image src={`${baseAssetUrl}nusPrev.webp`}  alt="secondaryResearch" width={150} height={150} layout="responsive" className="rounded-lg" /> */}
                    </div>
                </div>
                <div className='description-text w-full pt-4'>
                    Subsequently, we synthesized the case study features, identifying five pivotal modules crucial to the student course registration experience: <span className='bolder-text'>the Home Page, Course Catalog, Schedule, Registration, and Student Information modules</span>. This analysis formed the basis for our  
                    <a href="https://www.figma.com/board/o5dLrJjEOfSNmdV8uqWGJM/Case-Study-feature-Synthesis?node-id=0-1&t=98jA5x2UiHanGBvG-1" target="_blank" title="Feature Analysis & Information Architecture">
                            &nbsp;<span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Research Analysis</span>
                        </a>, where we distilled key feature takeaways and defined must-haves and nice-to-haves based on our findings, as well as an information architecture to conclude.
                </div>
                <div className="flex w-full justify-center items-center pt-4 relative">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                    <div className="picture-header pb-2">
                       Feature Analysis
                    </div>
                    {/* <a href="https://www.figma.com/board/jeSb53KDMHuS19KytU4ipJ/Course-Registration_Case-Study-Feature-Synthesis?node-id=0-1&t=taHA45dyBOxfHHOS-1" target="_blank" rel="noopener noreferrer">
                     <Image src={`${baseAssetUrl}featureAnalysis.webp`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a> */}
                    <PrimeImage src={`${baseAssetUrl}featureAnalysis.webp`} zoomSrc={`${baseAssetUrl}featureAnalysisPreview.png`} alt="featureAnalysis" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                    <div className="picture-header pb-2">
                       Information Architecture
                    </div>
                    <PrimeImage src={`${baseAssetUrl}infoArchitecture.png`} zoomSrc={`${baseAssetUrl}infoArchitecture.png`} alt="infoArchitecture" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                  </div>
                  <Image src={`${baseAssetUrl}point_arrow.gif`} alt="arrow_pt" width={80} height={80} className="rounded-lg absolute bottom-[5%] right-[5%] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px]" />
               </div>
               <div className="header-title pt-4">
                    Figma Prototypes
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                    We then delved into detailing the Figma Prototype, including <span className='bolder-text'>Lo-fi, Mid-fi, and Hi-fi Prototypes</span>. This comprehensive approach ensures a clear and systematic understanding of the essential elements guiding the course registration system’s development.
               </div>
               <div className="flex w-full justify-center items-center pt-4">
                    <Image src={`${baseAssetUrl}pointers_3.png`}  alt="arrow"  width={100} height={100}/>
               </div>
               <div className='flex flex-col md:flex-row lg:flex-row sm:flex-col justify-center pt-4'>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/4Urpjn30p0MUpepNGaPuC5/Lo-fi-Prototype?node-id=0-1&t=6nfUP1Ou6biBf6Ch-1" target="_blank" title="Lo-Fi Prototype">
                        <Image src={`${baseAssetUrl}lofiDesign.webp`}  alt="lofi"  width={100} height={100} layout="responsive" className="rounded-lg"/>
                    </a>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/jELe9TcBqsN50igb0pshwG/Mid-fi-Prototype?node-id=8-3713&t=6nfUP1Ou6biBf6Ch-1" target="_blank" title="Mid-Fi Prototype">
                        <Image src={`${baseAssetUrl}midfiDesign.webp`}  alt="midfi"  width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                    <a className='mx-5 lg:w-[30%]' href="https://www.figma.com/design/cKqZcpNPCRXtxWIM81qJuL/Hi-fi-Prototype?t=6nfUP1Ou6biBf6Ch-1" target="_blank" title="Hi-Fi Prototype">
                        <Image src={`${baseAssetUrl}hifiDesign.webp`}  alt="hifi"  width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                </div>
                <div className='description-text w-full pt-8'>
                    In developing the prototype, we implemented a&nbsp;
                        <a href="https://www.figma.com/design/0NK6o6aXwWWsVCHyAOXPvK/Design-System?t=pit8q8A7Jn9Iyerd-1" target="_blank" title="Design System">
                            <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>design system with a color and font scheme</span>
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
                        <span className='bolder-text' style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Microsoft’s Dev Blogs</span>
                     </a>, indicating a successful demonstration of the system's capabilities.
            </div>
            {/* <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-[80%] lg:w-[50%] sm:w-[80%] md:w-[60%]">
                     <Image src={`${baseAssetUrl}final.gif`} alt="teamPicture"  width={100} height={100} layout="responsive" className="rounded-lg" unoptimized style={{ marginBottom: 10, borderRadius: 15 }} />
                  </div>
            </div> */}
            <div className='flex justify-center w-full py-4' >
                <video className='w-[70%]' height="auto" controls autoPlay muted loop>
                    <source src={`${baseAssetUrl}msVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <div className="header-title pb-12">
                  <a href="https://github.com/ssunil3232/MPS_Project" target="_blank" title="Github Repository">
                    <span  style={{ textDecoration: 'underline', fontSize: '25px' }}>Github Repository Link</span>
                  </a>
            </div> */}
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col">
                <div className="header-title">
                Artifacts
                </div>
                <div className='header-underline mt-2 mb-4'></div>
                    <div className="flex w-full flex-row">
                        <a className='mx-1' href="https://www.figma.com/team_invite/redeem/bqGnTWc2AomnFRq7vDq82v" target="_blank" title="Figma">
                            <Image src={`${baseAssetUrl}figmaLogo.svg`} alt="Figma" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </a>
                        <a className='mx-1' href="https://github.com/ssunil3232/MPS_Project" target="_blank" title="Github">
                            <Image src={`${baseAssetUrl}gitLogo.svg`} alt="Git" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </a>
                    </div>
                </div>
           <ScrollTop /> 
        </div>
    );
}