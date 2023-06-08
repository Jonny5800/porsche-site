import React from "react";
import Card from "react-bootstrap/Card";
import TequipmentOne from "../Images/ShoppingToolsPics/TequipmentOne.jpg";
import FinanceCropped from "../Images/ShoppingToolsPics/FinanceCropped.jpg";
import twoCarsOne from "../Images/ShoppingToolsPics/twoCarsOne.jpg";
import UnderGreyCover from "../Images/ShoppingToolsPics/UnderGreyCover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingTools = () => {
  const cardStyle = {
    width: "18rem",
    padding: "0px",
    flex: 1,
    border: "transparent",
  };
  const iconStyle = {
    paddingRight: "10px",
    color: "red",
  };
  return (
    <div>
      <div className="container shopping-container">
        <h1 className="mb-4">Shopping Tools</h1>
        <div className="shopping-tools-div d-flex">
          <Card style={cardStyle}>
            <Card.Img variant="top" src={twoCarsOne} />
            {/* <Card.Body> */}
            <Card.Title className="main-shopping-card-title">
              <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
              Compare
            </Card.Title>
            {/* </Card.Body> */}
          </Card>

          <Card style={cardStyle}>
            <Card.Img variant="top" src={FinanceCropped} />

            {/* <Card.Body> */}
            <Card.Title className="main-shopping-card-title">
              <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
              Financial Services
            </Card.Title>
            {/* </Card.Body> */}
          </Card>

          <Card style={cardStyle}>
            <Card.Img variant="top" src={UnderGreyCover} />
            {/* <Card.Body> */}
            <Card.Title className="main-shopping-card-title">
              {" "}
              <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
              Porsche Finder
            </Card.Title>
            {/* </Card.Body> */}
          </Card>

          <Card style={cardStyle} id="main-shopping-tequipment-card">
            <Card.Img variant="top" src={TequipmentOne} />
            {/* <Card.Body> */}
            <Card.Title className="main-shopping-card-title">
              {" "}
              <FontAwesomeIcon style={iconStyle} icon={faUpRightFromSquare} />
              Tequipment
            </Card.Title>
            {/* </Card.Body> */}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTools;
