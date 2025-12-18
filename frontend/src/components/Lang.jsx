import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Lang = ({ en, te, as: Comp = "span", className }) => {
  const { lang } = useLanguage();
  const content = lang === "te" ? te : en;

  // If one language is missing, fall back safely
  const final = content ?? en ?? te ?? null;

  if (lang === "te") {
    return (
      <Comp lang="te" className={className}>
        {final}
      </Comp>
    );
  }

  return (
    <Comp lang="en" className={className}>
      {final}
    </Comp>
  );
};
