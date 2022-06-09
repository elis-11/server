import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatusApi } from "../helpers/apiCalls";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const checkAuthStatus = async () => {
      const result = await checkAuthStatusApi();
      if (!result.error) {
        setUser(result);
      }
    };
    checkAuthStatus()
  }, []);

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
