import React from "react";
import { useTranslation } from "react-i18next";

import "./Manifesto.css";
import { NavLink } from "react-router-dom";

const Manifesto = () => {
  const { t } = useTranslation();

  return (
    <div className="manifesto-container">
        <NavLink to={'/'}><img src="home.svg" /></NavLink>
      <h1>{t("manifesto")}</h1>
      <h3>{t("manifestoBriefDesc")}</h3>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle1").toUpperCase()}</h2>
        <p>{t("manifestoDesc1")}</p>
      </div>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle2").toUpperCase()}</h2>
        <p>{t("manifestoDesc2")}</p>
      </div>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle3").toUpperCase()}</h2>
        <p>{t("manifestoDesc3")}</p>
      </div>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle4").toUpperCase()}</h2>
        <p>{t("manifestoDesc4")}</p>
      </div>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle5").toUpperCase()}</h2>
        <p>{t("manifestoDesc5")}</p>
      </div>
      <div className="manifesto-section">
        <h2>{t("manifestoTitle6").toUpperCase()}</h2>
        <p>{t("manifestoDesc6")}</p>
      </div>

      <div className="manifesto-section">
        <h2>{t("manifestoTitle7").toUpperCase()}</h2>
        <p>{t("manifestoDesc7")}</p>
      </div>

      <div className="manifesto-section">
        <h2>{t("manifestoTitle8").toUpperCase()}</h2>
        <p>{t("manifestoDesc8")}</p>
      </div>

      <div className="manifesto-section">
        <h2>{t("manifestoTitle9").toUpperCase()}</h2>
        <p>{t("manifestoDesc9")}</p>
      </div>

      <div className="manifesto-section">
        <h2>{t("manifestoTitle10").toUpperCase()}</h2>
        <p>{t("manifestoDesc10")}</p>
      </div>

      <div className="conclusion">
        <p>{t('conclusion')}</p>
      </div>
    </div>
  );
};

export default Manifesto;
