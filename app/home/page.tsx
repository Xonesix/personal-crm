import React from 'react';
import Homebar from '@/app/ui/homeBar/Homebar';
import Dashcard from '../ui/Card/LastInteractions';
import { fetchPeople } from '../api/database';
import styles from "@/app/home/home.module.css";
import InfoBar from '../ui/Card/InfoBar';
const page = async () => {
    // const result = await fetchPeople();
    // console.log(result);
    return (
        <div>
            <Homebar />
            <div className={`${styles.background} m-2 p-5`}>
                <Dashcard />
                
            </div>
            
            
        </div>
    )
}

export default page;
