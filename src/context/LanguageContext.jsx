import { createContext, useState } from "react";
import en from "../locales/en";
import ta from "../locales/ta";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {

  const [language, setLanguage] = useState("en");

  const translations = {
    en,
    ta,
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}