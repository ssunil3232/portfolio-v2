import Image from 'next/image';
import React from 'react';
import { poppins } from '../ui/fonts';
import projects from "../data/project-info.json";
import { Menubar } from 'primereact/menubar';

const Navbar = () => {

  const headerItemRenderer = (item:any) => (
    <a className="flex align-items-center p-menuitem-link" href={item.url}>
        <Image src={item.icon} alt="logo" width={30} height={30} />
        <span className={`${poppins.className} mx-2`} style={{fontSize: 'small'}}>{item.label}</span>
        {item.dropdown && <span className="mx-2 pi pi-angle-down"></span>}
    </a>
  );

  const itemRenderer = (item: any) => (
    <a className={`flex align-items-center p-menuitem-link p-menuitem items-center ${item.border ? "menu-separator justify-center" : ""}`} href={item.url}>
      {item.icon && (<Image src={item.icon} alt="logo" width={30} height={30} />)}
      <span className={`${poppins.className} mx-2`} style={{ fontSize: 'small' }}>{item.label}</span>
    </a>
  );

  const items = [
    {
        label: 'Projects',
        icon: '/project_logo.png',
        template: headerItemRenderer,
        dropdown: true,
        items: [
          ...projects.map((item) => ({
            label: item.label,
            icon: item.preview,
            url: item.link,
            template: itemRenderer
          })),
            {
              label: 'All',
              template: itemRenderer,
              border: true,
              url: '/#projects-section',
            }
        ]
    },
];

const start = (<a className="flex align-items-center items-center p-menuitem-link" href="/">
                <Image src="/personal_logo.png" alt="logo" width={30} height={30} />
                <span className={`${poppins.className} mx-2`} style={{fontSize: 'small'}}>Home</span>
              </a>);

  return (
    // <nav className="w-full sticky z-10 top-0 py-2 px-4 text-white flex items-center justify-start lg:justify-between sm:justify-start md:justify-between " style={{background: '#ffffffd4'}}>
    //   <Image src="/personal_logo.png" alt="logo" width={50} height={50} className='mr-5' />
    //   <div className='flex items-center justify-center'>
    //     {/* <ul className="flex gap-4">
    //       <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/" className="hover:underline">Home</a></li>
    //       <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/#projects-section" className="hover:underline">Projects</a></li> */}
    //       {/* <li style={{borderRadius: '30px', background: '#d0405891'}} className='px-5 py-1'><a href="/about" className="hover:underline">About</a></li> */}
    //     {/* </ul> */}
    //   </div>
    // </nav>
        <div className=" px-4 w-full flex sticky z-10 top-0 flex items-center justify-start lg:justify-end sm:justify-start md:justify-start" style={{background: '#ffffffd4'}}>
            <div className='p-menuitem-content p-menubar p-menuitem p-0 mr-2 bg-transparent'>{start}</div>
            <Menubar model={items} style={{background: '#ffffffd4'}} className='p-0 m-0 mobileInactive'/>
        </div>
  );
};

export default Navbar;