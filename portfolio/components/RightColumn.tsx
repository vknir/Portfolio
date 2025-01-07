"use client";
import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
import useLoader from "@/hooks/useLoader";
import Loading from "@/components/Loading";
import RightColumnText from "./RightColumnText";

export default function MainContent() {
  const { info } = useContext(InfoDisplayContext);
  const load = useLoader(.7);
  return (
    <div className="flex-col h-full overflow-y-hidden flex justify-center">
      <div className="w-full h-fit flex gap-3 border border-b-gray-700 border-x-0 border-t-0">

        <p className="px-4 py-2 border w-fit text-white flex items-center gap-3  border-r-gray-700  border-b-0 border-t-0 border-l-0">
          {info.topic}.txt
          <span className="text-white text-xs">x</span>
        </p>
      </div>
      <div className="h-full overflow-y-hidden flex justify-center">
        {load ? (
          <div className="h-full w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="h-full w-full overflow-y-auto scrollbar-hide">
            {<RightColumnText />}
          </div>
        )}
      </div>
    </div>
  );
}
