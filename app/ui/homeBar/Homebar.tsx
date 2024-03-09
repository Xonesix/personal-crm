'use client'
import React from 'react';
import styles from '@/app/ui/homeBar/navbar.module.css';
import NavBar from './NavBar';
import { usePathname } from 'next/navigation';

const Homebar = () => {
  const currLink = usePathname();

  return (
    <div id="navBar" className={`${styles.navBar} w-fill flex-none text-white py-8`}>
      <NavBar currLink={currLink} />
    </div>
  );
}

export default Homebar;
