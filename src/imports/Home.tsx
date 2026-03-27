import { useEffect, useState } from "react";
import HomeEnglish from '../imports/homeenglish.tsx';
import HomeArabicRTL from "../imports/homearabic.tsx";

type HomeProps = {
  onRequestDemo?: () => void;
  hideHeader?: boolean;
};

export default function Home(props: HomeProps) {
  const [lang, setLang] = useState<"en" | "ar">(() => {
    return (localStorage.getItem("app_lang") as "en" | "ar") || "en";
  });

  useEffect(() => {
    const handleGlobalLangChange = () => {
      setLang((localStorage.getItem("app_lang") as "en" | "ar") || "en");
    };

    window.addEventListener("languageChange", handleGlobalLangChange);
    return () => {
      window.removeEventListener("languageChange", handleGlobalLangChange);
    };
  }, []);

  useEffect(() => {
    if (lang === "ar") {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.body.dir = "rtl";
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      document.body.dir = "ltr";
      document.body.style.fontFamily = "";
    }
  }, [lang]);

  return lang === "ar" ? <HomeArabicRTL {...props} /> : <HomeEnglish {...props} />;
}