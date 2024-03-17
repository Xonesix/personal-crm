"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
const FormSchema = z.object({
  title: z.coerce.string().regex(/^[a-zA-Z]+$/),
});
const ValidateInteraction = FormSchema;

export async function createInteraction(formData: FormData) {
  try {
    const rawFormData = ValidateInteraction.parse({
      title: formData.get("title"),
    });
    console.log(rawFormData);
  } catch (error) {
    console.log(error);
  }
  // Test it out:
}
