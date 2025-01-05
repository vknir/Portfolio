interface IProjectCardProps {
  projectNo: number;
  description: string;
  live: string;
  github: string;
  img: StaticImageData;
}
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "lucide-react";

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="flex flex-col justify-between gap-2 w-full max-w-[400px] text-left">
      <p>
        {" "}
        <span className="text-indigo-700">Project {props.projectNo}</span>{" "}
      </p>
      <div className="flex flex-col justify-center">
        <Image className="rounded-t-xl w-full h-full border border-x-0 border-y-0 hover:border-white" src={props.img} alt="" />
        <div className="rounded-b-xl bg-gray-950 p-6 flex flex-col gap-4">
          {props.description}
          <div className="flex items-center gap-4 text-white text-sm">
            <a className="p-2 rounded-sm bg-slate-800 transition-all duration-200 hover:scale-110 hover:brightness-105" target="_blank" href={props.live}>live-project</a>
            <a className="p-2 rounded-sm bg-slate-800 hover:scale-110 hover:brightness-105 transition-all duration-200" target="_blank" href={props.github}>
              <div className="">
              <GithubIcon size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
