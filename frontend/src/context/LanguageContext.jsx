import React from "react";

const STORAGE_KEY = "sbts_lang";

const LanguageContext = React.createContext({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = React.useState("en");

  const applyToDocument = React.useCallback((next) => {
    try {
      document.documentElement.setAttribute("data-lang", next);
    } catch {
      // ignore
    }
  }, []);

  // Init from storage (or English default)
  React.useEffect(() => {
    let initial = "en";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "te") initial = saved;
    } catch {
      // ignore
    }

    setLangState(initial);
    applyToDocument(initial);
  }, [applyToDocument]);

  const setLang = React.useCallback(
    (next) => {
      if (next !== "en" && next !== "te") return;
      setLangState(next);
      applyToDocument(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
    },
    [applyToDocument],
  );

  const toggleLang = React.useCallback(() => {
    setLang(lang === "te" ? "en" : "te");
  }, [lang, setLang]);

  const value = React.useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);
