import React from "react";
import Homebar from "@/app/ui/homeBar/Homebar";
import styles from "@/app/home/home.module.css";
import otherStyles from "@/app/interactions/create/cards.module.css";
import CreateInteractionForm from "@/app/ui/Form/CreateInteractionForm";
const page = () => {
  return (
    <div>
      <Homebar />
      <div className="w-full flex flex-row p-2">
        <div className={`${styles.background} p-5 flex self-center flex-wrap`}>
          <div className="justify-center self-center flex flex-col w-full">
            <h1 className=" mt-5 self-center text-4xl font-bold text-transparent bg-clip-text inline-block bg-gradient-to-r from-green-400 to-purple-500">
              Create an Interaction
            </h1>
            <div className={`${otherStyles.card} self-center p-0 mt-3`}>
              <CreateInteractionForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
