import React from "react";
import { useTranslation } from "react-i18next";
import "./Call.css";

const Call = () => {
  const handleScrollToContacts = () => {
    const element = document.getElementById("contacts");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const { t } = useTranslation();
  return (
    <button
      className="call-button"
      onClick={handleScrollToContacts}
      type="button"
    >
      {t("sendMessage")}
    </button>
  );
};

export default Call;
