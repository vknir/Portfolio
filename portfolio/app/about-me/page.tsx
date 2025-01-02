import Image from "next/image";
import down from "../../assets/svg/chevron-down.svg";
import ArrowInfo from "@/components/ArrowInfo";

export default function Aboutme() {
  return (
    <div className="h-full w-full  flex">
      <div className="w-72 h-full flex  border border-gray-700 border-y-0 border-l-0 border-r">
        {/*left column*/}
        <div className="w-24 h-full border border-y-0 border-r border-l-0 border-gray-700">
          {/** icon bar */}
          <div></div>
        </div>
        <div className="w-full h-full ">
          {/** text section */}
          <div className="flex py-2 px-1 items-center text-left gap-2 border border-x-0 border-t-0 border-b-gray-700">
            <Image src={down} alt="" />
            <p>professional-info</p>
          </div>
          <div className="border border-x-0 border-t-0 border-b-gray-700">
            {/** folder texts */}
            <ArrowInfo type={"folder"} title={"skills"} />
          </div>
        </div>
      </div>
      <div className="h-full  flex flex-col">
        {/**right column */}
        <div className="border border-y-0 border-l-0 border-r-gray-700">
          {/**header */}
        </div>
        <div className="h-full w-fit border border-x-0 border-b-0 border-t-gray-700">
          {/**main content */}
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
}
