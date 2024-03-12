import React from 'react';
import styles from "@/app/ui/Card/dashcard.module.css";
import { FaceIcon } from '@radix-ui/react-icons';
const InfoBar = () => {
  return (
    <div className={`mt-3 m-2 ${styles.infobar}`}>
        <p>Name</p>
        <p>Date</p>
        <p>Who</p>
        <div className={`w-15 bg-cyan-500 rounded-sm flex flex-row justify-around ${styles.buttons}`}>
            <div className='p-1'><FaceIcon /></div>
            
            <div><p>delete</p></div>
        </div>
    </div>
    
  );
}

export default InfoBar;