import {textsData} from "./../assets/data";
const { createContext, useState, useEffect } = require("react");

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [texts, setTexts] = useState({"txts":textsData.en,"language":"en"});

  return (
    <LanguageContext.Provider value={{ texts, setTexts }}>
      {children}
    </LanguageContext.Provider>
  );
};
