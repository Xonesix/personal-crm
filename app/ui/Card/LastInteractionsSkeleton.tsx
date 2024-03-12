'use client'
import React from 'react';
import styles from "@/app/ui/Card/dashcard.module.css";
import InfoBar from './InfoBar';
import { fetchLastInteractions } from '@/app/api/database';
const LastInteractionsSkeleton = () => {

  return (
    <div className='z-50'>
        <div className={`${styles.thinSkeleton} h-10 ml-5 my-5 rounded-md`}></div>
        <div className={`${styles.card} w-20 h-20 mt-2 ml-5 rounded-xl flex flex-col  flex-wrap justify-around`}>
            <div className={`${styles.skeleton} bg-cyan-400 w-10 h-20  rounded-md`}></div>
            <div className={`${styles.skeleton} bg-cyan-400 w-10 h-20  rounded-md`}></div>
            <div className={`${styles.skeleton} bg-cyan-400 w-10 h-20  rounded-md`}></div>
            <div className={`${styles.skeleton} bg-cyan-400 w-10 h-20  rounded-md`}></div>

        </div>

    </div>
  );
}

export default LastInteractionsSkeleton;