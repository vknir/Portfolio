"use client";
import "../app/globals.css";
import Blocks from "@/components/Blocks";
import useScreenSize from "@/hooks/useScreenSize";
import Bars3 from "@/components/Bars3";
import Link from "next/link";
import { ToggleContextProvider } from "@/lib/ToggleContextProvider";
import NavCard from "@/components/NavCard";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const screen = useScreenSize("(min-width:1024px)");

  return (
    <Suspense>
      <html lang="en">
        <body className="bg-gray-950 h-screen w-screen p-5 md:p-10">
          <div className="relative  w-full h-full flex flex-col justify-between border border-gray-700 bg-slate-900 text-slate-500 rounded-lg m-auto">
            <div className="flex border  justify-between w-full border-gray-700 border-t-0 border-r-0 border-l-0">
              {screen ? (
                <>
                  <div className="flex">
                    <div
                      className={`w-72 hover:bg-slate-800  py-2 px-10 border border-y-0  border-l-0 border-r-zinc-600`}
                    >
                      <Link
                        className="hover:cursor-pointer hover:text-white"
                        href={"/"}
                      >
                        _utkarsh-kumar
                      </Link>
                    </div>

                    <div className="flex">
                      <Blocks type="text" input="_home" />
                      <Blocks type="text" input="_projects" />
                      <Blocks type="text" input="_about-me" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <ToggleContextProvider>
                    <div className="flex w-full items-center justify-between p-4">
                      <p>_utkarsh-kumar</p>
                      <div>
                        <Bars3 />
                      </div>
                    </div>
                    {!screen && <NavCard />}
                  </ToggleContextProvider>
                </>
              )}
            </div>

            {children}
            <div className="flex justify-between border border-x-0 border-b-0 border-t-gray-700">
              <div className="flex items-center">
                <p className="hover:text-white hover:bg-slate-800 hover:cursor-pointer h-full flex items-center px-4 md:px-10 border border-y-0 border-r-gray-700 border-l-0">
                  _find-me:
                </p>
                <Blocks type="img" input="linkedin" />
                <Blocks type="img" input="twitter" />
                {screen ? <Blocks type="img" input="instagram" /> : <></>}
              </div>
              <div className="flex items-center">
                <Blocks type="img" input="github" invert={true} />
              </div>
            </div>
          </div>
        </body>
      </html>
    </Suspense>
  );
}
