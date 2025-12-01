const { createContext, useState} = require("react");

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [current, setCurrent] = useState("home");

  return (
    <PageContext.Provider value={{ current, setCurrent }}>
      {children}
    </PageContext.Provider>
  );
};