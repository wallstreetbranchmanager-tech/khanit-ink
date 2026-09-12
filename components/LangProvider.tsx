"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LANGS, type Lang } from "@/lib/i18n";

const ids = new Set(LANGS.map((l) => l.id));

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "th",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    const saved = window.localStorage.getItem("ki-lang");
    const next = (q || saved || "th") as Lang;
    if (ids.has(next)) setLangState(next);
  }, []);

  function setLang(l: Lang) {
    if (!ids.has(l)) return;
    setLangState(l);
    window.localStorage.setItem("ki-lang", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : l;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", l);
    window.history.replaceState({}, "", url.toString());
  }

  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}
