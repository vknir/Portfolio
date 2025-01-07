"use client";
import {

  createContext,

  Dispatch,
  SetStateAction,
  useState,
} from "react";

type Prop = {
  children: React.ReactNode;
};

type InfoType={ // info is state variable 
  icon:string,
  topic:string
}

//Type of context created 
type InfoDisplayType = { 
  info: InfoType
  setInfo: Dispatch<SetStateAction<InfoType>>;
};

const InfoDisplayContext = createContext<InfoDisplayType>({
  info: {
    icon:'profession',
    topic:'skills'
  },
  setInfo : ()=>{}
});

function InfoDisplayContextProvider({ children }: Prop) {
  const initialValue= {
    icon:'profession',
    topic:'skills'
  }
  const [info, setInfo] = useState(initialValue);
  return (
    <InfoDisplayContext.Provider value={{ info, setInfo }}>
      {children}
    </InfoDisplayContext.Provider>
  );
}

export {InfoDisplayContext, InfoDisplayContextProvider}