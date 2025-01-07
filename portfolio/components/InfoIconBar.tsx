"use client";
import { SquareUser } from "lucide-react";
import { Joystick } from "lucide-react";
import { Terminal } from "lucide-react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
import { Fragment, useContext } from "react";
import useScreenSize from "@/hooks/useScreenSize";

export default function InfoIconBar() {
  // diplays icon bar in the /about-me route
  const screen = useScreenSize("(min-width:1024px)");

  const { info, setInfo } = useContext(InfoDisplayContext);
  return (
    <div className="flex flex-col items-center py-6 gap-10">
      <div  className="hover:cursor-pointer hover:text-white" onClick={() => setInfo({icon:'profession', topic:'skills'})}>
        {info.icon === "profession" ? <Terminal size={screen ? 28 : 20} color="white" /> : <Terminal size={screen ? 28 : 20} />}
      </div>
      <div className="hover:cursor-pointer hover:text-white" onClick={() => setInfo({icon:'personal', topic:"bio"})}>
        {info.icon === "personal" ? <SquareUser size={screen ? 28 : 20} color="white" /> : <SquareUser size={screen ? 28 : 20} />}
      </div>
    </div>
  );
}
