import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../ui/fonts';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState('');

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setAtTop(y <= 4);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, y / total)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const displayHours = hours % 12 || 12;
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const paddedMinutes = minutes.toString().padStart(2, '0');
      setTime(`${displayHours}.${paddedMinutes}${ampm.toLowerCase()}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 30 * 1000);
    return () => clearInterval(timer);
  }, []);

  const expanded = hovered || atTop;

  return (
    <div className={`nav-body ${scrolled ? 'nav-body--scrolled' : ''} ${mounted ? 'nav-body--mounted' : ''}`}>
      <Image className="nav-icon" width={40} height={40} sizes="100vw" alt="" src="/assets/common/icon.svg" />
      <div
        className={`nav-player nav-player--collapsible ${expanded ? 'nav-player--expanded' : ''}`}
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <Image className="nav-button-icon" width={20} height={20} sizes="100vw" alt="" src="/assets/common/hover_arrow_icon.svg" />
        {expanded && (
          <>
            <div className={`nav-item ${poppins.className} text-[#6f737a]`}>Work</div>
            <div className={`nav-item ${poppins.className} text-[#6f737a]`}>About</div>
            <div className={`nav-item ${poppins.className} text-[#6f737a]`}>Play</div>
          </>
        )}
        <div className="nav-progress">
          <svg viewBox="0 0 24 24" className="nav-progress__svg" aria-hidden="true">
            <circle className="nav-progress__track" cx="12" cy="12" r="8" />
            <circle
              className="nav-progress__bar"
              cx="12"
              cy="12"
              r="8"
              strokeDasharray="62.83"
              strokeDashoffset={62.83 * (1 - progress)}
            />
          </svg>
        </div>
      </div>
      <div className={`nav-item ${poppins.className}`}>{time}</div>
    </div>
  );
};

export default Navbar;
