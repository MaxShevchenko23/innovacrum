import insta from "./insta.svg";
import linkedin from "./linkedin.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";
import "./Contacts.css";

const Contacts = () => {
  const { t } = useTranslation();
  const form = useRef();

  function handleSendMessage(e) {
    e.preventDefault();

    const formData = new FormData(form.current);

    const templateParams = {
      from_name: formData.get("from_name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("email") + `\n` + formData.get("message"),
    };

    emailjs
      .send(
      "service_96793x6",
      "template_awl2txc",
      templateParams,
      'CL2hIrcU2oCzOBJgj'
      )
      .then(
      () => alert("Message sent! I will contact you as soon as possible."),
      (error) => alert("Error: " + error)
      );
  }

  return (
    <div className="contacts-message-container">
      <div class="form-container">
        <form ref={form} onSubmit={handleSendMessage}>
          <h1 className="send-message">{t("sendMessage")}</h1>
          <label for="from_name">Name*</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            placeholder="Enter"
            required
          />

          <label for="surname">Email*</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter"
            required
          />

          <label for="company">Company*</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter"
            required
          />

          <label for="message">Describe your necessity</label>
          <textarea id="message" name="message" placeholder="Enter"></textarea>

          <button type="submit">{t("sendMessage")}</button>
        </form>
      </div>
      <div className="contacts-container">
        <h1 className="contacts-header">{t("contacts")}:</h1>
        <div className="contacts">
          <div className="phone">
            <span>Phone:</span>
            <p>+39 327 743 8698</p>
          </div>
          <div className="email">
            <span>Email:</span>
            <p>shermatte@tuta.io</p>
          </div>
        </div>
      </div>
      <div className="follow-me">
        <h1>{t("followMe")}</h1>
        <a href="https://www.linkedin.com/in/matteo-shermadhi-128752292/" target="_blank"><img src={linkedin} alt="link" /></a>
      </div>
    </div>
  );
};

export default Contacts;
