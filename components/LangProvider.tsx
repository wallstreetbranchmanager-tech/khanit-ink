"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "th",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");
  useEffect(() => {
    const saved = window.localStorage.getItem("ki-lang") as Lang | null;
    if (saved) setLangState(saved);
  }, []);
  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("ki-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : l;
  }
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
