import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '@/app/ui/homeBar/navbar.module.css';
interface props
{
    currLink:string;
}
const NavBar = (prop:props) => {
  return (
    <div><div className={` ${styles.miniMenu}  rounded-r-md flex-row space-x-10 drop-shadow-lg`}>
    <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': prop.currLink === '/home' })}>
      <Link href="/home"><h2>Home</h2></Link>

    </div>
    
    <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': prop.currLink === '/interactions' })}>
      <Link href="/interactions"><h2>Interactions</h2></Link>
    </div>

    <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': prop.currLink === '/people' })}>
    <Link href="/people"><h2>People</h2></Link>
    </div>

    <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': prop.currLink === '/analytics' })}>
       <Link href="/analytics"><h2>Analytics</h2></Link>
    </div>
    <div className={clsx('', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black': prop.currLink === '/resources' })}>
       <Link href="/resources"><h2>Resources</h2></Link>
    </div>
  </div></div>
  )
}

export default NavBar