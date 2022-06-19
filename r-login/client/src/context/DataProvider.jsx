import { createContext, useContext, useEffect, useState } from "react";
import { checkAuthStatusApi } from "../components/helpers/apiCalls";

export const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState();
  // const [user, setUser] = useState({ email: "luisa@gmail.com" });
  const [errors, setErrors] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
     const checkAuthStatus = async () => {
      const result = await checkAuthStatusApi()
       if(!result.error){
        setUser(result)
       }
     }
     checkAuthStatus()
  }, []) 
  


  const sharedData = {
    user, setUser,
    errors, setErrors,
    books, setBooks,
  }; 

  return (
    <DataContext.Provider value={sharedData}>
      {children}
      </DataContext.Provider>
  );
};
