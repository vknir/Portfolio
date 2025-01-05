"use client";
import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
import ArrowInfo from "./ArrowInfo";
import Image from "next/image";
import down from "../assets/svg/chevron-down.svg";
import right from "../assets/svg/chevron-right.svg";
import { useState } from "react";

export default function ArrowInfoList() {
  const { info, setInfo } = useContext(InfoDisplayContext);
  const [highlight, setHighlight] = useState(info.topic);

  const handleClick = (topic: string) => {
    setHighlight(topic);
    setInfo((prev) => {
      return { icon: prev.icon, topic: topic };
    });
  };

  switch (info.icon) {
    case "profession":
      return (
        <>
          <div className="flex flex-col gap-2 py-2">
            <div
              onClick={() => handleClick("skills")}
              className="text flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer"
            >
              {highlight === "skills" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "skills" ? "text-white" : ""}>
                skills.txt
              </p>
            </div>
            <div
              onClick={() => handleClick("education")}
              className="text flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer"
            >
              {highlight === "education" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "education" ? "text-white" : ""}>
                education.txt
              </p>
            </div>
          </div>
        </>
      );
    case "personal":
      return (
        <>
          <div className="flex flex-col gap-2 py-2">
            <div
              onClick={() => handleClick("hobbies")}
              className="text flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer"
            >
              {highlight === "hobbies" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "hobbies" ? "text-white" : ""}>
                hobbies.txt
              </p>
            </div>
            <div
              onClick={() => handleClick("intrests")}
              className="text flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer"
            >
              {highlight === "intrests" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "intrests" ? "text-white" : ""}>
                intrests.txt
              </p>
            </div>
          </div>
        </>
      );
  }
}
