import { Github, Instagram, Linkedin, Twitter } from "lucide-react";


interface BlocksPros {
  type: string;
  input: string;
  invert?:boolean
}

export default function Blocks({ type, input , invert}: BlocksPros) {
  if (type === "text") {
    return (
      <button className={`hover:text-white focus:text-white focus:border-b-amber-200 focus:border-b-2 hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 text-xs md:text-lg border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'}`}>
        {input}
      </button>
    );
  }else{
    if( input === 'github')
      return <div className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer h-full flex items-center px-4 md:px-10 border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'}`}><Github/></div>
    else if( input === 'twitter')
      return <div  className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'} h-full `}><Twitter /></div>
    else if( input === 'linkedin')
      return <div className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'} h-full `}><Linkedin/></div>
    else  
      return <div className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-4 md:px-10 border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'} h-full `}><Instagram/></div>  
  }
}
