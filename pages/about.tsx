import SkillsBubbles from '@/app/components/bubble';
import HowInfo from '@/app/components/how';
import { poppins, reenie_beanie } from '@/app/ui/fonts';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { getCloudinaryDirectImageUrl } from '@/app/utils/cloudinary';

export default function About () {
  const getYearsExperience = () => {
    const startYear = 2021;
    const startMonth = 7; // July
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const months = (nowYear - startYear) * 12 + (nowMonth - startMonth);
    const years = months / 12;
    return Math.round(years * 10) / 10;
  };
  const yearsExperience = getYearsExperience();
  const timelineSectionRef = useRef<HTMLDivElement | null>(null);
  const timelineScrollRef = useRef<HTMLDivElement | null>(null);
  const timelineTitleRef = useRef<HTMLDivElement | null>(null);
  const [burstKey, setBurstKey] = useState(0);
  const [showTapArrow, setShowTapArrow] = useState(true);

  useEffect(() => {
    document.body.classList.add('about-scroll-snap');
    return () => {
      document.body.classList.remove('about-scroll-snap');
    };
  }, []);

  useEffect(() => {
    const sectionEl = timelineSectionRef.current;
    const scrollEl = timelineScrollRef.current;
    const titleEl = timelineTitleRef.current;
    if (!sectionEl || !scrollEl || !titleEl) return;

    let rafId = 0;

    const updateSectionHeight = () => {
      const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
      const sectionHeight = window.innerHeight + Math.max(0, maxScroll);
      sectionEl.style.height = `${sectionHeight}px`;
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const rect = sectionEl.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth;
        const isTitleVisible =
          rect.bottom > 0 && rect.top < window.innerHeight;
        if (isTitleVisible) {
          titleEl.classList.remove('timeline-title--hidden');
        } else {
          titleEl.classList.add('timeline-title--hidden');
        }
        if (maxScroll <= 0) return;
        if (rect.top > 0) {
          scrollEl.scrollLeft = 0;
          return;
        }
        const progress = Math.min(
          Math.max((window.scrollY - sectionTop) / maxScroll, 0),
          1
        );
        scrollEl.scrollLeft = maxScroll * progress;
        if (progress < 1 && rect.top <= 0 && rect.bottom > 0) {
          titleEl.classList.add('timeline-title--sticky');
        } else {
          titleEl.classList.remove('timeline-title--sticky');
        }
      });
    };

    updateSectionHeight();
    onScroll();
    window.addEventListener('resize', updateSectionHeight);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateSectionHeight);
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="about-page flex flex-col justify-start w-full min-h-screen">
      <div className="about-id-row flex flex-col lg:flex-row w-full items-end gap-6 lg:gap-[5%] md:gap-[5%] pt-4 pb-12">
        <div className="about-id-wrap w-[40%] flex justify-center">
          <Image 
          src={getCloudinaryDirectImageUrl("common/id_card.svg")} alt="ID card illustration" width={520} height={520} priority className="about-id-card top-[15%]" />
        </div>
        <div className="flex flex-col w-full lg:w-[60%] gap-6 pr-8 justify-end">
          <div className={`${poppins.className} font-light text-[2rem] leading-[0.95] text-[#111111]`}>
            a bit
            <span className={`${reenie_beanie.className} text-[#ff6b6b] ml-[1rem] text-[3rem]`}>about me</span>
          </div>
          <div className={`${poppins.className} text-sm pr-[4rem] leading-7 text-[#1f1f1f]`}>
            <p className={`mb-4 ${reenie_beanie.className} text-[1.5rem]`}>
              Hey, I’m Sonia — and thank you for scrolling!
            </p>
            <p className="mb-4 font-light">
              I’ve been building and shipping things for <strong style={{ color: 'var(--focus-color)' }}>over {yearsExperience} years</strong>, and I like owning the whole journey: from the first sketch in Figma to the final line of code that actually makes it to production.
            </p>
            <p className="mb-4 font-light">
              I’ve got a <strong style={{ color: 'var(--focus-color)' }}>Bachelor’s in Computer Engineering</strong> and a <strong style={{ color: 'var(--focus-color)' }}>Master’s in Information Science</strong> from Cornell. When I’m not working, I’m usually tinkering with a personal project or taking on freelance design/dev work.
            </p>
            <p className="mb-4 font-light">
              What I’m most into is that sweet spot where good UX meets solid engineering—when it looks simple, but it’s thoughtfully built.
            </p>
            <p className="mb-2 font-light">
              Right now, I’m looking for work where I can keep <strong style={{ color: 'var(--focus-color)' }}>living in that design-to-dev sweet spot</strong> and <strong style={{ color: 'var(--focus-color)' }}>ship things people genuinely enjoy using.</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-row arrow-2 content ml-[10%]">
        <Image 
        src={getCloudinaryDirectImageUrl("common/curly-arrow.gif")} alt="arrow" width={100} height={100} className="rounded-lg" />
      </div>
      <div className="flex flex-col w-full">
        <section className="timeline-section" ref={timelineSectionRef}>
          <div ref={timelineTitleRef} className={`${poppins.className} font-light text-[2rem] leading-[0.95] text-[#111111] content timeline-title`}>
            <div className="timeline-title-text">
              <span className={`${reenie_beanie.className} text-[#ff6b6b] ml-[1rem] text-[3rem]`}>my journey</span>&nbsp;
              across a timeline
            </div>
            <Image
              src="/assets/common/moving_girl.gif"
              alt="Moving girl walking"
              width={160}
              height={160}
              className="timeline-title-gif"
            />
          </div>
          <div className="timeline-scroll h-screen" ref={timelineScrollRef}>
            <img
              src={getCloudinaryDirectImageUrl("common/timeline.svg")}
              alt="Timeline of my journey" 
              className="timeline-svg h-[50%]" 
            />
          </div>
        </section>
      </div>
      <section className="skills_info flex w-full items-center justify-center py-12">
        <div className="skills-orbit-wrap">
          {showTapArrow && (
            <Image
              src={getCloudinaryDirectImageUrl("common/arrow_tap.svg")}
              alt="Tap arrow"
              width={140}
              height={140}
              className="skills-arrow-tap"
            />
          )}
          <Image
            src={getCloudinaryDirectImageUrl("common/cherry.gif")}
            alt="Cherry"
            width={500}
            height={500}
            className="skills-cherry"
            onClick={() => {
              setBurstKey((prev) => prev + 1);
              setShowTapArrow(false);
            }}
            style={{ cursor: 'pointer' }}
          />
          <SkillsBubbles burstKey={burstKey} />
        </div>
      </section>
      <HowInfo />
    </div>
    );
};
