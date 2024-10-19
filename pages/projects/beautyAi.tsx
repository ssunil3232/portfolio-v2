import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';

export default function BeautyAi () {
   const baseAssetUrl = "/assets/beautyAi/";
    return (
        <div className="flex w-screen min-h-screen flex-col items-center bg-[url('/assets/beautyAi/background.svg')] bg-no-repeat">
         <Navbar/>
            {/* <div className="absolute top-0">
                <Image src={`${baseAssetUrl}backgroundReverse.webp`} alt="bg" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
            </div> */}
            <div className="flex w-[80%] lg:flex-row md:flex-col sm:flex-col flex-col">
                <div className='flex w-full lg:w-[50%] md:w-[50%] justify-center items-center px-4 pt-16'>
                    <div className="flex flex-col w-full justify-center">
                        <Image src={`${baseAssetUrl}logo.svg`} alt="logo" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
                        <div className="pt-4 flex text-center justify-center" style={{color: '#4f293a', fontSize: 'larger'}}>AI-recommended makeup styles and techniques for you!</div>
                        <Image src={`${baseAssetUrl}hifi.webp`} alt="preview" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
                    </div>
                </div>
                <div className='flex w-full lg:w-[50%] md:w-[50%]  justify-center items-center'>
                    <Image src={`${baseAssetUrl}mockup.webp`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
                </div>
            </div>
            
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                The aim of this project, was to utilise user-centered design concepts to address the <span className='bolder-text'>challenges faced in tailoring and learning makeup styles and techniques suitable for each unique facial structure, tone, complexion</span>.
                </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8">
                <div className="header-title">
                    Problem Statement
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                Makeup styles can be intimidating and confusing. Many users want to find the optimal makeup styles and techniques for their unique skin tone, facial shapes, and features, but feel overwhelmed by the time and energy this takes. They also want to match their makeup style to specific occasions and their shifting schedules. Our project aims to enhance users’ confidence and overall experience by offering <span className='bolder-text'>personalized makeup style recommendations and tutorials, while connecting them with a community of skilled makeup enthusiasts</span>.
               </div>
               <div className="header-title pt-4">
               Interview Plan & Protocol
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                To understand the problem space better - to understand the varying challenges, significance of this problem to individuals, current methods and their limitations, we first developed a comprehensive interview protocol and plan.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full py-4 ">
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}participants.webp`} alt="participants" width={100} height={100} layout="responsive" className="rounded-lg" style={{ borderRadius: 10 }} />
                    </div>
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}recruitment.webp`} alt="recruitment" width={100} height={100} layout="responsive" className="rounded-lg" style={{ borderRadius: 10 }}/>
                    </div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='justify-center w-[80%] items-center text-center p-4' style={{ background: '#efe6eb', borderRadius: "30px" }}>
                        We recruited <span className='bolder-text'>8 participants</span> who fit our target group. After obtaining informed consent, we proceeded with the interview, taking notes while recording the audio. Each interview lasted around <span className='bolder-text'>30-40 minutes long</span> and was <span className='bolder-text'>conducted in-person</span>, in an area with access to the individual’s makeup tools.
                    </div>
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <Image src={`${baseAssetUrl}interview.webp`} alt="interview" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="header-title pt-4">
                    Data Analysis
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Extracting our raw interview notes, we created a descriptive <span className='bolder-text'>Session Essay on each interview</span> that describes the interview setting, process, users responses, reactions and demonstrations. We then created <span className='bolder-text'>Activity Notes from each session essay</span>, which we categorized under the following <span className='bolder-text'>Affinity Diagram</span>.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[90%] sm:w-full md:w-[90%]">
                    <a href="https://miro.com/app/board/uXjVK7eeTlM=/?share_link_id=93610415847" target="_blank" rel="noopener noreferrer">
                        <Image src={`${baseAssetUrl}affinity.webp`} alt="affinity" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                  </div>
                </div>
                <div className="header-title pt-4">
                    Insights Gathering
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Using the Affinity Clustering, we derived <span className='bolder-text'>4 significant insights</span> from our interviews:
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[60%] sm:w-full md:w-[60%]">
                    <Image src={`${baseAssetUrl}insights.svg`} alt="insights" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="header-title pt-4">
                    Persona
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    By keeping in mind the insights, we refined the problem statement and then created a persona to identify with.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <Image src={`${baseAssetUrl}personaCard.webp`} alt="persona" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="header-title pt-4">
                    Requirements Formulated
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    The following are the requirements we realized our solution has to meet, based off of our research. <span className='bolder-text'>Our solution must:</span>
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[60%] sm:w-full md:w-[60%]">
                    <Image src={`${baseAssetUrl}requirements.svg`} alt="requirements" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="header-title pt-4">
                    Brainstorming & Ideation
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Exploring the existing solution space, we <span className='bolder-text'>evaluated 20 solutions in this problem space</span> and weighed the features we liked and the limitations they pose. This allowed us to then brainstorm and <span className='bolder-text'>sketch around 20 design ideas each</span>, thinking out-of-the-box, yet feasible ideas. These idea sketches were gathered and <span className='bolder-text'>categorized on an “Idea Board”</span>. Using Miro as our collaborative platform, we highlighted ideas that were perceived as innovative, concurrently identifying and linking ideas that had potential synergies, streamlining the process of integrating them into a cohesive solution later on.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[70%]">
                    <a href="https://miro.com/app/board/uXjVNbfPgj4=/?share_link_id=590673931007" target="_blank" rel="noopener noreferrer">
                        <Image src={`${baseAssetUrl}ideaBoard.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                    <div className='description-text w-full justify-center text-center py-8'>
                        We then identified <span className='bolder-text' style={{ color: '#B93278' }}>4 primary pillars</span> to implement in our solution:
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <div className="w-full lg:w-[60%] sm:w-full md:w-[60%]">
                        <Image src={`${baseAssetUrl}pillars.webp`} alt="pillars" width={100} height={100} layout="responsive" className="rounded-lg" />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="header-title pt-4">
                    Paper Prototype (Lo-Fi)
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Starting off the low-fidelity design of our solution, we created a paper prototype of the idea we envisioned. This <span className='bolder-text'>Paper Prototype was used to conduct Usability tests</span> to gather feedback and understand how the design and utility of the solution can be improved.
                </div>
                <div className='flex justify-center w-full py-4' >
                    <video className='w-[70%]' height="auto" controls>
                        <source src={`${baseAssetUrl}paperPrototype.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="header-title pt-4">
                    Mid & Hi-Fidelity Prototype Designs
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Using the insights from the usability testing feedback with the paper prototype, it informed the creation of our <span className='bolder-text'>Mid-fidelity Figma prototype</span>. Post a design critique session, we were able to further improve the design, culminating in our <span className='bolder-text'>Hi-Fidelity Prototype</span>. We performed <span className='bolder-text'>heuristic evaluations</span> on the prototype based on Nielsen’s 10 heuristics for user interface design, which led to a few more iterations to match the goals and needs of our target users.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <Image src={`${baseAssetUrl}hifi.webp`} alt="hifi" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className='description-text flex flex-col w-full justify-center items-center text-center'>
                    <div className="w-[80%] py-8">
                        We showcased our Figma Prototype during a Poster Presentation event and managed to clinch the prestigious <span className='bolder-text'>'Most Creative' project award</span> for the most innovative and imaginative prototype.
                    </div>
                    <div className="lg:w-[40%] sm:w-full md:w-[40%]">
                        <Image src={`${baseAssetUrl}presentation.webp`} alt="presentation" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                </div>
                <div className="header-title pt-4">
                    Figma Link
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className="flex w-full justify-center items-center pt-4 pb-12">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <a href="https://www.figma.com/design/XguQMbQ4PK1XiE5dcndTkU/HCI-Figma?node-id=836-9283&t=D22wRVIrBqStiWuz-1" target="_blank" rel="noopener noreferrer">
                     <Image src={`${baseAssetUrl}figma.webp`} alt="figma" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                  </div>
                </div>
            </div>
           <ScrollTop /> 
        </div>
    );
}