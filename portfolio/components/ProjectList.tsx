import Image from "next/image";
import right from "../assets/svg/chevron-right.svg";

export default function ProjectList({ title }: { title: string }) {
  return (
    <div className="hover:text-white hover:cursor-pointer">
      {" "}
      <p className="hover:text-white">
        <Image className="inline" alt="" src={right}></Image>
        {title}
      </p>
    </div>
  );
}
