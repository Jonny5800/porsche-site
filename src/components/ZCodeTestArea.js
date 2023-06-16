import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import TequipmentOne from "../Images/ShoppingToolsPics/TequipmentOne.jpg";
import FinanceCropped from "../Images/ShoppingToolsPics/FinanceCropped.jpg";
import twoCarsOne from "../Images/ShoppingToolsPics/twoCarsOne.jpg";
import UnderGreyCover from "../Images/ShoppingToolsPics/UnderGreyCover.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
const ZCodeTestArea = () => {
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
  const imageStyle = {
    height: "100%",
    borderRadius: "0px",
  };
  return (
    <div>
      <div className="shopping-container container-find-shop-discover">
        <h1 className="mb-4">Shopping Tools</h1>
        <div className="shopping-tools-div">
          <Row>
            <Col md={6} lg={3}>
              <Card style={cardStyle}>
                {" "}
                <Card style={cardStyle}>
                  <Card.Img variant="top" style={imageStyle} src={twoCarsOne} />

                  <Card.Title className="main-shopping-card-title">
                    <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
                    Compare
                  </Card.Title>
                </Card>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card style={cardStyle}>
                {" "}
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    style={imageStyle}
                    src={FinanceCropped}
                  />

                  <Card.Title className="main-shopping-card-title">
                    <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
                    Financial Services
                  </Card.Title>
                </Card>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={3}>
              <Card style={cardStyle}>
                {" "}
                <Card style={cardStyle}>
                  <Card.Img
                    variant="top"
                    style={imageStyle}
                    src={UnderGreyCover}
                  />

                  <Card.Title className="main-shopping-card-title">
                    {" "}
                    <FontAwesomeIcon style={iconStyle} icon={faAngleRight} />
                    Porsche Finder
                  </Card.Title>
                </Card>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card style={cardStyle} id="main-shopping-tequipment-card">
                <Card style={cardStyle} id="main-shopping-tequipment-card">
                  <Card.Img
                    variant="top"
                    style={imageStyle}
                    src={TequipmentOne}
                  />

                  <Card.Title className="main-shopping-card-title">
                    {" "}
                    <FontAwesomeIcon
                      style={iconStyle}
                      icon={faUpRightFromSquare}
                    />
                    Tequipment
                  </Card.Title>
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ZCodeTestArea;
