'use client'
import { useContext } from "react";
import { ToggleContext } from "./NavListToggle";

export default function Bars3() {
  const {toggle, setToggle}= useContext(ToggleContext)
  return (
    <button onClick={()=>{setToggle(prev=>!prev)}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
