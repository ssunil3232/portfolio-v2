import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';
import { Image as PrimeImage } from 'primereact/image';

export default function ConnectionsCherished () {
   const baseAssetUrl = "/assets/connectionsCherished/";
   
    return (
        <div className="flex w-screen min-h-screen flex-col items-center  bg-no-repeat bg-cover">
         <Navbar/>
            {/* <div className='flex w-[50%] lg:w-[30%] md:w-[30%] sm:w-[50%]  justify-center items-center pb-4'>
                <Image src={`${baseAssetUrl}logo.webp`} alt="logo" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='flex w-[80%] lg:w-[70%] md:w-[70%] sm:w-[80%] justify-center items-center pb-8'>
                <Image src={`${baseAssetUrl}preview2.png`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div> */}
            <div className='flex w-[80%] lg:w-[60%] md:w-[60%] sm:w-[80%] justify-center items-center pb-8'>
                <Image src={`${baseAssetUrl}title.png`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                Connections Cherished is designed to help users nurture their friendships by providing <span className='bolder-text'>thoughtful reminders to stay in touch</span>. In today’s fast-paced world, maintaining meaningful relationships can often take a backseat and Cherished Connections seeks to make staying connected effortless.
            </div>
            <div className="flex w-full justify-center perspective-container">
               <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-4 gap-2 w-[90%]">
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Scope</div>
                     <div>Personal Project
                     </div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Timeline</div>
                     <div>Aug 2024 - <span className='bolder-text'>Ongoing</span></div>
                  </div>
                  <div className="flex flex-col perspective-description">
                    <div className="perspective-header">Process</div>
                    <div>UX Research</div>
                    <div>UX Design</div>
                    <div>Frontend Development</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                    <div className="perspective-header">Recognition</div>
                    <div>Launch-ready for App store</div>
                  </div>
               </div>
            </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8">
                <div className="header-title">
                    Problem Statement
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    In a world dominated by busy schedules and digital distractions, many people struggle to maintain consistent communication with their friends and loved ones. Cherished Connections was born from the insight that small, regular interactions can greatly strengthen relationships, yet they are often overlooked.
               </div>
               <div className="header-title pt-4">
                User Research Process
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    To understand the problem space better - to understand the varying challenges, significance of this problem to individuals, current methods and their limitations, I started by conducting interviews with varied demographics. 
                    I recruited <span className='bolder-text'>8 individuals</span> from <span className='bolder-text'>different age groups, genders and professions</span>, as well as <span className='bolder-text'>varied social lifestyles (extroverts & introverts)</span> and those <span className='bolder-text'>living away from family and friends</span> as I felt there would be a significant difference in their approach to maintaining relationships.
                    I <span className='bolder-text'>supplemented this with a survey to gather quantitative data</span> on the frequency of communication and the challenges faced by individuals in maintaining relationships. The following are the breakdown of the interview pool:
                    {/* <br/>Gathering the data from these interviews, I created activity notes and derived an affinity diagram to identify patterns and insights. */}
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                <div className="flex flex-wrap justify-center w-full">
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <Image src={`${baseAssetUrl}data1.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <Image src={`${baseAssetUrl}data2.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <Image src={`${baseAssetUrl}data3.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <Image src={`${baseAssetUrl}data4.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3">
                        <Image src={`${baseAssetUrl}data5.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="header-title pt-4">
                    Data Analysis
                </div>
                <div className='header-underline mt-2 mb-4'></div>
                <div className='description-text w-full'>
                    Gathering the data I created activity notes and derived an affinity diagram to identify patterns and insights.
                    The following is the 
                    &nbsp;<a href="https://www.figma.com/board/jkoCry31aagkOiQ21mqC3Z/Affinity-Diagram?node-id=0-1&t=APftfgANdXMuOfjp-1" target="_blank" title="Affinity">
                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Affinity diagram</span>
                    </a>&nbsp;
                    that was created, followed by a summary of the insights gathered.
                </div>
                <PrimeImage src={`${baseAssetUrl}affinity.png`} alt="affinity" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image " />
                <div className="flex w-full justify-center items-center pt-4">
                <PrimeImage src={`${baseAssetUrl}summary.png`} alt="summary" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image w-[50%]" />
                </div>
                <div className="header-title pt-4">
                    Persona
                </div>
                <div className='header-underline mt-2 mb-4'></div>
                <div className='description-text w-full'>
                    This then allowed me to create a <span className='bolder-text'>persona</span> that would represent the target user group for the application. The persona related to the user group that would benefit the most from the application, which tends to be <span className='bolder-text'>those
                    living away from family and friends and those with busy schedules</span>. The persona was created to help guide the design process and ensure that the application would cater to the needs of the target user group.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                <PrimeImage src={`${baseAssetUrl}persona.png`} alt="persona" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image w-[70%]" />
                </div>
                <div className="header-title pt-4">
                    Requirements gathered
                </div>
                <div className='header-underline mt-2 mb-4'></div>
                <div className='description-text w-full'>
                    Based on the insights gathered from the user research, I identified the key requirements for the application. These <span className='bolder-text'>main 3 requirements</span> were critical challenges faced by the user and would make the defining deliverable of the application.
                </div>
                <div className='project-section w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mt-6 pb-8'>
                    <Image src={`${baseAssetUrl}req1.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                    <Image src={`${baseAssetUrl}req2.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                    <Image src={`${baseAssetUrl}req3.png`} alt="data" width={100} height={100} layout="responsive" className="rounded-lg" />
                </div>
                <div className="header-title pt-4">
                    User Journey Mapping & test scenarios
                </div>
                <div className='header-underline mt-2 mb-4'></div>
                <div className='description-text w-full'>
                    To visualize the user journey and test the application, I created a user journey map that outlined the steps a user would take to achieve their goal. 
                    This allowed me to identify how the application can supplement the feature requirements, as well as possible bottlenecks.
                    The following are the <span className='bolder-text'>3 test scenarios</span> that were created to test the application:
                </div>
                <div className='project-section w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mt-6 pb-8'>
                    <PrimeImage src={`${baseAssetUrl}test-case-1.png`} alt="testcase1" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                    <PrimeImage src={`${baseAssetUrl}test-case-2.png`} alt="testcase2" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                    <PrimeImage src={`${baseAssetUrl}test-case-3.png`} alt="testcase3" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                </div>
               <div className="header-title pt-4">
                    Lo-Fi, Mid-Fi & Hi-Fi Prototypes
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    The design philosophy behind Cherished Connections was <span className='bolder-text'>centered around empathy and usability</span>.
                    After identifying key pain points such as <span className='bolder-text'>forgetfulness, scheduling difficulties, and lack of conversation starters</span>, I designed a user-friendly interface that would help users overcome these challenges.
                    <ol className="bullet-list pt-4">
                        <li>
                            <div className="flex w-full justify-start ">
                                <div className="description-text w-[70%]">
                                    I first developed a 
                                    &nbsp;<a href="https://www.figma.com/design/b88u6R7qjOfl3f3vr5OMLP/Lo-Fidelity-Design?node-id=15-972&t=APftfgANdXMuOfjp-1" target="_blank" title="Lo-Fi">
                                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>low-fidelity wireframe</span>
                                    </a>&nbsp;
                                    to visualize the user journey and then iterated on its interactive prototype, testing with potential users to gather feedback and refine the interface.
                                </div>
                                
                                <div className="w-[30%]">
                                    <PrimeImage src={`${baseAssetUrl}lofi.png`} alt="lofi" indicatorIcon="pi pi-expand" zoomSrc={`${baseAssetUrl}lofi.gif`} preview className="rounded-lg expand-image" />
                                </div>
                            </div>
                            
                        </li>
                        <li>
                        <div className="flex w-full justify-start ">
                                <div className="description-text w-[70%]">
                                    This allowed me to improve the design, coming up with a 
                                    
                                    &nbsp;<a href="https://www.figma.com/design/I6Y4JeiXaOk6fCkR3Kyryt/Mid-Fidelity-Design?node-id=174-213&t=APftfgANdXMuOfjp-1" target="_blank" title="Mid-Fi">
                                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>mid-fidelity prototype </span>
                                    </a>&nbsp;
                                    that was much closer to the final product and followed the "happy path" of the user journey for each test case.
                                </div>
                                
                                <div className="w-[30%]">
                                    <PrimeImage src={`${baseAssetUrl}midfi.png`} alt="midfi" indicatorIcon="pi pi-expand" zoomSrc={`${baseAssetUrl}midfi.gif`} preview className="rounded-lg expand-image" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="description-text">
                                Finally, I brainstormed on suitable color schemes and typography for varied demographics in age and gender, which allowed me to create the  
                                &nbsp;<a href="https://www.figma.com/design/Vz1XrgPNydkdhwqEXVdSHL/Hi-Fi-Prototype-Design?node-id=1-2&t=yovivvfiiq1VSM0Z-1" target="_blank" title="Mid-Fi">
                                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>high-fidelity prototype</span>
                                    </a>&nbsp;
                                that was ready for development.
                            </div>
                        </li>
                    </ol>
                </div>
                <div className='flex justify-center w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4' >
                    {/* <div style={{color: 'var(--focus-color)'}}>Administrative User App View</div> */}
                    <video  height="auto" controls autoPlay muted loop>
                        <source src={`${baseAssetUrl}1.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video  height="auto" controls autoPlay muted loop>
                        <source src={`${baseAssetUrl}2.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video height="auto" controls autoPlay muted loop>
                        <source src={`${baseAssetUrl}3.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video  height="auto" controls autoPlay muted loop>
                        <source src={`${baseAssetUrl}4.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* <div className="flex w-full justify-center items-center pt-4">
                    <div className="w-[100%] ">
                        <Image src={`${baseAssetUrl}media.gif`} alt="workflow"  width={100} height={100} layout="responsive" className="rounded-lg" unoptimized style={{ marginBottom: 10, borderRadius: 15 }} />
                    </div>
                </div> */}
                
                <div className="header-title pt-4">
                    Development details
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='w-full flex flex-col items-start pt-4'>
                    <div className="w-full picture-header justify-start">
                        Flutter framework:
                    </div>
                    <div className='w-full flex flex-col items-center'>
                    <ol className="bullet-list">
                        <li>
                            <div className="description-text">
                                Leveraged Flutter’s cross-platform capabilities to create a smooth and responsive user experience on both iOS and Android.
                            </div>
                        </li>
                        <li>
                            <div className="description-text">
                                Built reusable widgets for components like reminders and dashboards.
                            </div>
                        </li>
                    </ol>
                  </div>
                </div>
                <div className='w-full flex flex-col items-start pt-4'>
                    <div className="w-full picture-header justify-start">
                        Firestore Integration:
                    </div>
                    <div className='w-full flex flex-col items-start'>
                    <ol className="bullet-list">
                        <li>
                            <div className="description-text">
                                Implemented a Firestore backend to store user data and reminder settings, securely and in real-time.
                            </div>
                        </li>
                    </ol>
                  </div>
                </div>
                <div className='w-full flex flex-col items-start pt-4'>
                    <div className="w-full picture-header justify-start">
                        Connection Management:
                    </div>
                    <div className='w-full flex flex-col items-center'>
                    <ul className="bullet-list">
                        <li>
                            <div className="description-text">
                                Users can add and edit connections with detailed information such as contact frequency and birthdays.
                            </div>
                        </li>
                        <li>
                            <div className="description-text">
                                A vibrant dashboard highlights pending connections needing attention, using color-coded prompts to signify urgency (e.g., “It’s been a long time, mate”).
                            </div>
                        </li>
                    </ul>
                  </div>
                </div>
                <div className="header-title pt-4">
                    Reflections
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Building Cherished Connections was a deeply rewarding experience that allowed me to blend my technical expertise in Flutter with my passion for creating meaningful user experiences. The project taught me the importance of empathy-driven design and the value of user feedback in shaping a product that truly resonates.
                </div>
                <div className="header-title pt-4">
                    Future Plans
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                1. Expand the app’s functionality to include group reminders for planning meetups.<br/>
                2. Incorporate analytics to help users understand and improve their communication patterns.<br/>
                3. Explore AI-driven suggestions for personalized conversation topics.<br/>
                </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-4">
                            <div className="header-title">
                                Artifacts
                            </div>
                            <div className='header-underline mt-2 mb-4'></div>
                                <div className="flex w-full flex-row">
                                 <a className='mx-1' href="https://www.figma.com/team_invite/redeem/0awnUml3sAx1Qt4RaejGHz" target="_blank" title="Figma">
                                    <Image src={`${baseAssetUrl}figmaLogo.svg`} alt="Figma" width={100} height={100} layout="responsive" className="rounded-lg" />
                                </a>
                                <a className='mx-1' href="https://github.com/ssunil3232/connections-cherished" target="_blank" title="Github Link">
                                    <Image src={`${baseAssetUrl}gitLogo.svg`} alt="github" width={100} height={100} layout="responsive" className="rounded-lg" />
                                </a>
                                    
                                    {/* <a className='mx-1' href={`${baseAssetUrl}FinalReport.pdf`} target="_blank" title="Report">
                                        <Image src={`${baseAssetUrl}reportLogo.svg`} alt="Git" width={100} height={100} layout="responsive" className="rounded-lg" />
                                    </a> */}
                                </div>
                            </div>
           <ScrollTop /> 
        </div>
        </div>
    );
}