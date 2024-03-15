import React from "react";
import styles from "@/app/ui/Card/dashcard.module.css";
import InfoBar from "./InfoBar";
import { fetchLastInteractions } from "@/app/api/database";
import { ArrowRightIcon } from "@radix-ui/react-icons";
//Cool code d ssf
const LastInteractionsCard = async () => {
  const interactions = await fetchLastInteractions();
  return (
    <div className="z-50">
      <h1 className=" mt-5 ml-5 text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-green-400 to-purple-500">
        Last Interactions
      </h1>
      <div
        id="backgroundCard"
        className={`${styles.card} mt-2 ml-5 rounded-xl flex flex-col`}
      >
        <div className={`font-bold mr-4 ml-2 mt-1 ${styles.spacer}`}>
          <h2>Date</h2>
          <h2>Description</h2>
        </div>
        {/* Map over interactions and return InfoBar for each */}
        {interactions.map((interaction) => (
          <InfoBar
            key={interaction.id}
            description={interaction.description}
            date_of={interaction.date_of}
          />
        ))}
        <div
          id="buttonRow"
          className="flex flex-row justify-between p-2 mt-auto"
        >
          <button className="flex align-middle justify-between bg-black py-1 px-4 font-semibold rounded-md drop-shadow-xl transition ease-in-out hover:-translate-y-1 delay-75">
            <div>View All</div>
            <ArrowRightIcon
              className="self-center ml-3"
              strokeWidth={100}
            />{" "}
            {/* Center the arrow vertically */}
          </button>
          <button className="flex align-middle justify-between bg-green-400 text-black py-1 px-4 font-semibold rounded-md drop-shadow-xl transition ease-in-out hover:-translate-y-1 delay-75">
            <div>Create Interaction</div>
            <ArrowRightIcon
              className="self-center ml-3"
              strokeWidth={100}
            />{" "}
            {/* Center the arrow vertically */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastInteractionsCard;
