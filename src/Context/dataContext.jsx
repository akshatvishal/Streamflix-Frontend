import React, { createContext, useState } from "react";

export const Datacontext = createContext('');

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]); 

  return (
    <Datacontext.Provider value={{ data, setData }}>
      {children}
    </Datacontext.Provider>
  );
};