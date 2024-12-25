import Link from "next/link";
import Wave from "@/components/Wave";

export default function Home() {
  return (
    <div className="h-full w-full flex justify-between relative">
      <Wave />
      <div className="text-left h-full flex flex-col py-4 justify-around  ">
        <div className="flex flex-col gap-4">
          <p className="text-lg text-white">Hello! I am,</p>
          <h1 className="text-6xl text-white">Utkarsh Kumar</h1>
          <h2 className="text-4xl text-indigo-800">
            {">"} a Web Developer <span className="animate-custom-ping">|</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p>// Welocome to my portfolio</p>
          <p>// explore all my projects on GitHub</p>
        </div>
      </div>
      <div className="origin-center rotate-180">
        <Wave />
      </div>
    </div>
  );
}
