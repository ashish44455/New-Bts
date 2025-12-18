import React from "react";

const STORAGE_KEY = "sbts_lang";

const LanguageContext = React.createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = React.useState("en");

  React.useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "te") setLangState(saved);
    } catch {
      // ignore
    }
  }, []);

  const setLang = React.useCallback((next) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const toggleLang = React.useCallback(() => {
    setLang((prev) => (prev === "te" ? "en" : "te"));
  }, [setLang]);

  const value = React.useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
