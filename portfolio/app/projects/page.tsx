'use client'
import ProjectCard from "@/components/ProjectCard";
import useScreenSize from "@/hooks/useScreenSize";
import chat from "../../assets/project/Chat-App.png";
import ourApp from "../../assets/project/Our-App.png";
import codeEditor from "../../assets/project/Code-Editor.png";
import list from "../../assets/project/Make-a-List.png";
import down from "../../assets/svg/chevron-down.svg";
import Image from "next/image";
import ProjectList from "@/components/ProjectList";
import useLoader from "@/hooks/useLoader";
import Loading from "../../components/Loading";
import { Suspense } from "react";
export default function Projects() {
  const screen = useScreenSize("(min-width:1024px)");
  const time = useLoader(0.7);

  if (screen) {
    return (
      <Suspense>
        <div className="h-full w-full flex overflow-hidden ">
          {/*left column */}
          <div className=" h-full w-72 flex flex-col ">
            {" "}
            <div className="flex items-center p-2 text-white hover:cursor-pointer border-l-0 border-r-gray-700 border border-t-0 border-b-gray-700">
              <p>
                <Image className="inline mr-4" alt="down" src={down}></Image>
                projects
              </p>
            </div>
            <div className="flex p-4 flex-col gap-2 text-lg border border-t-0 border-l-0 border-r-gray-700 border-b-0">
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
          {/*right column */}{" "}
          <div className="w-full h-full flex justify-center overflow-auto scrollbar-hide">
            {time ? (
              <Loading />
            ) : (
              <div className="w-full flex flex-col">
                {" "}
                {/*right column heading */}
                <div className="w-fit p-2 text-white hover:cursor-pointer border border-gray-700 border-y-0 border-l-0 border-r flex gap-3 items-center justify-center">
                  <p>page.tsx</p>
                  <p className="text-xs"> x</p>
                </div>
                {/*right column project display section*/}
                <div className="h-full border flex justify-center  border-gray-700 border-x-0 border-t border-b-0 w-full overflow-auto scrollbar-hide">
                  <div className="grid grid-cols-2 gap-20 p-8">
                    <ProjectCard
                      projectNo={1}
                      title="Chat Box"
                      github="https://github.com/vknir/Chat-App"
                      live="https://chat-app-umber-nine-52.vercel.app/"
                      description="A real time chat app. Just join a room and chat away."
                      img={chat}
                    />
                    <ProjectCard
                      title="Our App"
                      projectNo={2}
                      github="https://github.com/vknir/Our-App"
                      live="https://our-app-coral.vercel.app/"
                      description="My version of a blog appliacation. Post about things you like, follow the accounts you want to."
                      img={ourApp}
                    />
                    <ProjectCard
                      title="Code Editor"
                      projectNo={3}
                      github="https://github.com/vknir/Code-Editor"
                      live="https://code-editor-vknir.netlify.app/"
                      description={
                        "Wnat to test out a piece of code?" +
                        "\n" +
                        "Use Code Editor and see the results."
                      }
                      img={codeEditor}
                    />
                    <ProjectCard
                      title="Make-a-List"
                      projectNo={4}
                      github="https://github.com/vknir/E2E_Todo"
                      live="https://make-a-list-lac.vercel.app/"
                      description="A web app used make list, add or remove an item as you like it."
                      img={list}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Suspense>
    );
  } else {
    return (
      <Suspense>
        <div className="h-full overflow-y-auto scrollbar-hide flex justify-center">
          {time ? (
            <Loading />
          ) : (
            <div className="h-full text-sm w-full p-10 flex flex-col items-center gap-10 ">
              {" "}
              <ProjectCard
                projectNo={1}
                title="Chat Box"
                github="https://github.com/vknir/Chat-App"
                live="https://chat-app-umber-nine-52.vercel.app/"
                description="A real time chat app. Just join a room and chat away."
                img={chat}
              />
              <ProjectCard
                title="Our App"
                projectNo={2}
                github="https://github.com/vknir/Our-App"
                live="https://our-app-coral.vercel.app/"
                description="My version of a blog appliacation. Post about things you like, follow the accounts you want to."
                img={ourApp}
              />
              <ProjectCard
                title="Code Editor"
                projectNo={3}
                github="https://github.com/vknir/Code-Editor"
                live="https://code-editor-vknir.netlify.app/"
                description={
                  "Wnat to test out a piece of code?" +
                  "\n" +
                  "Use Code Editor and see the results."
                }
                img={codeEditor}
              />
              <ProjectCard
                title="Make-a-List"
                projectNo={4}
                github="https://github.com/vknir/E2E_Todo"
                live="https://make-a-list-lac.vercel.app/"
                description="A web app used make list, add or remove an item as you like it."
                img={list}
              />
            </div>
          )}
        </div>
      </Suspense>
    );
  }
}
