import React from "react";
import Carousel from "./carousel/Carousel";
import { useTranslation } from "react-i18next";

import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="portfolio">
      <h1>
        <span>“</span>{t('portfolio').toUpperCase()}<span>”</span>
      </h1>
      <Carousel />
    </div>
  );
};

export default Portfolio;
