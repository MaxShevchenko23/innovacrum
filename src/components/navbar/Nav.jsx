import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Switcher from "./language-switcher/Switcher";
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const currentUrl = location.pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    if (["about", "portfolio", "contacts"].includes(sectionId) && currentUrl !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setIsOpen(false);
  };

  return (
    <nav>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to='/'>
            <img src="/home.svg" alt="home" />
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            
            onClick={() => handleScrollToSection("about")}
          >
            {t("about")}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="manifesto"
            onClick={() => handleScrollToSection()}
          >
            {t("Manifesto")}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            onClick={() => handleScrollToSection("portfolio")}
          >
            {t("portfolio")}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            onClick={() => handleScrollToSection("contacts")}
          >
            {t("contacts")}
          </NavLink>
        </li>

        <li>
          <Switcher />
        </li>
      </ul>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
