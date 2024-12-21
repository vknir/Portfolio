interface BlocksPros {
  type: string;
  input: string;
  invert?:boolean
}

export default function Blocks({ type, input , invert}: BlocksPros) {
  if (type === "text") {
    return (
      <p className={`hover:text-white hover:bg-slate-800 hover:cursor-pointer py-2 px-10 border border-y-0 ${invert ? 'border-r-0 border-l-zinc-600' : 'border-l-0 border-r-zinc-600'}`}>
        {input}
      </p>
    );
  }else{
    return <img src='../'></img>
  }
}
