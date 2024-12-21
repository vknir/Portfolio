import "../app/globals.css";
import Blocks from "@/components/Blocks";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-950 h-screen w-screen p-10">
        <div className="w-full h-full flex flex-col justify-between border border-gray-700 bg-slate-900 text-slate-500  rounded-lg">
          <div className="flex border justify-between w-full border-gray-700 border-t-0 border-r-0 border-l-0">
            <div className="flex">
              <Blocks type="text" input='_utkarsh-kumar'/>
              <div className="flex">
                <Blocks type='text' input="_home"/>
                <Blocks type="text" input='_projects'/>
                <Blocks type='text' input="_about-me"/>
              </div>
            </div>
            <Blocks type="text" invert={true} input='_contact-me'/>
          </div>
          {children}
          <div className="flex border-t-gray-700">
            <div>

            </div>
            <div></div>
          </div>
        </div>
      </body>
    </html>
  );
}
