"use client";
import React from "react";
import { useFormState } from "react-dom";
import { createInteraction } from "@/app/api/actions";
import styles from "@/app/interactions/create/cards.module.css";
const CreateInteractionForm = () => {
  return (
    <form action={createInteraction}>
      {/* <input type="radio" id="html" name="fav_language" value="HTML"> */}
      {/*   <label for="html">HTML</label><br> */}
      <div className="flex flex-row">
        <label htmlFor="title" className="self-center font-bold ml-40 text-3xl">
          Title*
        </label>
        <input
          required
          type="text"
          name="title"
          id="title"
          placeholder="e.g Meeting with the Boss"
          className={`bg-gray-900  placeholder:text-green-800 self-center p-2 font-semibold text-xl ml-10 rounded-lg ${styles.input}`}
        />

        <button
          type="submit"
          className="bg-blue-500 ml-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateInteractionForm;
