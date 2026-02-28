import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { crafty_girls, poppins, reenie_beanie } from '../ui/fonts';
import '../globals.css';
import { getCloudinaryDirectImageUrl } from '../utils/cloudinary';

const HowInfo = () => {
  const howSectionRef = useRef<HTMLElement | null>(null);
  const howSectionTwoRef = useRef<HTMLElement | null>(null);
  const howSectionThreeRef = useRef<HTMLElement | null>(null);
  const howSectionFourRef = useRef<HTMLElement | null>(null);
  const howSectionFiveRef = useRef<HTMLElement | null>(null);
  const howSectionSixRef = useRef<HTMLElement | null>(null);

  const [showHowSection, setShowHowSection] = useState(false);
  const [showHowSectionTwo, setShowHowSectionTwo] = useState(false);
  const [showHowSectionThree, setShowHowSectionThree] = useState(false);
  const [showHowSectionFour, setShowHowSectionFour] = useState(false);
  const [showHowSectionFive, setShowHowSectionFive] = useState(false);
  const [showHowSectionSix, setShowHowSectionSix] = useState(false);

  useEffect(() => {
    document.body.classList.add('about-scroll-snap');
    return () => {
      document.body.classList.remove('about-scroll-snap');
    };
  }, []);

  useEffect(() => {
    const sectionEl = howSectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSection(entry.isIntersecting),
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = howSectionTwoRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSectionTwo(entry.isIntersecting),
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = howSectionThreeRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSectionThree(entry.isIntersecting),
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = howSectionFourRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSectionFour(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = howSectionFiveRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSectionFive(entry.isIntersecting),
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionEl = howSectionSixRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowHowSectionSix(entry.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -25% 0px' }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="how-stack">
      <section
        ref={howSectionRef}
        className={`how-section ${showHowSection ? 'how-section--visible' : ''}`}
      >
        <div className={`${poppins.className} how-copy`}>
          I focus on designing systems to work,<br />
          <span className={`${poppins.className} how-copy__emphasis`}>
            not simply screens that impress.
          </span>
        </div>
        <div className="how-illustration">
          <Image
            src="/assets/common/how_1.gif"
            alt="Thinking character"
            width={420}
            height={360}
            className="how-gif"
            priority
          />
        </div>
      </section>

      <section
        ref={howSectionTwoRef}
        className={`how-section ${showHowSectionTwo ? 'how-section--visible' : ''}`}
      >
        <div className={`${poppins.className} how-copy`}>
          I <span className="how-copy__bold">zoom out</span> to frame the system,<br />
          <span className={`${poppins.className} how-copy__emphasis`}>
            then <span className="how-copy__bold">zoom in</span> to build the pixels.
          </span>
        </div>
        <div className="how-illustration" style={{width: '300px!important'}}>
          <Image
            src={getCloudinaryDirectImageUrl("common/how_2.gif")}
            alt="Thinking character"
            width={420}
            height={360}
            className="how-gif"
            priority
          />
        </div>
      </section>

      <section
        ref={howSectionThreeRef}
        className={`how-section ${showHowSectionThree ? 'how-section--visible' : ''}`}
      >
        <div className={`${poppins.className} how-copy`}>
          Defining the <span className="how-copy__bold">story</span> behind the problem...
        </div>
        <div className="how-illustration" style={{ width: '100vw!important', marginTop: '-15%!important' }}>
          <Image
            src={getCloudinaryDirectImageUrl("common/how_3.gif")}
            alt="Thinking character"
            width={420}
            height={360}
            style={{ width: '100vw!important' }}
            className="how-gif"
            priority
          />
        </div>
      </section>

      <section
        ref={howSectionFourRef}
        className={`how-section how-pop-section how-pop-section--long ${
          showHowSectionFour ? 'how-section--visible how-pop-section--visible' : ''
        }`}
      >
        <div className={`${poppins.className} how-copy`}>
          <span className="how-copy__bold">Ideating</span> broadly, then narrowing fast<br />
          <span className={`${poppins.className} how-copy__emphasis`}>
            toward the simplest working answer.
          </span>
        </div>
        <div className="how-pop-grid">
          <Image
            src={getCloudinaryDirectImageUrl("common/how_4a.svg")}
            alt="How sequence step one"
            width={220}
            height={220}
            className="how-pop-item"
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/how_4b.svg")}
            alt="How sequence step two"
            width={220}
            height={220}
            className="how-pop-item"
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/how_4c.svg")}
            alt="How sequence step three"
            width={220}
            height={220}
            className="how-pop-item"
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/how_4d.svg")}
            alt="How sequence step four"
            width={220}
            height={220}
            className="how-pop-item"
          />
        </div>
      </section>
      <div className="how-pop-spacer" aria-hidden="true" />

      <section
        ref={howSectionFiveRef}
        className={`how-section ${showHowSectionFive ? 'how-section--visible' : ''}`}
      >
        <div className={`${poppins.className} how-copy`}>
          Defining the <span className="how-copy__bold">user flows, error states, and structure</span><br />
          <span className={`${poppins.className} how-copy__emphasis`}>
            that make the experience coherent.
          </span>
        </div>
        <div className="how-illustration">
          <Image
            src="/assets/common/how_5.gif"
            alt="Thinking character"
            width={420}
            height={360}
            className="how-gif"
            priority
          />
        </div>
      </section>

      <section
        ref={howSectionSixRef}
        className={`how-section ${showHowSectionSix ? 'how-section--visible' : ''}`}
      >
        <div className="how-corners">
          <div className={`${poppins.className} how-copy--center flex flex-col items-center justify-center mt-8`}
          >
            And then bringing it all together.
            <Image
            src={getCloudinaryDirectImageUrl("common/how_6.gif")}
            alt="How sequence finale"
            width={520}
            height={420}
            className="how-center"
            priority
          />
          </div>
          
          <Image
            src={getCloudinaryDirectImageUrl("common/typography.svg")}
            alt="Typography"
            width={360}
            height={260}
            className="how-corner how-corner--tl how-corner--near"
            priority
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/components.svg")}
            alt="Components"
            width={360}
            height={260}
            className="how-corner how-corner--tr how-corner--near"
            priority
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/comp-states.svg")}
            alt="Component states"
            width={360}
            height={260}
            className="how-corner how-corner--bl how-corner--near"
            priority
          />
          <Image
            src={getCloudinaryDirectImageUrl("common/color-palette.svg")}
            alt="Color palette"
            width={360}
            height={260}
            className="how-corner how-corner--br how-corner--near"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default HowInfo;
