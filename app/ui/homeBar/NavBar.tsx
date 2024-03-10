'use client'
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from '@/app/ui/homeBar/navbar.module.css';
import { useState } from 'react';
interface props
{
    currLink:string;
}
interface HoverStyles {
    [key: string]: {
        color: string;
    };
}
const NavBar = (prop:props) => {
    const [hoverStyle, setHoverStyle] = useState<HoverStyles>({});
    function handleHover(id: string) {
        if (prop.currLink !== ("/" + id)) {
            setHoverStyle(prevStyles => ({
                ...prevStyles,
                [id]: {
                    color: "rgb(74, 222, 128)"
                }
            }));
        }
    }
    
    function handleHoverOut(id:string) {
        setHoverStyle(prevStyles => {
            const updatedStyles = { ...prevStyles };
            delete updatedStyles[id];
            return updatedStyles;
        });
    }
    return (
        <div>
        <div className={` ${styles.miniMenu}  rounded-r-md flex-row space-x-10 drop-shadow-lg`}>
            <div className={clsx(`font-bold`, { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black font-bold': prop.currLink === '/home' })}>
                <Link style={hoverStyle["home"]} onMouseOver={() => handleHover("home")} onMouseOut={() => handleHoverOut("home")} href="/home"><h2>Home</h2></Link>
            </div>
        
            <div className={clsx('font-bold', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black font-bold': prop.currLink === '/interactions' })}>
                <Link style={hoverStyle["interactions"]} onMouseOver={() => handleHover("interactions")} onMouseOut={() => handleHoverOut("interactions")} href="/interactions"><h2>Interactions</h2></Link>
            </div>

            <div className={clsx('font-bold', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black font-bold': prop.currLink === '/people' })}>
                <Link style={hoverStyle['people']} onMouseOver={() => handleHover('people')} onMouseOut={() => handleHoverOut('people')} href="/people"><h2>People</h2></Link>
            </div>


        <div className={clsx('font-bold', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black font-bold': prop.currLink === '/analytics' })}>
            <Link style={hoverStyle['analytics']} onMouseOver={() => handleHover('analytics')} onMouseOut={() => handleHoverOut('analytics')} href="/analytics"><h2>Analytics</h2></Link>
        </div>
        <div className={clsx('font-bold', { 'bg-green-400 p-2 rounded-lg drop-shadow-sm text-black font-bold': prop.currLink === '/resources' })}>
            <Link style={hoverStyle['resources']} onMouseOver={() => handleHover('resources')} onMouseOut={() => handleHoverOut('resources')} href="/resources"><h2>Resources</h2></Link>
        </div>
  </div>
  </div>
  )
}

export default NavBar