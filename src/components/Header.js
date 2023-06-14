import React from "react";
import LogoPorscheTwo from "../Images/LogoPorscheTwo.jpg";
import { Helmet } from "react-helmet";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
          <i class="fa-solid fa-sun fa-xl header-icons "></i>
          <p className="icon-separator">|</p>{" "}
          <i class="fa-regular fa-moon fa-xl header-icons"></i>
        </div>
      </div>
    </section>
  );
};

export default Header;
