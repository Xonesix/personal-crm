import React from 'react'
import styles from '@/app/ui/homeBar/navbar.module.css';
import clsx from 'clsx';
const Homebar = () => {
  var currLink:string = 'home';
  return (
    <div id="navBar" className={`${styles.navBar} w-fill flex-none text-white py-8`}>
        <div className={` ${styles.miniMenu}  rounded-r-md flex-row space-x-10 drop-shadow-lg`}>
          <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': currLink === 'home' })}>
            <h2>Home</h2>
          </div>
          
          <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': currLink === 'interactions' })}>
            <h2>Interactions</h2>
          </div>

          <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': currLink === 'people' })}>
            <h2>People</h2>
          </div>

          <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': currLink === 'analytics' })}>
            <h2>Analytics</h2>
          </div>
          <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': currLink === 'resources' })}>
            <h2>Resources</h2>
          </div>
        </div>
    </div>
  );
}

export default Homebar;