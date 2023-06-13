import React from "react";
import LogoPorscheTwo from "../Images/LogoPorscheTwo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section className="header-section">
      <div className="container header-container">
        <img className="logo-porsche" src={LogoPorscheTwo} alt="logoPorsche" />
        <div className="icon-button-div">
          <FontAwesomeIcon
            className="header-icons"
            icon={faUpRightFromSquare}
          />{" "}
          <p className="icon-separator">|</p>{" "}
          <FontAwesomeIcon
            className="header-icons"
            icon={faUpRightFromSquare}
            style={{ color: "blue" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
