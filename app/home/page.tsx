import React from 'react';
import Homebar from '@/app/ui/homeBar/Homebar';
import LastInteractions from '../ui/Card/LastInteractions';
import LastInteractionsSkeleton from '../ui/Card/LastInteractionsSkeleton';
import { Suspense } from 'react';
import styles from "@/app/home/home.module.css";
import InfoBar from '../ui/Card/InfoBar';
const page = async () => {
    
    return (
        <div>
            <Homebar />
            <div className={`${styles.background} m-2 p-5 flex flex-wrap`}>
                <Suspense fallback={<LastInteractionsSkeleton />}>
                    <LastInteractions />
                </Suspense>
                
                
            </div>

            
            
        </div>
    )
}

export default page;
