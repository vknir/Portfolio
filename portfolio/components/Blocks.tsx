'use client'
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

interface BlocksPros {
  type: string;
  input: string;
  invert?: boolean;
  autoFocus?: string;
}

export default function Blocks({ type, input, invert, autoFocus }: BlocksPros) {
  const result =
    input == "_utkarsh-kumar" || input == "_find-me:" || input == "_home";

  
  
  if (type === "text") {
    return (
      <Link href={`${result ? "/" : `/${input.substring(1)}`} `}>
        <button
         
          className={` outline-none hover:text-white focus:text-white focus:border-b-amber-200 focus:border-b-2 hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 text-xs md:text-lg border border-y-0 ${
            invert
              ? "border-r-0 border-l-zinc-600"
              : "border-l-0 border-r-zinc-600"
          } `}
        >
          {input}
        </button>
      </Link>
    );
  } else {
    if (input === "github")
      return (
        <a
          target="_blank"
          href="https://github.com/vknir/"
          className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer h-full flex items-center px-4 md:px-10 border border-y-0 ${
            invert
              ? "border-r-0 border-l-zinc-600"
              : "border-l-0 border-r-zinc-600"
          }`}
        >
          <Github />
        </a>
      );
    else if (input === "twitter")
      return (
        <a
          target="_blank"
          href="https://x.com/vkn1r"
          className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${
            invert
              ? "border-r-0 border-l-zinc-600"
              : "border-l-0 border-r-zinc-600"
          } h-full `}
        >
          <Twitter />
        </a>
      );
    else if (input === "linkedin")
      return (
        <a
          target="_blank"
          href="https://www.linkedin.com/in/utkarsh-kumar-55323b24a/"
          className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${
            invert
              ? "border-r-0 border-l-zinc-600"
              : "border-l-0 border-r-zinc-600"
          } h-full `}
        >
          <Linkedin />
        </a>
      );
    else
      return (
        <a
          target="_blank"
          href="https://www.instagram.com/utkarshkumar8437/"
          className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${
            invert
              ? "border-r-0 border-l-zinc-600"
              : "border-l-0 border-r-zinc-600"
          } h-full `}
        >
          <Instagram />
        </a>
      );
  }
}
