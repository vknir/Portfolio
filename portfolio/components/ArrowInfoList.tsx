"use client";
import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
import Image from "next/image";
import down from "../assets/svg/chevron-down.svg";
import right from "../assets/svg/chevron-right.svg";
import { useState } from "react";

export default function ArrowInfoList() {
  const { info, setInfo } = useContext(InfoDisplayContext);
  const [highlight, setHighlight] = useState(info.topic);

  const handleClick = (icon :string,topic: string) => {
    setHighlight(topic);
    setInfo(() => {
      return { icon: icon, topic: topic };
    });
  };

  switch (info.icon) {
    case "profession":
      return (
        <>
          <div className="flex flex-col gap-2 py-2">
            <div
              onClick={() => handleClick( "profession","skills")}
              className="text flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer">
              {highlight === "skills" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "skills" ? "text-white" : ""}>
                skills.txt
              </p>
            </div>
            
          </div>
        </>
      );
    case "personal":
      return (
        <>
          <div className="flex flex-col gap-2 py-2">
            <div onClick={() => handleClick("personal","bio")} className="flex gap-2 items-center p-1 hover:text-white hover:cursor-pointer">
              {highlight === "bio" ? (
                <Image alt="down arrow" src={down}></Image>
              ) : (
                <Image alt="down right" src={right}></Image>
              )}
              <p className={highlight === "bio" ? "text-white" : ""}>
                bio.txt
              </p>
            </div>
          </div>
        </>
      );
  }
}
