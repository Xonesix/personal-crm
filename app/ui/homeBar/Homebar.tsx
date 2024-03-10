'use client'
import React from 'react';
import styles from '@/app/ui/homeBar/navbar.module.css';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Homebar = () => {
  const currLink = usePathname();

  return (
    <div id="navBar" className={`${styles.navBar} w-fill text-white py-8 flex justify-between items-center`}>
      <NavBar currLink={currLink} />
      <Image src="/assets/cog.png" width={50} height={50} className="hidden md:block mx-3" alt="setting cog icon to go to settings page"/>
      
    </div>
  );
}

export default Homebar;
