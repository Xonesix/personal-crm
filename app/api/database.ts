"use server";
// Make sure to avoid request waterfall, where one await causes others to await as well.
// Do it in parallel Promise.all()
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";
interface people {
  id: number;
  userid: number;
  name: string;
  status: number;
  age: number;
  dob: string;
  occupation: string;
  phone: string;
  description: string;
}
export interface InteractionObject {
  id: number;
  userid: number;
  date_of: string;
  location: string;
  remind: boolean;
  status: number;
  description: string;
}

export async function getUserID() {
  let userId = 1;
  return userId;
}
export async function fetchPeople() {
  noStore();
  let accID = await getUserID();
  try {
    // await new Promise(resolve => setTimeout(resolve, 3000));

    const result =
      await sql<people>`SELECT * FROM people WHERE userid = ${accID}`;
    return result.rows;
  } catch (error) {
    console.log(error);

    return "It seems there was an error";
  }
}
export async function fetchLastInteractions() {
  noStore();
  let accID = await getUserID();
  // await new Promise(resolve => setTimeout(resolve, 3000));

  try {
    const result = await sql<InteractionObject>`
      SELECT *,
             to_char(interactions.date_of, 'YYYY-MM-DD HH24:MI:SS') AS date_of_string
      FROM interactions 
      WHERE userid = ${accID} 
      AND interactions.date_of::date <= CURRENT_DATE -- Filter out dates equal to today
      ORDER BY interactions.date_of DESC 
      LIMIT 5;
    `;

    // Map over the rows and convert the date_of field to a string
    const interactions = result.rows.map((interaction) => ({
      ...interaction,
      date_of: interaction.date_of.toString().substring(0, 10),
    }));

    return interactions;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Use noStore in fetch functions  import { unstable_noStore as noStore } from 'next/cache';

// SQL Functions

// Authentication
