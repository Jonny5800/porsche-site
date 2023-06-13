import React from "react";
// import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const MainFooterLinks = () => {
  let mobileView;
  // const [mobileView, setMobileView] = useState(false);
  // setMobileView(false);

  return (
    <div className="container  ">
      <div className="main-footer-links-div mt-5 mb-3">
        {mobileView ? (
          <h1>This is mobile view</h1>
        ) : (
          <div className="main-footer-normal-view-div ">
            <h1>This is only to show in normal view, not mobile</h1>

            <div className="container main-footer-div ">
              <Row className="main-footer-row" md={4}>
                <Col className="footer-cols" xs={6}>
                  <ul>
                    <h4>Build & Find</h4>
                    <li>Build your Porsche</li>
                    <li>Compare Models</li>
                    <li>Find a Porsche</li>
                    <li>Find a Porsche Centre</li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  {" "}
                  <ul>
                    <h4>Online Services</h4>
                    <li>Porsche Financial Services</li>
                    <li>Sign up for News</li>
                    <li>Porsche Recall Search</li>
                    <li>Porsche Insurance</li>
                    <li>Porsche Online Shop</li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  {" "}
                  <ul>
                    <h4>Behind the scenes</h4>
                    <li>Passion Motorsports</li>
                    <li>Porsche Experience</li>
                    <li>Porsche Classic</li>
                    <li>Visit Porsche Museum</li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  <ul>
                    <h4>Porsche Company</h4>
                    <li>Latest News</li>
                    <li>At a Glance</li>
                    <li>Responsibility</li>
                    <li>Jobs & Careers</li>
                    <li>Contact & Information</li>
                    <li>Christophorus - The Porsche Magazine</li>
                  </ul>

                  <div className="share-page">
                    <div className="share-page-icon-and-title">
                      {" "}
                      <FontAwesomeIcon
                        className="drop-icons"
                        icon={faUpRightFromSquare}
                      />
                      Share Page
                    </div>
                    <div className="drop">
                      <div className="drop-top">
                        <div className="drops facebook">
                          <FontAwesomeIcon
                            className="drop-icons"
                            icon={faUpRightFromSquare}
                          />
                        </div>
                        <div className="drops twitter">
                          <FontAwesomeIcon
                            className="drop-icons"
                            icon={faUpRightFromSquare}
                          />
                        </div>
                        <div className="drops instagram">
                          <FontAwesomeIcon
                            className="drop-icons"
                            icon={faUpRightFromSquare}
                          />
                        </div>
                        <div className="drops linkedin">
                          <FontAwesomeIcon
                            className="drop-icons"
                            icon={faUpRightFromSquare}
                          />
                        </div>
                      </div>
                      <div className="connect-div">
                        <p className="connect-with-porsche">
                          Connect with Porsche <strong>icons to add</strong>
                        </p>
                        <div className="connect">
                          <div className="connect-icons">
                            {" "}
                            <FontAwesomeIcon
                              className="drop-icons"
                              icon={faUpRightFromSquare}
                            />{" "}
                          </div>
                          <div className="connect-icons">
                            {" "}
                            <FontAwesomeIcon
                              className="drop-icons"
                              icon={faUpRightFromSquare}
                            />{" "}
                          </div>
                          <div className="connect-icons">
                            {" "}
                            <FontAwesomeIcon
                              className="drop-icons"
                              icon={faUpRightFromSquare}
                            />{" "}
                          </div>
                          <div className="connect-icons">
                            {" "}
                            <FontAwesomeIcon
                              className="drop-icons"
                              icon={faUpRightFromSquare}
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainFooterLinks;
