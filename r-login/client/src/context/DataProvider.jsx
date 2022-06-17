import { createContext, useState } from "react";

const DataContext = createContext();

export const Dataprovider = ({ children }) => {
  const [user, setUser] = useState();

  const sharedData = {
    user,
    setUser,
  };

  return (
    <DataContext.Provider value={sharedData}>
      {children}
      </DataContext.Provider>
  );
};
