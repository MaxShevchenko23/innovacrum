import { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Switcher.css";


const Switcher = () => {
  const { i18n } = useTranslation();
  const [isItalian, setIsItalian] = useState(i18n.language === "it");

  const toggleLanguage = () => {
    const newLang = isItalian ? "en" : "it";
    i18n.changeLanguage(newLang);
    setIsItalian(!isItalian);
  };

  return (
    <div className="toggle-container">
      <span className="label">Eng</span>
      <div className={`toggle ${isItalian ? "active" : ""}`} onClick={toggleLanguage}>
        <div className="toggle-thumb"></div>
      </div>
      <span className="label">Ital</span>
    </div>
  );
};

export default Switcher;
