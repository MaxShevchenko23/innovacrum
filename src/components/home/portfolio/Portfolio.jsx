import React from "react";
import Carousel from "./carousel/Carousel";
import { useTranslation } from "react-i18next";

import "./Portfolio.css";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="portfolio">
      <h1>
        {t('portfolio').toUpperCase()}
      </h1>
      <Carousel />
    </div>
  );
};

export default Portfolio;
