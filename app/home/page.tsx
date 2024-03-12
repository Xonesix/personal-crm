import React from 'react';
import Homebar from '@/app/ui/homeBar/Homebar';
import Dashcard from '../ui/Card/Dashcard';
import { fetchPeople } from '../api/database';
const page = async () => {
  // const result = await fetchPeople();
  // console.log(result);
  return (
    <div>
        <Homebar />
        <Dashcard />
    </div>
  )
}

export default page