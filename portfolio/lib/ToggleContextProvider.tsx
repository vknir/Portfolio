"use client";
import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextValueType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleContext = createContext<ContextValueType>({
  toggle:false,
  setToggle:()=> false
});

function ToggleContextProvider({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContextProvider, ToggleContext };
