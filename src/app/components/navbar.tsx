import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full p-4 text-white flex items-center justify-center lg:justify-end sm:justify-center md:justify-center ">
      <ul className="flex gap-4">
        <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/" className="hover:underline">Home</a></li>
        <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/#projects-section" className="hover:underline">Projects</a></li>
        {/* <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/about" className="hover:underline">About</a></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;