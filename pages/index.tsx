import IntroPage from "@/app/components/intro";
import Navbar from "@/app/components/navbar";
import About from "./about";
import Image from "next/image";
import { bristol, poppins, reenie_beanie } from "@/app/ui/fonts";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
  const introFlightOriginRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const flightLayerRef = useRef<HTMLDivElement | null>(null);
  const [aboutRevealed, setAboutRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setAboutRevealed(true);
      return;
    }

    let rafId = 0;
    const updateFlight = () => {
      if (!introFlightOriginRef.current || !aboutSectionRef.current || !flightLayerRef.current) return;

      const originRect = introFlightOriginRef.current.getBoundingClientRect();
      const aboutRect = aboutSectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const startScroll = scrollY + originRect.top - viewportHeight * 0.2;
      const endScroll = scrollY + aboutRect.top - viewportHeight * 0.2;
      const total = Math.max(endScroll - startScroll, 1);
      const progress = Math.min(Math.max((scrollY - startScroll) / total, 0), 1);

      const startX = originRect.left + originRect.width / 2;
      const startY = originRect.top + originRect.height / 2;
      const endX = aboutRect.left + aboutRect.width / 2;
      const endY = aboutRect.top + 120;

      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      const flightEl = flightLayerRef.current;
      flightEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${1 - progress * 0.15})`;
      flightEl.classList.add("flight--ready");

      if (progress > 0.32 && progress < 1) {
        flightEl.classList.add("flight--active");
      } else {
        flightEl.classList.remove("flight--active");
      }

      if (progress >= 1) {
        flightEl.classList.add("flight--explode");
        setAboutRevealed((prev) => (prev ? prev : true));
      } else {
        flightEl.classList.remove("flight--explode");
        setAboutRevealed((prev) => (prev ? false : prev));
      }
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateFlight();
        rafId = 0;
      });
    };

    updateFlight();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFlight);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFlight);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let touchStartX = 0;
    let touchStartY = 0;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const deltaX = event.touches[0].clientX - touchStartX;
      const deltaY = event.touches[0].clientY - touchStartY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <>
    <Navbar />
    <div className="flex flex-col min-h-[100%]">
        
      <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen">
        <IntroPage flightOriginRef={introFlightOriginRef} hideSonia />
      </div>
    </div>
    <div className="flight-layer" ref={flightLayerRef} aria-hidden="true">
      <Image
        src="/assets/common/sonia.svg"
        alt=""
        width={300}
        height={400}
        className="flight-image"
        priority
      />
      <Image
        src="/assets/common/tea_time.gif"
        alt=""
        width={300}
        height={300}
        className="flight-tea"
        priority
      />
      <span className="flight-burst" />
    </div>
    <div className="flex content-bg min-h-screen">
      <div className=" flex flex-col justify-between flex-grow w-full">
        <div className="flex content-bg min-h-screen">
          <div className=" flex flex-col justify-between flex-grow w-full">
            <main className="relative justify-center items-start lg:justify-items-start md:justify-items-center sm:justify-items-center flex w-full flex-grow">
              <section
                id="about-section"
                ref={aboutSectionRef}
                className={`flex h-full justify-center w-full about-section ${aboutRevealed ? "about-section--revealed" : ""}`}
              >
                <About />
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer-shell content row-start-3">
      <div className="footer-card">
        <div className="footer-text">
          <p className={`${poppins.className} font-light`}>
            If this sparked a <span className={bristol.className}>"hmm"</span>— let’s <span className="footer-highlight">connect</span>!
          </p>
        </div>

        <div className="footer-icons">
          <a href="./assets/Resume_2025.pdf" target="_blank" rel="noopener noreferrer" title="Resume" className="intro-icon-wrap">
            <Image src="/assets/common/cv.svg" alt="Resume" width={64} height={64} className="intro-icon" />
            <span className="intro-tooltip">Resume</span>
          </a>
          <a href="https://github.com/ssunil3232" target="_blank" rel="noopener noreferrer" title="GitHub" className="intro-icon-wrap">
            <Image src="/assets/common/github.svg" alt="Github" width={64} height={64} className="intro-icon" />
            <span className="intro-tooltip">GitHub</span>
          </a>
          <a href="https://sonia-sunil-d3.vercel.app/" target="_blank" rel="noopener noreferrer" title="D3 Data Visualization" className="intro-icon-wrap">
            <Image src="/assets/common/viz.svg" alt="Data Visualization" width={64} height={64} className="intro-icon" />
            <span className="intro-tooltip">Data Viz</span>
          </a>
          <a href="mailto:soniasunil47@gmail.com?cc=ss3587@cornell.edu" title="Email" target="_blank" rel="noopener noreferrer" className="intro-icon-wrap">
            <Image src="/assets/common/email.svg" alt="E-Mail" width={64} height={64} className="intro-icon" />
            <span className="intro-tooltip">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/sonia-sunil-ss32" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="intro-icon-wrap">
            <Image src="/assets/common/linkedin.svg" alt="LinkedIn" width={64} height={64} className="intro-icon" />
            <span className="intro-tooltip">LinkedIn</span>
          </a>
        </div>
        <p className={`${reenie_beanie.className} footer-signoff`}>© 2024 Sonia Sunil · Developed with React ✨</p>

        <div className="footer-portrait" aria-hidden="true">
          <Image src="/assets/common/me.svg" alt="Sonia" width={480} height={520} priority />
        </div>
      </div>
    </footer>
    </>
  );
}
