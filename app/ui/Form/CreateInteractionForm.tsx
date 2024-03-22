"use client";
import React from "react";
import { useFormState } from "react-dom";
import { createInteraction } from "@/app/api/actions";
import styles from "@/app/interactions/create/cards.module.css";

const CreateInteractionForm = async () => {
  const initialState = {
    title: "",
    description: "",
    error: "",
    sucess: "",
  };
  const [state, formAction] = useFormState(createInteraction, initialState);
  return (
    <form action={formAction}>
      {/* <input type="radio" id="html" name="fav_language" value="HTML"> */}
      {/*   <label for="html">HTML</label><br> */}
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-row self-center gap-3">
          <label htmlFor="title" className="font-bold text-3xl self-center">
            Title*
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            placeholder="e.g Meeting with the Boss"
            className={`bg-gray-900  placeholder:text-green-800 self-center p-2 font-semibold text-xl rounded-lg ${styles.input}`}
          />
        </div>
        <div className="flex flex-row self-center gap-3">
          <label
            htmlFor="description"
            className="font-bold text-3xl self-center"
          >
            Description*
          </label>
          <input
            required
            type="text"
            name="description"
            id="description"
            placeholder="e.g I had to eat with my boys"
            className={`bg-gray-900  placeholder:text-green-800 self-center p-2 font-semibold text-xl  rounded-lg ${styles.input}`}
          />
        </div>
        <div className="flex flex-row self-center gap-3">
          <label
            htmlFor="description"
            className="font-bold text-3xl self-center"
          >
            Date*
          </label>
          <input
            required
            type="date"
            name="date"
            id="date"
            className={`bg-gray-900  placeholder:text-green-800 self-center p-2 font-semibold text-xl text-white   rounded-lg ${styles.input}`}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 ml-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
        >
          <p>Submit</p>
        </button>
      </div>
      <p className="text-green-600">{state?.success}</p>
      <p className="text-red-600">{state?.error}</p>
    </form>
  );
};

export default CreateInteractionForm;
