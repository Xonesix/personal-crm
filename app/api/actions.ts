"use server";
import { sql } from "@vercel/postgres";
import { log } from "console";
import { z } from "zod";
import { InteractionObject, getUserID } from "./database";
import { describe } from "node:test";

export async function createInteraction(prevState: any, formData: FormData) {
  const FormSchema = z.object({
    title: z.coerce.string().regex(/^[a-zA-Z\s]+$/),
    description: z.coerce.string().regex(/^[a-zA-Z\s]+$/),
    date: z.coerce.string(),
  });
  const ValidateInteraction = FormSchema;

  try {
    const rawFormData = ValidateInteraction.parse({
      title: formData.get("title"),
      description: formData.get("description"),
      date: formData.get("date"),
    });
    console.log(rawFormData);
    /*id: number;
    userid: number;
    date_of: string;
    location: string;
    remind: boolean;
    status: number;
    description: string; */
    const prepInsert = {
      userid: await getUserID(),
      date_of: rawFormData.date,
      description: rawFormData.description,
      remind: false,
    };
    await sql`INSERT INTO interactions(userid, date_of, description, remind)
              VALUES (${prepInsert.userid}, ${prepInsert.date_of},
                 ${prepInsert.description}, ${prepInsert.remind});`;

    return { success: "succesful code" };
  } catch (error) {
    console.log(error);
    return { error: `Must Enter Alphabetical Chars` };
  }
  // Test it out:
}
