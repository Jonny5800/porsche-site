import React from "react";
import LogoPorscheTwo from "../Images/LogoPorscheTwo.jpg";
import { Helmet } from "react-helmet";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MainFooterLinks from "./MainFooterLinks";

const Header = () => {
  const [makeDay, setMakeDay] = useState(true);
  const [makeNight, setMakeNight] = useState(false);
  const dayMode = () => {
    setMakeDay(true);
    setMakeNight(false);
    console.log("day mode activated");
  };

  const nightMode = () => {
    setMakeNight(true);
    setMakeDay(false);
    console.log("Night mode activated");
  };
  <MainFooterLinks makeDay={makeDay} makeNight={makeNight} />;
  return (
    <section className="header-section">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/a5e402e3b2.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className="container header-container">
        <img className="logo-porsche" src={LogoPorscheTwo} alt="logoPorsche" />
        <div className="icon-button-div">
          <i
            className="fa-solid fa-sun fa-xl header-icons "
            onClick={dayMode}
          ></i>
          <p className="icon-separator">|</p>{" "}
          <i
            className="fa-regular fa-moon fa-xl header-icons"
            onClick={nightMode}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
