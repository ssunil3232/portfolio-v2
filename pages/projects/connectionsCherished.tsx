import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';

export default function ConnectionsCherished () {
   const baseAssetUrl = "/assets/connectionsCherished/";
   
    return (
        <div className="flex w-screen min-h-screen flex-col items-center bg-[url('/assets/connectionsCherished/background.svg')] bg-no-repeat bg-cover">
         <Navbar/>
            <div className='flex w-full lg:w-[50%] md:w-[50%]  justify-center items-center pb-8'>
                <Image src={`${baseAssetUrl}logo.webp`} alt="logo" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='flex w-full lg:w-[50%] md:w-[50%]  justify-center items-center py-8'>
                <Image src={`${baseAssetUrl}preview.png`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                Connections Cherished is designed to help users nurture their friendships by providing thoughtful reminders to stay in touch. In today’s fast-paced world, maintaining meaningful relationships can often take a backseat. Cherished Connections seeks to address this gap by leveraging intuitive design and seamless functionality to make staying connected effortless.
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
                    User Research
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    The design philosophy behind Cherished Connections was <span className='bolder-text'>centered around empathy and usability</span>. I conducted surveys and interviews to understand how people currently manage their relationships.
                    Identified pain points such as <span className='bolder-text'>forgetfulness, lack of time, and the impersonal nature of automated reminders.</span>
                    I then developed a low-fidelity wireframe to visualize the user journey and then iterated on interactive prototypes, testing with potential users to gather feedback and refine the interface.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                    <div className="w-[100%] ">
                        <Image src={`${baseAssetUrl}media.gif`} alt="workflow"  width={100} height={100} layout="responsive" className="rounded-lg" unoptimized style={{ marginBottom: 10, borderRadius: 15 }} />
                    </div>
                </div>
                
                <div className="header-title pt-4">
                    Development details
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='w-full flex flex-col items-center pt-4 pl-8'>
                    <div className="w-full picture-header pl-8 justify-start">
                        Flutter framework:
                    </div>
                    <div className='w-[90%] flex flex-col items-center'>
                    <ol className="bullet-list">
                        <li>
                            <div>
                                Leveraged Flutter’s cross-platform capabilities to create a smooth and responsive user experience on both iOS and Android.
                            </div>
                        </li>
                        <li>
                            <div>
                                Built reusable widgets for components like reminders and dashboards.
                            </div>
                        </li>
                    </ol>
                  </div>
                </div>
                <div className='w-full flex flex-col items-center pt-4 pl-8'>
                    <div className="w-full picture-header pl-8 justify-start">
                        Firestore Integration:
                    </div>
                    <div className='w-[90%] flex flex-col items-start'>
                    <ol className="bullet-list">
                        <li>
                            <div>
                                Implemented a Firestore backend to store user data and reminder settings, securely and in real-time.
                            </div>
                        </li>
                    </ol>
                  </div>
                </div>
                <div className='w-full flex flex-col items-center pt-4 pl-8'>
                    <div className="w-full picture-header pl-8 justify-start">
                        Connection Management:
                    </div>
                    <div className='w-[90%] flex flex-col items-center'>
                    <ul className="bullet-list">
                        <li>
                            <div>
                                Users can add and edit connections with detailed information such as contact frequency and birthdays.
                            </div>
                        </li>
                        <li>
                            <div>
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
                3. Explore AI-driven suggestions for personalized gift ideas or conversation topics.<br/>
                </div>
            <div className="flex flex-row flex-wrap header-title pt-4 pb-12">
                Artifacts: 
                
                <div className='flex flex-row w-[90%] justify-start'>
                     <a className='mx-5' href="https://github.com/ssunil3232/connections-cherished" target="_blank" title="Github Link">
                        <Image src={`${baseAssetUrl}github.webp`} alt="github" width={50} height={50} className="rounded-lg" />
                     </a>
                  </div>
                </div>
           <ScrollTop /> 
        </div>
        </div>
    );
}