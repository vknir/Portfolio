"use client";
import { ToggleContext } from "@/lib/ToggleContextProvider";
import { useContext, useEffect } from "react";

export default function NavCard() {
  const { toggle, setToggle } = useContext(ToggleContext);

  if (toggle) {
    return (
      <div className="absolute  z-10 right-0 top-[61.33px] flex flex-col w-fit h-fit bg-gray-950 opacity-80 rounded-b-md text-lg px-4 py-2 gap-2">
        <a className="hover:brightness-110" href={"/"}>
          _home
        </a>

        <a className="hover:brightness-110" href={"/about-me"}>
          _about-me
        </a>

        <a className="hover:brightness-110" href={"/projects"}>
          _projects
        </a>

        <a className="hover:brightness-110" href={"/contact-me"}>
          _contact-me
        </a>
      </div>
    );
  }
}
