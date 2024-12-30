interface IProjectCardProps {
  projectNo: number;
  stack: string;
  description: string;
  live: string;
  github: string;
  img: string;
}

export default function ProjectCard(props: IProjectCardProps) {
  return (
    <div className="flex flex-col justify-between gap-6 w-96 text-left">
      <p>
        {" "}
        <span className="text-blue-700">Project {props.projectNo}</span> //{" "}
        {props.stack}
      </p>
      <div className="flex flex-col justify-center">
        <img className="rounded-t-md" src={props.img} alt="" />
        <div className="rounded-b-md bg-gray-950 p-4 flex flex-col"></div>
      </div>
    </div>
  );
}
