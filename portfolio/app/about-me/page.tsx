"use client";
import ArrowInfoList from "@/components/ArrowInfoList";
import { InfoDisplayContextProvider } from "@/lib/InfoDisplayContextProvider";
import InfoIconBar from "@/components/InfoIconBar";
import TextSection from "@/components/TextSection";
import useScreenSize from "@/hooks/useScreenSize";

import RightColumn from "@/components/RightColumn";

export default function Aboutme() {
  const screen = useScreenSize("(min-width:1024px)");

  return (
    <InfoDisplayContextProvider>
      <div className="h-full overflow-y-hidden flex justify-center">
        <div className="w-fit h-full flex border border-gray-700 border-y-0 border-l-0 border-r">
          {/*left column*/}
          <div className="w-14 md:w-24 h-full border border-y-0 border-r border-l-0 border-gray-700">
            {/** icon bar */}

            <InfoIconBar />

            <div></div>
          </div>
          {
            screen?
          
          <div className="w-48  h-full">
            {/** text section */}
            <>
                <div className="flex p-1 md:py-2 md:px-1 items-center text-left gap-2 border border-x-0 border-t-0 border-b-gray-700">
                  <TextSection />
                </div>
                <div className="border border-x-0 border-t-0 border-b-gray-700">
                  {/** folder texts */}
                  {/** profession */}
                  <ArrowInfoList />
                </div>
              </>
          </div>:<></>
          }
        </div>

        <div className=" w-full flex flex-col overflow-x-hidden">
          {/**right column */}
          {/**main content */}
          <RightColumn />
        </div>
      </div>
    </InfoDisplayContextProvider>
  );
}
