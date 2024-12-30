"use client";
import ProjectCard from "@/components/ProjectCard";
import useScreenSize from "@/hooks/useScreenSize";
import chat from "../../assets/project/Chat-App.png";
import ourApp from "../../assets/project/Our-App.png";
import codeEditor from "../../assets/project/Code-Editor.png";
import list from "../../assets/project/Make-a-List.png";
import down from "../../assets/svg/chevron-down.svg";
import Image from "next/image";
import ProjectList from "@/components/ProjectList";

export default function Projects() {
  const screen = useScreenSize("(min-width:1024px)");

  if (screen) {
    return (
      <div className="h-full w-full flex">
        <div className=" h-full w-72 flex flex-col ">
          {" "}
          {/*left column */}
          <div className="flex p-2 text-white hover:cursor-pointer border-l-0 border-r-gray-700 border border-t-0 border-b-gray-700">
            <p>
              <Image className="inline mr-4" alt="down" src={down}></Image>
              projects
            </p>
          </div>
          <div className="flex p-4 flex-col gap-2 text-lg border border-t-0 border-l-0 border-r-gray-700 border-b-gray-700">
            <ProjectList title={"Next.js"} />
            <ProjectList title="React.js" />
            <ProjectList title="Tailwind" />
            <ProjectList title="Node.js" />
            <ProjectList title="Express.js" />
            <ProjectList title="MongooDB" />
            <ProjectList title="Prisma" />
          </div>
          <div className="w-full h-full  border border-gray-700 border-r "></div>
        </div>
        
        <div className="w-full h-full"> {/*right column */}
        <div></div> {/*right column heading */}

        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full overflow-y-auto scrollbar-hide">
        <div className="h-full w-full p-10 flex flex-col items-center gap-10 ">
          {" "}
          <ProjectCard
            projectNo={1}
            github="https://github.com/vknir/Chat-App"
            live="https://chat-app-umber-nine-52.vercel.app/"
            description="A real time chat app, join a room and chat away."
            img={chat}
          />
          <ProjectCard
            projectNo={2}
            github="https://github.com/vknir/Our-App"
            live="https://our-app-coral.vercel.app/"
            description=""
            img={ourApp}
          />
          <ProjectCard
            projectNo={3}
            github="https://github.com/vknir/Code-Editor"
            live="https://code-editor-vknir.netlify.app/"
            description=""
            img={codeEditor}
          />
          <ProjectCard
            projectNo={4}
            github="https://github.com/vknir/E2E_Todo"
            live="https://make-a-list-lac.vercel.app/"
            description=""
            img={list}
          />
        </div>
      </div>
    );
  }
}
