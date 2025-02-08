import React from "react";
import { useRef } from "react";
import Bio from "./bio/Bio";
import Call from "../call-button/Call";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";

import "./Home.css";

const Home = () => {



  const sectionRefs = {
    about: useRef(null),
    portfolio: useRef(null),
    contacts: useRef(null),
  };


  return (
    <div id="main-container">
      <section id="main">
        <div className="pic">
          <img src="matteo.png" alt="profile" />
        </div>
        <div className="bio">
          <Bio />
          <Call />
        </div>
      </section>
      <section ref={sectionRefs.about} id="about">
        <About />
      </section>
      <section ref={sectionRefs.portfolio} id="portfolio">
        <Portfolio />
      </section>
      <section ref={sectionRefs.contacts} id="contacts">
        <Contacts />
      </section>
    </div>
  );
};

export default Home;
