"use client";
import Image from "next/image";
import down from "../assets/svg/chevron-down.svg";
import right from "../assets/svg/chevron-right.svg";
import { useState } from "react";

type ArrowInfoProps = {
  type: string;
  title: string;
};


export default function ArrowInfo({  title }: ArrowInfoProps) {

  const [click, setClick] = useState(false);
  const  handleClick=()=>{
    setClick(()=> true)
}

  
  if (click) {
    return (
      <div className="text-white flex gap-2 items-center p-1" onClick={handleClick} >
        <Image alt="down arrow" src={down}></Image>
        <p>{title}</p>
      </div>
    );
  } else {
    return (
      <div className="hover:text-white flex gap-2 items-center p-1" onClick={handleClick}>
        <Image alt="right arrow" className="text-white" src={right}></Image>
        <p>{title}</p>
      </div>
    );
  }
}
