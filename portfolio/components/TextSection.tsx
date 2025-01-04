"use client";
import Image from "next/image";
import down from "../assets/svg/chevron-down.svg";
import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";

export default function TextSection() {
  const { info } = useContext(InfoDisplayContext);
  switch (info.icon) {
    case "profession":
      return (
        <>
          <Image src={down} alt="" />
          <p>professional-info</p>
        </>
      );
    case "personal":
      return (
        <>
          <Image src={down} alt="" />
          <p>personal-info</p>
        </>
      );  
  }
}
