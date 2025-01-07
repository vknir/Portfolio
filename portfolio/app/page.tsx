

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center relative overflow-hidden">
      <div className="h-full flex flex-col py-4 justify-center gap-6 animate-slide-up">
        <div className="flex flex-col gap-2">
          <p className="text-lg text-white">Hello! I am,</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white">Utkarsh Kumar</h1>
          <h2 className="text-2xl md:text-4xl text-indigo-800">
            {">"} a Web Developer <span className="animate-custom-ping ">|</span>
          </h2>
        </div>
        <div className="flex flex-col gap-2"  >
          <p>{'// Welocome to my portfolio'}</p>
          <p>{'// explore all my projects on GitHub'}</p>
        </div>
      </div>

      {/* waves */}
      <div className="absolute h-fit w-full">
        <div className="animate-wavey  bg-wave-1 w-screen h-16 absolute"></div>
        <div className="bg-wave-2  h-16 w-full animate-wavey-r "></div>
      </div>
    </div>
  );
}
