import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState("")


  const sharedData = {
    user,
    setUser,
    errors,
    setErrors, 
  };
  return (
    <DataContext.Provider value={sharedData}>{children}</DataContext.Provider>
  );
};
