import { useContext } from "react";
import { InfoDisplayContext } from "@/lib/InfoDisplayContextProvider";
export default function RightColumnText() {
  const { info } = useContext(InfoDisplayContext);
  switch (info.topic) {
    case "skills":
      return (
        <div className="py-4 px-24 flex flex-col gap-3 h-full">
          <div>
            <p className="text-2xl">Libraries and Frameworks</p>
            <ol className="list-decimal list-inside  py-2" type="1" start={1}>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Mongoose ODM</li>
              <li>Prisma ORM</li>
            </ol>
          </div>

          <div className="">
            <p className="text-2xl">Languages</p>
            <ol className="list-decimal list-inside py-2" type="1" start={1}>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>C++</li>
              <li>Python</li>
            </ol>
          </div>
        </div>
      );

    case "bio":
      return (
        <div className="py-10 px-16">
          <ul className="list-inside list-['-_'] flex flex-col gap-3 h-full text-lg">
            <li>I am Utkarsh Kumar.</li>
            <li>
              A CSE graduate from Kalinga Institute of Industrial Technology.
            </li>
            <li>Currently looking for work.</li>
            <li>Please feel free to contact me.</li>
            <li>You can find me on LinkedIn, X, and on Instagram (links are given down below)</li>
            <li>Or reach me out via email.</li>
            <li>Thank you for your time. Have great day!</li>
          </ul>
        </div>
      );
    case 'contact':
      return<div>
       <ul className="list-inside list-['-_'] text-lg">
        <li>utkarshkumar0110@gmail.com</li>
        <li>+91-9137883657</li>
       </ul>
      </div>
    
    }
}
