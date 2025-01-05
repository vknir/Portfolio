"use client";
import ArrowInfoList from "@/components/ArrowInfoList";
import { InfoDisplayContextProvider } from "@/lib/InfoDisplayContextProvider";
import InfoIconBar from "@/components/InfoIconBar";
import TextSection from "@/components/TextSection";
import useScreenSize from "@/hooks/useScreenSize";
import useLoader from "@/hooks/useLoader";
import Loading from "@/components/Loading";
import RightColumn from "@/components/RightColumn";

export default function Aboutme() {
  const screen = useScreenSize("(min-width:1024px)");
  const load = useLoader(1);
  if (screen) {
    return (
      <InfoDisplayContextProvider>
        <div className="h-full w-full flex">
          <div className="w-fit h-full flex border border-gray-700 border-y-0 border-l-0 border-r">
            {/*left column*/}
            <div className="w-24 h-full border border-y-0 border-r border-l-0 border-gray-700">
              {/** icon bar */}

              <InfoIconBar />

              <div></div>
            </div>
            <div className="w-48 h-full">
              {/** text section */}
              <div className="flex py-2 px-1 items-center text-left gap-2 border border-x-0 border-t-0 border-b-gray-700">
                <TextSection />
              </div>
              <div className="border border-x-0 border-t-0 border-b-gray-700">
                {/** folder texts */}
                {/** profession */}
                <ArrowInfoList />
              </div>
            </div>
          </div>

          <div className="h-full w-full flex flex-col">
            {/**right column */}
            {/**main content */}
            <RightColumn />
          </div>
        </div>
      </InfoDisplayContextProvider>
    );
  } else {
    return (
      <>
        {load ? (
          <div className="w-full h-full flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
