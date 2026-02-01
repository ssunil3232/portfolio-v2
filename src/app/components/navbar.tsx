import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { poppins } from '../ui/fonts';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`nav-body ${scrolled ? 'nav-body--scrolled' : ''} ${mounted ? 'nav-body--mounted' : ''}`}>
      <Image className="nav-icon" width={40} height={40} sizes="100vw" alt="" src="/assets/common/icon.svg" />
      <div
        className={`nav-player nav-player--collapsible ${hovered ? 'nav-player--expanded' : ''}`}
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <Image className="nav-button-icon" width={20} height={20} sizes="100vw" alt="" src="/assets/common/hover_arrow_icon.svg" />
        {hovered && (
          <>
            <div className={`nav-item ${poppins.className}`}>Work</div>
            <div className={`nav-item ${poppins.className}`}>About</div>
            <div className={`nav-item ${poppins.className}`}>Play</div>
          </>
        )}
        <Image className="nav-button-icon nav-button-icon--end" width={20} height={20} sizes="100vw" alt="" src="/assets/common/hover_arrow_icon.svg" />
      </div>
      <div className={`nav-item ${poppins.className}`}>11.10am</div>
    </div>
  );
};

export default Navbar;
