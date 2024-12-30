"use client";
import ProjectCard from "@/components/ProjectCard";
import useScreenSize from "@/hooks/useScreenSize";
import chat from "../../assets/project/Chat-App.png";
import ourApp from "../../assets/project/Our-App.png";
import codeEditor from "../../assets/project/Code-Editor.png";
import list from "../../assets/project/Make-a-List.png";

export default function Projects() {
  const screen = useScreenSize("(min-width:1024px)");

  if (screen) {
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
