import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';
import { Image as PrimeImage } from 'primereact/image';

export default function PrisonerExpress () {
   const baseAssetUrl = "/assets/prisonerExpress/";
   const keyFindings = [
    {
        text: 'Illuminated the need to create ',
        boldText: 'an app experience that mirrors the personal touch and connection of physical letters',
        suffix: ' for incarcerated individuals.',
      },
      {
        text: 'Importance of ',
        boldText: 'seamless operation across different tablet devices',
        suffix: ' within prisons, ',
        boldText2: 'without the need for internet',
        suffix2: ' access.',
      },
      {
        text: "Emphasized the app's ease of use to ",
        boldText: 'cater to the technological skills spectrum of the inmate population',
        suffix: '.',
      },
      {
        text: 'As user-submitted content and responses are received by Prisoner Express via physical mail, the app’s ',
        boldText: 'administrative side should be able to keep track of these received mails',
        suffix: '.',
      },
      {
        text: 'Stressed the ',
        boldText: 'significance of human connection and self-expression',
        suffix: ', and the ',
        boldText2: 'relevance and variety of options',
        suffix2: ' of engaging and enriching content.',
      },
   ]
    return (
        <div className="flex w-screen min-h-screen flex-col items-center  bg-no-repeat bg-cover">
         <Navbar/>
            {/* <div className='flex w-full lg:w-[50%] md:w-[50%] justify-center items-center px-4'>
                <Image src={`${baseAssetUrl}headliner2.png`} alt="logo" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
            </div> */}
            <div className='flex flex-col w-full lg:w-[50%] md:w-[50%]  justify-center items-center'>
                <Image src={`${baseAssetUrl}headliner6.png`} alt="logo" height={50} width={290}layout="responsive" className="flex w-full h-auto"/>
                <Image src={`${baseAssetUrl}preview.png`} alt="mockup" height={50} width={290} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                Prisoner Express creates an opportunity for incarcerated individuals to get information, education and a public forum for creative self-expression. Through newsletters and programs they hope to step through the isolation and alienation of prison life, bringing hope and fostering a sense of community among prisoners.
            </div>
            <div className="flex w-full justify-center perspective-container">
               <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-2 w-[90%]">
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Scope</span>
                     </div>
                     <div>Prisoner Express<br />
                     collaboration</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Role</span>
                     </div>
                     <div>UX Designer</div>
                     <div>Frontend Developer</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Timeline</span>
                     </div>
                     <div>Jan - May 2024</div>
                  </div>
                  
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Team</span>
                     </div>
                     <div>2 UX Designers</div>
                     <div>2 Frontend Developers</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Process</span>
                     </div>
                     <div>UX Research</div>
                     <div>UX Design</div>
                     <div>Frontend Dev</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="relative w-fit">
                        <span className="perspective-header">Recognition</span>
                     </div>
                     <div><span className='bolder-text'>"Best prototype" </span>
                     and invited to work with Prisoner Express
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8">
                <div className="header-title">
                    Problem Statement
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Increased scrutiny, regulations and expense surrounding the delivery of physical mails to prisoners have mandated the need to move the contents of the Prisoner Express newsletter digital. Thus, the primary goal of this project was to create a <span className='bolder-text'>seamless app experience that emulates the feeling of physical letters or writings</span> for incarcerated individuals. Given that almost all prisoners have a tablet of their own, this project envisions an application that can be installed onto tablets to bring a similar experience as that of a physical newsletter.
               </div>
               <div className="header-title pt-4">
                    User Research
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    To understand the goals and requirements of the application, we <span className='bolder-text'>first interviewed the client</span> to understand their goals and requirements and assessed the current physical newsletter’s contents. Followed by which, we conducted a <span className='bolder-text'>modified user interview (proxy)</span> of a formerly incarcerated individual, to gain more understanding of what our primary users (prisoners) seek from the newsletter application. Finally, using <span className='bolder-text'>survey data collected</span> by Lyss, the developer of Prisoner Express’ App Design program, we gathered further insights on primary user pains. Our user research uncovered several critical insights and established a foundation of requirements for the app's development, as well as the goals of the app’s audience.
                </div>
                
                <div className='w-full flex flex-col items-center pt-4 pl-8'>
                    <div className="w-full picture-header pl-8 justify-start">
                        Key Findings:
                    </div>
                    <div className='w-[90%] flex flex-col items-center'>
                    <ol className="custom-list">
                        {keyFindings.map((item, index) => (
                            <li key={index}>
                            <div className="description-text">
                                {item.text}
                                <span className='bolder-text'>{item.boldText}</span>
                                {item.suffix}
                                {item.boldText2 && <span className='bolder-text'>{item.boldText2}</span>}
                                {item.suffix2 && item.suffix2}
                            </div>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="header-title pt-4">
                    Affinity Diagram
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Consolidating the findings from the User Research, we created an  <a href="https://www.figma.com/board/mOhCaLDCwLS0LPKF4HtwBv/Affinity-Diagram?node-id=0-1&t=fm3Se6HrOn485c1j-1" target="_blank" title="Affinity">
                            <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Affinity diagram</span>
                        </a>, brainstorming and identifying themes. We extracted information from both the user interview and the survey data to create an Affinity Diagram. We went about to identify, consolidate and extract relevant information, which then narrowed to themes which potentially <span className='bolder-text'>captures the essence of incarcerated individuals’ needs and expectations</span>.
                </div>
                <div className="flex w-full justify-center items-center pt-4 relative">
                  <div className="w-full lg:w-[90%] sm:w-full md:w-[80%]">
                  <PrimeImage src={`${baseAssetUrl}affinity.webp`} alt="affinity" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                    {/* <a href="https://www.figma.com/board/mOhCaLDCwLS0LPKF4HtwBv/Prisoner-Express-Affinity-Diagram?node-id=0-1&t=TeS1PB1sBUZ3F0l6-1" target="_blank" rel="noopener noreferrer">
                        <Image src={`${baseAssetUrl}affinity.webp`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a> */}
                  </div>
                  <Image src={`${baseAssetUrl}point_arrow.gif`} alt="arrow_pt" width={80} height={80} className="rounded-lg absolute bottom-[-18%] right-[5%] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px]" />
                </div>
                <div className="header-title pt-4">
                    User Personas & Task Scenarios
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Using our user research findings, we thoroughly understood the different users and their goals with our app - our <span className='bolder-text'>primary audience (prisoners)</span> and the <span className='bolder-text'>administrative audience (Prisoner Express admins)</span>, and created suitable 
                    &nbsp;<a href="https://www.figma.com/design/wqAYjXlbAzMAaRlr1RzYNn/Personas?node-id=0-1&t=keyRG9jr7JTGT4cL-1" target="_blank" title="Personas and Task Scenarios">
                            <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Personas and Task Scenarios</span>
                        </a> for future testing to understand if our app is intuitive and performs the goals of our users.
                </div>
                <div className="w-full picture-header justify-start pt-4" style={{fontWeight: '600'}}>
                    Primary User - Prisoners
                </div>
                <div className='description-text w-full'>
                    Our primary users are incarcerated individuals who have limited connections and knowledge of the world outside the confines of prison walls. As such, they desire a human connection and validation, which they get from reading other prisoners’ experiences, knowledge of the outside world, and when they get to share their feelings and experiences. However, they have limited resources to fuel this desire due to limited internet access and receiving up-to-date content.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <PrimeImage src={`${baseAssetUrl}prisonerPersona.webp`} alt="prisonerPersona" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                     {/* <Image src={`${baseAssetUrl}prisonerPersona.webp`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" /> */}
                     <div className="w-full picture-header justify-start py-4">
                        Goals & Task Scenarios
                     </div>
                     <Image src={`${baseAssetUrl}prisonerTasks.svg`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="w-full picture-header justify-start pt-8" style={{fontWeight: '600'}}>
                    Administrative User - Prisoner Express Admins
                </div>
                <div className='description-text w-full'>
                    Our administrative users are the admins of Prisoner Express who compile the content and resources to publish in the Newsletter to distribute to prisoners, that is updated quarterly. They publish work sent by prisoners and other educational program content that prisoners might be interested in, so as to give prisoners the opportunity to improve their mental well-being and learning. However, there are lots of mails that come through, and keeping track and ensuring each prisoner gets recognized is a hassle. As well, due to differing technical literacy of prisoners, they would want to provide content in an inclusive manner.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                  <PrimeImage src={`${baseAssetUrl}adminPersona.webp`} alt="adminPersona" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                     {/* <Image src={`${baseAssetUrl}adminPersona.webp`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" /> */}
                     <div className="w-full picture-header justify-start py-4">
                        Goals & Task Scenarios
                     </div>
                     <Image src={`${baseAssetUrl}adminTasks.svg`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="header-title pt-4">
                    Brainstorming & Ideation
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    We then proceeded to research existing reading app interfaces, pasting them on an <span className='bolder-text'>“Idea Board”</span> and highlighting features we felt gelled and wanted our app to consider incorporating. We reviewed apps like <span className='bolder-text'>FBReader, Kindle, AppleBooks, Barnes & Noble, and RecipeKeeper</span> to brainstorm ideas for our Primary users. For the Administrative users, we referenced apps like <span className='bolder-text'>Cornell’s Canvas and Quizlet</span> app.
                </div>
                <div className="flex w-full justify-center items-center pt-2">
                    <Image src={`${baseAssetUrl}pointers_3.png`}  alt="arrow"  width={100} height={100}/>
                </div>
                <div className="flex w-full justify-center items-center pt-6">
                  <div className="w-full lg:w-[100%] sm:w-full md:w-[90%]">
                    <a href="https://www.figma.com/board/ZhovCH4zplCXi5do2lVPFF/Idea-Board-for-Prisoner-Express-App?node-id=0-1&t=qqnfSlB1AGa8EbD4-1" target="_blank" rel="noopener noreferrer">
                     <Image src={`${baseAssetUrl}ideaBoard.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a>
                  </div>
                </div>
                <div className='description-text w-full pt-8'>
                    Taking all of these findings, we sketched out an &nbsp;
                    <a href="https://www.figma.com/board/n7VrSyVB4OsdRR4nDcJxwU/Initial-Design-Flow-Sketch?node-id=0-1&t=RT0PtvPUT1fySezk-1" target="_blank" title="initial design flows">
                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>initial design flow</span>
                    </a>&nbsp;
                     of what we envisioned the app to look like and features it should include. We then wore the hats of users and <span className='bolder-text'>walked through each task scenario</span> we had created with the design, to assess if the features and functionalities incorporated allowed the users to perform the task scenarios smoothly. This brought about some design changes, which culminated in our 
                     &nbsp;<a href="https://www.figma.com/board/MhCNAdnU4ZEkhDyAnHmMkM/Final-Design-Flow?t=7SR7uek7NcF3KFFQ-1s" target="_blank" title="Final Design">
                        <span className="bolder-text" style={{ textDecoration: 'underline', color: 'var(--focus-color)' }}>Final Design</span>
                    </a>
                     <span className='bolder-text'></span>.
                </div>
                <div className="flex w-full justify-center items-center pt-6">
                  <div className="w-full lg:w-[60%] sm:w-full md:w-[60%]">
                    <Image src={`${baseAssetUrl}initialDesign.png`} alt="intialDesign" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
                <div className="flex w-full justify-center items-center pt-6 relative">
                  <div className="w-full lg:w-[100%] sm:w-full md:w-[90%]">
                    <PrimeImage src={`${baseAssetUrl}final.webp`} alt="final" indicatorIcon="pi pi-expand" preview className="rounded-lg expand-image" />
                    {/* <a href="https://www.figma.com/board/MhCNAdnU4ZEkhDyAnHmMkM/Design-Flows?node-id=0-1&t=aX20NYmzJCllQQfR-1" target="_blank" rel="noopener noreferrer">
                     <Image src={`${baseAssetUrl}final.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </a> */}
                  </div>
                  <Image src={`${baseAssetUrl}point_arrow.gif`} alt="arrow_pt" width={80} height={80} className="rounded-lg absolute bottom-[5%] right-[5%] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px]" />
                </div>
                <div className="header-title pt-4">
                    Prototyping in VueJS
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    As a team, we sketched out different views and components that we needed. We identified the components that are reusable over different views, and views that are repeated and could be dynamically rendered. We built the <span className='bolder-text'>prototype in Vue.js, utilizing Bootstrap and PrimeVue</span> libraries for components. We deployed the primary user app as a Progressive Web App (PWA).
                </div>
                <div className="w-full picture-header justify-start pt-4">
                    Implementation Plan Sketches
                </div>
                <div className='flex flex-row flex-wrap w-full justify-center gap-2'>
                    <div className="w-full lg:w-[48%] sm:w-full md:w-full ">
                        <Image src={`${baseAssetUrl}implement1.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-full lg:w-[48%] sm:w-full md:w-full ">
                        <Image src={`${baseAssetUrl}implement2.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
               </div>
               <div className="w-full picture-header justify-start pt-4">
                    Final Prototypes
                </div>
                <div className='flex justify-center w-full py-4 flex-col items-center' >
                    <div style={{color: 'var(--focus-color)'}}>Primary User App View</div>
                <video className='w-[80%]' height="auto" controls autoPlay muted loop>
                    <source src={`${baseAssetUrl}prisonerEVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='flex justify-center w-full py-4 flex-col items-center' >
                <div style={{color: 'var(--focus-color)'}}>Administrative User App View</div>
                <video className='w-[80%]' height="auto" controls autoPlay muted loop>
                    <source src={`${baseAssetUrl}adminEVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full px-4 ">
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}proto1.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}proto2.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}proto3.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                    <div className="w-full">
                    <Image src={`${baseAssetUrl}proto4.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg" />
                    </div>
                </div> */}
                <div className="header-title pt-4">
                    Usability Testing
                </div>
                <div className='header-underline mt-2 mb-4'></div> 
                <div className='description-text w-full'>
                    Our prototype was then <span className='bolder-text'>extensively tested</span>, keeping in mind the ideal <span className='bolder-text'>“happy-path”</span> for each task scenario.
                </div>
                <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                    <Image src={`${baseAssetUrl}testing.svg`} alt="featureAnalysis" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
                </div>
            </div>
            <div className='pt-12 description-text w-[80%] md:w-[80%] lg:w-[80%] sm:w-[80%] text-center'>
                Our Prisoner Express received high praise from the client and was awarded the <span className='bolder-text'>“Best Prototype”</span> title! It was an honor to work with Prisoner Express on this project and to be given the opportunity to create an app that could potentially bring hope and foster a sense of community among prisoners.
            </div>
            {/* <div className='flex justify-center w-full py-4' >
                <video className='w-[70%]' height="auto" controls autoPlay muted loop>
                    <source src={`${baseAssetUrl}prisonerEVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='flex justify-center w-full py-4' >
                <video className='w-[70%]' height="auto" controls autoPlay muted loop>
                    <source src={`${baseAssetUrl}adminEVideo.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            <div className="flex w-[60%] px-2">
                <Image src={`${baseAssetUrl}groupPic.png`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg object-cover" />
                {/* <div className="flex w-full justify-end">
                    <div className="w-full md:w-[60%] lg:w-[70%] justify-center">
                        <Image src={`${baseAssetUrl}pres1.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg object-cover" />
                    </div>
                </div>
                <div className="w-full md:w-[40%] lg:w-[52%]">
                <Image src={`${baseAssetUrl}pres2.webp`} alt="ideaBoard" width={100} height={100} layout="responsive" className="rounded-lg object-cover" />
                </div> */}
            </div>
            {/* <div className="flex flex-row flex-wrap header-title pt-4 pb-12">
                Artifacts: 
                <div className='flex flex-row w-[90%] justify-start'>
                     <a className='mx-5' href="https://github.com/ssunil3232/prisoner-express-project" target="_blank" title="Github Link">
                        <Image src={`${baseAssetUrl}github.webp`} alt="github" width={50} height={50} className="rounded-lg" />
                     </a>
                     <a className='mx-5' href="https://cornell-info4340-2024sp.github.io/vue-nicorn-project/" target="_blank" title="PWA App">
                        <Image src={`${baseAssetUrl}pwaApp.webp`} alt="pwaApp" width={50} height={50} className="rounded-lg" />
                     </a>
                     <a className='mx-5' href={`${baseAssetUrl}FinalReport.pdf`} target="_blank" title="Final Report">
                        <Image src={`${baseAssetUrl}report.webp`} alt="report" width={40} height={40} className="rounded-lg" />
                     </a>
                  </div>
            </div> */}
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col">
                            <div className="header-title">
                                Artifacts
                            </div>
                            <div className='header-underline mt-2 mb-4'></div>
                                <div className="flex w-full flex-row">
                                    <a className='mx-1' href="https://www.figma.com/team_invite/redeem/gHUUg5J8xkMKfBUQa4agdC" target="_blank" title="Figma">
                                        <Image src={`${baseAssetUrl}figmaLogo.svg`} alt="Figma" width={100} height={100} layout="responsive" className="rounded-lg" />
                                    </a>
                                    <a className='mx-1' href="https://github.com/ssunil3232/prisoner-express-24" target="_blank" title="Github">
                                        <Image src={`${baseAssetUrl}gitLogo.svg`} alt="Git" width={100} height={100} layout="responsive" className="rounded-lg" />
                                    </a>
                                    <a className='mx-1' href={`${baseAssetUrl}FinalReport.pdf`} target="_blank" title="Report">
                                        <Image src={`${baseAssetUrl}reportLogo.svg`} alt="Git" width={100} height={100} layout="responsive" className="rounded-lg" />
                                    </a>
                                    <a className='mx-1' href="https://ssunil3232.github.io/prisoner-express-24/" target="_blank" title="PWA App">
                                        <Image src={`${baseAssetUrl}pwaLogo.svg`} alt="Git" width={100} height={100} layout="responsive" className="rounded-lg" />
                                    </a>
                                </div>
                            </div>
           <ScrollTop /> 
        </div>
    );
}