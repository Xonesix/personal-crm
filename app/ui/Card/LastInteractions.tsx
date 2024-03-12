import React from 'react';
import styles from "@/app/ui/Card/dashcard.module.css";
import InfoBar from './InfoBar';
const Dashcard = () => {
  return (
    <div className='z-50'>
        <h1 className=' mt-5 ml-5 text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-green-400 to-purple-500'>Last Interactions</h1>
        <div className={`${styles.card} mt-2 ml-5 rounded-xl`}>
          <div className={`font-bold mr-4 ml-2 mt-1 ${styles.spacer}`}>
            <h2>Name</h2>
            <h2>Date</h2>
            <h2>Who</h2>
          </div>
          <InfoBar />
          <InfoBar />
        </div>

    </div>
  );
}

export default Dashcard