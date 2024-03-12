// Make sure to avoid request waterfall, where one await causes others to await as well.
// Do it in parallel Promise.all()
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
interface people
{
  id: number,
  userid: number,
  name: string,
  status: number,
  age: number,
  dob: string,
  occupation: string,
  phone: string,
  description: string
}
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
function getUserID() 
{
  let userId = 1;
  return userId;
}
export async function fetchPeople()
{
  noStore();
  let accID = getUserID();
  try {
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const result = 
      await sql<people>`SELECT * FROM people WHERE userid = ${accID}`;
    return result.rows
    }
  catch (error)
  {
    console.log(error);
    
    return "It seems there was an error";
  }
  
}
// Use noStore in fetch functions  import { unstable_noStore as noStore } from 'next/cache';

// SQL Functions

// Authentication