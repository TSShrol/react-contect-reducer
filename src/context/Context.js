import { createContext } from "react";

export const ThemeContext = createContext('light');
export const AuthContext = createContext({
    userName:"", //getter
    setUserName: ()=>null, //setter
    clearUserName:()=>null
});

// export const AuthContext = createContext(null);