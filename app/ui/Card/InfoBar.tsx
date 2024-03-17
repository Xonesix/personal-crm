"use client";
import React from "react";
import styles from "@/app/ui/Card/dashcard.module.css";
import { FaceIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
interface InteractionObject {
  date_of: string;
  description: string;
}
const InfoBar = (props: InteractionObject) => {
  return (
    <div
      className={`mt-3 p-2 m-2 border-b-2 border-neutral-600 ${styles.infobar}`}
    >
      <p className="self-center font-semibold">{props.date_of}</p>
      <p className="self-center font-semibold">{props.description}</p>
      <div className={`w-15 flex flex-row justify-around ${styles.buttons}`}>
        <div className="flex flex-row  justify-between self-center">
          <div className={`p-2 mr-1 ${styles.icons} self-center flex`}>
            <a href="edit">
              <Pencil1Icon className="self-center" />
            </a>
          </div>
          <div className={`p-2 ml-1 ${styles.icons} self-center flex`}>
            <a href="delete">
              <TrashIcon className="self-center" />
            </a>
          </div>
        </div>
      </div>
    </div>
    //
  );
};

export default InfoBar;
