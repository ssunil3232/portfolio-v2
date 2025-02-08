import Image from "next/image";
import "./project.css";
import Navbar from "@/app/components/navbar";
import { ScrollTop } from 'primereact/scrolltop';

export default function InsightEdge () {
   const baseAssetUrl = "/assets/insightEdge/";
   const features = [
      {
         "asset": "first.gif",
         "header": "#Feature 1",
         "description": "Optimal Placement and Color Recommendation"
      },
      {
         "asset": "second.gif",
         "header": "#Feature 2",
         "description": "AI-Powered Caption & Hashtag Generation"
      },
      {
         "asset": "third.gif",
         "header": "#Feature 3",
         "description": "Instagram-Ready Color Adjustment"
      },
      {
         "asset": "fourth.gif",
         "header": "#Feature 4",
         "description": "Visual Transition Order Recommendation"
      },
      {
         "asset": "fifth.gif",
         "header": "#Feature 5",
         "description": "Non-Engagement & Audience Segmentation Analysis"
      },
      {
         "asset": "sixth.gif",
         "header": "#Feature 6",
         "description": "Collaborative Editing & Review"
      }
   ]
    return (
        <div className="flex w-screen min-h-screen flex-col items-center">
         <Navbar/>
            <div className="flex w-[100%] sm:w-[100%] md:w-[60%] lg:w-[50%] flex-row justify-center px-4">
                <div className='flex w-[80%] justify-center items-center'>
                    <Image src={`${baseAssetUrl}header4.svg`} alt="graphic1" height={450} width={450} layout="responsive" className="flex w-full h-auto"/> 
                </div>
                {/* <div className='flex w-[40%] justify-center items-center'>
                  <Image src={`${baseAssetUrl}graphic1.webp`} alt="graphic1" height={450} width={450}layout="responsive" className="flex w-full h-auto"/> 
                </div> */}
            </div>
            {/* <div className='flex sm:flex-col lg:flex-row md:flex-col flex-col w-[70%] justify-center items-center px-4 pt-8'>
               <Image src={`${baseAssetUrl}header.png`} alt="graphic1" height={450} width={450} layout="responsive" className="flex w-full h-auto"/> 
               <Image src={`${baseAssetUrl}graphic1.webp`} alt="graphic1" height={450} width={450}layout="responsive" className="flex w-full h-auto"/> 
            </div> */}
            <div>
               <Image src={`${baseAssetUrl}suiteDisplay.webp`} alt="suite" width={450} height={450} layout="responsive" className="flex w-full h-auto"/>
            </div>
            <div className='header-text w-[80%] md:w-[60%] lg:w-[60%] sm:w-[80%]'>
                  Enhancements to alleviate the pains experienced by content creators on Instagram, to boost Meta's edge in the content creation landscape, in collaboration with Meta's Product Manager Richa Sood.
            </div>
            {/* <div className='header-underline-overview mt-4 mb-4'></div> */}
            <div className="flex w-full justify-center perspective-container">
               <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-2 w-[90%]">
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Scope</div>
                     <div>Meta-Cornell <br />
                     DTI project</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Role</div>
                     <div>Product Designer</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Timeline</div>
                     <div>Jan - May 2024</div>
                  </div>
                  
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Team</div>
                     <div>4 Product Managers</div>
                     <div>1 Product Designer</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Process</div>
                     <div>UX Research</div>
                     <div>UX Design</div>
                     <div>Product Management</div>
                  </div>
                  <div className="flex flex-col perspective-description">
                     <div className="perspective-header">Recognition</div>
                     <div><span className='bolder-text'>"Best presented"</span> product idea award <span className='bolder-text'>among 10 teams</span></div>
                  </div>
               </div>
            </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8">
               <div className="header-title">
                  Problem Statement
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                  One of the primary reasons users prefer other content creation platforms such as TikTok is due to their <span className='bolder-text'>reduced barrier to discoverability</span>. Research shows that Instagram heavily monetizes advertising, requiring content shared to have a large number of views. Hence, to increase revenue through advertising, we need to improve content discoverability.
               </div>
               <div className="header-title pt-4">
                  User Research
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='picture-header mt-2 mb-4'>Competitor Analysis</div>
               <div className='description-text w-full'>
                  Tiktok being Instagram's main competitor in the field, we conducted an analysis of their content creation platform, to gather an understanding of the problem space, and evaluating features that potentially attract content creators to use their platform over Instagram's. The following are the <span className="bolder-text">key features we identified</span>:
               </div>
               <div className="flex w-full justify-center items-center">
                  <div className="flex flex-row w-[80%] justify-center items-center mt-2 mb-4 flex-wrap">
                     <div className="">
                        <Image src={`${baseAssetUrl}comp1.svg`} alt="responses" width={100} height={100} layout="responsive" />
                     </div>
                     <div className="">
                        <Image src={`${baseAssetUrl}comp2.svg`} alt="responses" width={100} height={100} layout="responsive" />
                     </div>
                     <div className="">
                        <Image src={`${baseAssetUrl}comp3.svg`} alt="responses" width={100} height={100} layout="responsive" />
                     </div>
                     <div className="">
                        <Image src={`${baseAssetUrl}comp4.svg`} alt="responses" width={100} height={100} layout="responsive" />
                     </div>
                     <div className="">
                        <Image src={`${baseAssetUrl}comp5.svg`} alt="responses" width={100} height={100} layout="responsive" />
                     </div>
                  </div>
               </div>
               <div className='picture-header mt-2 mb-4'>User Interviews</div>
               <div className='description-text w-full'>
                  We interviewed around <span className="bolder-text">10 content creators, with around 50-100K followers</span>, who engage in both Instagram and TikTok platforms for content creation to understand their preference of platform and the hurdles they face when creating content on Instagram. The following are <span className="bolder-text">our findings</span> categorized by 3 user types:
               </div>
               <div className="flex w-full justify-center items-center">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                     <Image src={`${baseAssetUrl}dtiResponses.webp`} alt="responses" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
               <div className="header-title">
                  User Journey Mapping
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                  Consolidating the user interviews, we mapped out the user journey of content creators on Instagram, to understand the pain points and areas of improvement. The following is the <span className='bolder-text'>user journey map</span> we created:
               </div>
               <div className="flex w-full justify-center items-center mt-4 relative">
                  <div className="w-full lg:w-[80%] sm:w-full md:w-[80%]">
                     <a className='mx-5' href={`${baseAssetUrl}UserJourneyMapping.pdf`} target="_blank" title="Journey Mapping">
                        <Image src={`${baseAssetUrl}userJouney.png`} alt="journeyMap" width={100} height={100} layout="responsive" className="rounded-lg" />
                     </a>
                  </div>
                  <Image src={`${baseAssetUrl}point_arrow.gif`} alt="arrow_pt" width={80} height={80} className="rounded-lg absolute bottom-[-10%] right-[0%] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px]" />
               </div>
               <div className="header-title pt-4">
                  Findings
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                  Our research suggested that content creators tend to gravitate away from Instagram platform for a variety of reasons. The following are our <span className='bolder-text'>main takeaways</span>:
               </div>
               <div className="flex w-full justify-center items-center">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                     <Image src={`${baseAssetUrl}findings.webp`} alt="findings" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
               <div className='description-text w-full'>
                  These findings illuminated the significant obstacles young/new content creators face on Instagram. Establishing a social media presence and credibility can be challenging, particularly in the initial stages, and Instagram being a more established social media platform, is also saturated with established influencers, making it less enticing for building a presence.
               </div>
               <div className="header-title pt-4">
                  User Personas
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                  Based on the User Research findings, we crafted two user personas of different tiers of influencers - Aspiring content creator (0 - 10K followers), Emerging content creators (10K - 100K followers) & Established content creators (100K+ followers). We decided to <span className='bolder-text'>focus on Aspiring & Emerging content creators</span> as they hold a significant market share of influencers on Instagram. The following are the personas drafted:
               </div>
               <div className="flex w-full justify-center items-center">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                     <div className="picture-header pt-4">
                        Aspiring Content Creator
                     </div>
                     <Image src={`${baseAssetUrl}aspiring.webp`} alt="aspiring" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
               <div className="flex w-full justify-center items-center">
                  <div className="w-full lg:w-[70%] sm:w-full md:w-[80%]">
                     <div className="picture-header pt-4">
                        Emerging Content Creator
                     </div>
                     <Image src={`${baseAssetUrl}emerging.webp`} alt="emerging" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
               <div className="header-title pt-4">
                  The Solution
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className='description-text w-full'>
                  Our idea focuses on enhancing discoverability by leveraging AI to provide analytics and editing suggestions, enabling content creators to produce faster, higher-quality content, ultimately leading to increased views and discoverability.
               </div>
               <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-[60%] lg:w-[30%] sm:w-[60%] md:w-[40%]">
                     <Image src={`${baseAssetUrl}logo.webp`} alt="logo" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
               <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-full lg:w-[50%] sm:w-full md:w-[60%]">
                     <Image src={`${baseAssetUrl}toolDetails.webp`} alt="toolDetails" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
               </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[80%] gap-3">
                  {features.map((item)=>{
                     return(
                        <div key={item.header} className='flex justify-start items-center flex-col' style={{ fontSize: '25px', marginTop: '20px', fontWeight:'500', color: 'var(--title-color)' }}>
                           {item.header}
                           <div className="flex w-full justify-center items-center pt-2">
                              <span className='flex text-center justify-center w-full lg:w-[70%] sm:w-full md:w-[60%]' style={{ fontSize: '0.9rem', fontWeight:'400', color: 'var(--focus-secondary)',height: '3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                 {item.description}
                              </span>
                           </div>
                           <div className="flex w-full justify-center items-center pt-4">
                              <div className="w-[50%]">
                                 <Image src={`${baseAssetUrl}${item.asset}`} alt="gif" width={100} height={100} layout="responsive" className="rounded-lg" unoptimized />
                              </div>
                           </div>
                        </div>
                     );
                  })}
            </div>
            <div className='description-text w-[80%] md:w-[60%] lg:w-[80%] sm:w-[80%] py-8 text-center'>
               Our project <span className='bolder-text'>won the ‘Best Presentation’ award</span> for well-thought through and well designed wireframes that conveyed our feature ideas. As well, our solution was praised for its ability to be seamlessly integrated with existing Instagram tools, and utilizing AI enhancements, which could give Instagram a competitive edge!
            </div>
            <div className="flex w-full justify-center items-center pt-4">
                  <div className="w-[80%] lg:w-[50%] sm:w-[80%] md:w-[60%]">
                     <Image src={`${baseAssetUrl}teamPicture.png`} alt="teamPicture"  width={100} height={100} layout="responsive" className="rounded-lg" />
                  </div>
            </div>
            <div className="flex w-[90%] md:w-[80%] lg:w-[70%] sm:w-[90%] flex-col pt-8 pb-12">
               <div className="header-title">
                  Wireframe
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className="flex w-full justify-center items-center relative">
                  <div className="w-full lg:w-[100%] sm:w-full md:w-[90%]">
                     <a href="https://www.figma.com/design/BI2XetztSbvG5K00XR1eOT/User-Stories?node-id=128%3A1214&t=HXJJebhBfwa50Anq-1" target="_blank" rel="noopener noreferrer" title="Resume">
                        <Image src={`${baseAssetUrl}wireframe.webp`} alt="responses" width={100} height={100} layout="responsive" className="rounded-lg" />
                     </a>
                  </div>
                  <Image src={`${baseAssetUrl}point_arrow.gif`} alt="arrow_pt" width={80} height={80} style={{transform: 'rotate(-90deg)'}} className="rounded-lg absolute top-[-25%] right-[0%] lg:w-[80px] md:w-[70px] sm:w-[50px] w-[50px]" />
               </div>
               <div className="header-title">
                  Files
               </div>
               <div className='header-underline mt-2 mb-4'></div>
               <div className="flex w-full flex-row">
                  <a className='mx-5' href={`${baseAssetUrl}PRD_Document.pdf`} target="_blank" title="PRD Document">
                     <Image src={`${baseAssetUrl}prdLogo.svg`} alt="Prd" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </a>
                  <a className='mx-5' href={`${baseAssetUrl}PitchDeck.pdf`} target="_blank" title="Pitch Deck">
                     <Image src={`${baseAssetUrl}deckLogo.svg`} alt="Pitch Deck" width={100} height={100} layout="responsive" className="rounded-lg" />
                  </a>
               </div>
            </div>
           <ScrollTop /> 
        </div>
    );
}