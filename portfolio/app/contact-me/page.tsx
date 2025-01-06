"use client";


import useScreenSize from "@/hooks/useScreenSize";
import useLoader from "@/hooks/useLoader";
export default function Contact() {
  const screen = useScreenSize("(min-width:1024px)");
  if (screen) {
    return (
      <div className="h-full w-full bg-gray-400">
        {/** container contactme */}
        <div className="w-72 h-full bg-white border border-y-0 border-l-0 border-r-gray-700">
          {/** left column */}
          
        </div>
        <div>{/** right column */}</div>
      </div>
    );
  } else {
    return <></>;
  }
}
