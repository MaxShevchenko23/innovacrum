import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";

import "./About.css";

const About = () => {
  const { t } = useTranslation();

  let sliderRef = useRef(null);

  const previous = () => {
    sliderRef.current.slickPrev();
    console.log('prev');
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="about-container">
      <Slider ref={sliderRef} {...settings} className="about-slider">
        <div className="aboutMe slide">
          <h2 className="about-header">{t("about").toUpperCase()}</h2>
          <div className="content justify">{t("aboutMe")}</div>
        </div>
        <div className="experience slide">
          <h2 className="about-header">{t("experience").toUpperCase()}</h2>
          <div className="content justify">
            <ul className="about-list">
              <li>{t("experienceInfo1")}</li>
              <li>{t("experienceInfo2")}</li>
              <li>{t("experienceInfo3")}</li>
              <li>{t("experienceInfo4")}</li>
              <li>{t("experienceInfo5")}</li>
              <li>{t("experienceInfo6")}</li>
              <li>{t("experienceInfo7")}</li>
            </ul>
          </div>
        </div>
        <div className="softSkills slide">
          <h2 className="about-header">{t("softSkills").toUpperCase()}</h2>
          <div className="content justify">{t("softSkillsInfo")}</div>
        </div>
        <div className="hardSkills slide">
          <h2 className="about-header">{t("hardSkills").toUpperCase()}</h2>
          <div className="content">
            <ul className="about-list hard-skills">
              <li className="hard-skill align-left">{t("hardSkillsInfo1")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo2")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo3")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo4")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo5")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo6")}</li>
              <li className="hard-skill align-left">{t("hardSkillsInfo7")}</li>
            </ul>
          </div>
        </div>
      </Slider>

      <div className="control-arrows-container">
        <img src="./arrowPrev.svg" onClick={previous} alt="Previous" />
        <img src="./arrowNext.svg" onClick={next} alt="Next" />
      </div>
    </div>
  );
};

export default About;
