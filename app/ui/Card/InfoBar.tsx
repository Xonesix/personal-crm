'use client'
import React from 'react';
import styles from "@/app/ui/Card/dashcard.module.css";
import { FaceIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
interface InteractionObject
{
  date_of:string,
  description:string
};
const InfoBar = (props:InteractionObject) => {
  return (
    <div className={`mt-3 pt-3 m-2 ${styles.infobar}`}>
        <p>Name</p>
        <p>{props.date_of}</p>
        <p>{props.description}</p>
        <div className={`w-15 flex flex-row justify-around ${styles.buttons}`}>
          <div className='flex flex-row  justify-between'>
            <div className={`p-2 mr-1 ${styles.icons} bg-`}><a href='edit'><Pencil1Icon /></a></div>
            <div className={`p-2 ml-1 ${styles.icons}`}><a href='delete'><TrashIcon /></a></div>
          </div>
            
            
        </div>
    </div>
    
  );
}

export default InfoBar;