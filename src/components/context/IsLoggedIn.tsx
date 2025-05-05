import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsLoggedInCtx = createContext<AuthContextType | undefined>(undefined);

export const IsLoggedInProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <IsLoggedInCtx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInCtx.Provider>
  );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(IsLoggedInCtx);
    if (!context) throw new Error("useAuth must be used within IsLoggedInProvider");
    return context;  
}