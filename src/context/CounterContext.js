import { createContext, useState } from "react";

export const ThemeContext = createContext("light");
export const CounterContext = createContext({
  count: 0, //getter
  decrement: () => null, //setter
  increment: () => null,
  reset: () => null,
});

// export const AuthContext = createContext(null);
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1); 
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  let value = { count, decrement, increment, reset };
  return (
    <CounterContext.Provider value={value}>
       {children}
    </CounterContext.Provider>
  );
};
