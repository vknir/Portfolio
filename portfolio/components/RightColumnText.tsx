import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
export default function RightColumnText() {
  const { info } = useContext(InfoDisplayContext);
  switch (info.topic) {
    case "skills":
      return (
        <div className="py-4 px-16 flex flex-col gap-4  h-full scrollbar-hide">
          <div className="">
            <p className="text-2xl">Languages</p>
            <ol className="list-decimal list-inside  p-5" type="1" start={1}>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>C++</li>
            </ol>
          </div>

          <div>
            <p className="text-2xl">Libraries and Frameworks</p>
            <ol
              className="list-decimal list-inside px-5 py-2"
              type="1"
              start={1}
            >
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Mongoose ODM</li>
              <li>Prisma ORM</li>
            </ol>
          </div>

          <div>
            <p className="text-2xl">Libraries and Frameworks</p>
            <ol
              className="list-decimal list-inside px-5 py-2"
              type="1"
              start={1}
            >
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Mongoose ODM</li>
              <li>Prisma ORM</li>
            </ol>
          </div>
        </div>
      );
    case "education":
      return <div className="h-full w-full bg-red-500"></div>;
    case "hobbies":
      return <div className="h-full w-full bg-red-500"></div>;
    case "in":
      return <div className="h-full w-full bg-red-500"></div>;
  }
}
