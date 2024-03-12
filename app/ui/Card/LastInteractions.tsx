import React from 'react';
import styles from "@/app/ui/Card/dashcard.module.css";
import InfoBar from './InfoBar';
import { fetchLastInteractions } from '@/app/api/database';

const LastInteractionsCard = async () => {
  
  const interactions = await fetchLastInteractions();
  return (
    <div className='z-50'>
        <h1 className=' mt-5 ml-5 text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-green-400 to-purple-500'>Last Interactions</h1>
        <div className={`${styles.card} mt-2 ml-5 rounded-xl`}>
          <div className={`font-bold mr-4 ml-2 mt-1 ${styles.spacer}`}>
            <h2>Name</h2>
            <h2>Date</h2>
            <h2>Description</h2>
          </div>
          {/* Map over interactions and return InfoBar for each */}
          {interactions.map((interaction) => (
            <InfoBar key={interaction.id} description={interaction.description} date_of={interaction.date_of} />
          ))}
          
        </div>

    </div>
  );
}

export default LastInteractionsCard;