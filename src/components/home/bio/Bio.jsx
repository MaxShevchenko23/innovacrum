import React from "react";
import "./Bio.css";
import { useTranslation } from "react-i18next";

const Bio = () => {

  const { t } = useTranslation();

  return (
    <>
      <h1>
        {/* HI I<span>'</span>M MATTEO <span>.</span> */}
        {t('hi')}
      </h1>
      <h3 className="pm">{t('projectManager')}</h3>
      <p>{t('bio')}
      </p>
    </>
  );
};

export default Bio;
