"use client";
import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
import useLoader from "@/hooks/useLoader";
import Loading from "@/components/Loading";
import RightColumnText from "./RightColumnText";

export default function MainContent() {
  const { info } = useContext(InfoDisplayContext);
  const load = useLoader(1);
  return (
    <>
      <div className="w-full h-fit  border border-b-gray-700 border-x-0 border-t-0">
        <p className="px-4 py-2 border w-fit text-white  border-r-gray-700  border-b-0 border-t-0 border-l-0">
          {info.topic}.txt
        </p>
      </div>
      <div className="flex justify-center items-center h-full">
        {load ? (
          <div className="h-full w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <div className="h-full w-full overflow-hidden">
            {
              <RightColumnText/>
            }
          </div>
        )}
      </div>
    </>
  );
}
