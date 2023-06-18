import React from "react";
import { Helmet } from "react-helmet";
// import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const MainFooterLinks = ({ makeDay, makeNight }) => {
  let mobileView;
  // const [mobileView, setMobileView] = useState(false);
  // setMobileView(false);

  return (
    // <div className="container-find-shop-discover  ">
    <div
      className={`container-find-shop-discover ${
        makeNight ? "night-mode" : ""
      }`}
    >
      <Helmet>
        <script
          src="https://kit.fontawesome.com/a5e402e3b2.js"
          crossorigin="anonymous"
        />
      </Helmet>
      <div className="main-footer-links-div mt-5 mb-3">
        {mobileView ? (
          <h1>This is mobile view</h1>
        ) : (
          <div className="main-footer-normal-view-div ">
            <h1>This is only to show in normal view, not mobile</h1>

            <div className="container-find-shop-discover main-footer-div ">
              <Row className="main-footer-row " md={4}>
                <Col className="footer-cols" xs={6}>
                  <ul>
                    <h4>Build & Find</h4>
                    <li>
                      <a href="#">Build your Porsche</a>
                    </li>
                    <li>
                      <a href="#">Compare Models</a>
                    </li>
                    <li>
                      <a href="#">Find a Porsche</a>
                    </li>
                    <li>
                      <a href="#">Find a Porsche Centre</a>
                    </li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  <ul>
                    <h4> Online Services</h4>
                    <li>
                      <a href="#">Porsche Financial Services</a>
                    </li>
                    <li>
                      <a href="#">Sign up for News</a>
                    </li>
                    <li>
                      <a href="#">Porsche Recall Search</a>
                    </li>
                    <li>
                      <a href="#">Porsche Insurance</a>
                    </li>
                    <li>
                      <a href="#">Porsche Online Shop</a>
                    </li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  <ul>
                    <h4>Behind the scenes</h4>
                    <li>
                      <a href="#">Passion Motorsports</a>
                    </li>
                    <li>
                      <a href="#">Porsche Experience</a>
                    </li>
                    <li>
                      <a href="#">Porsche Classic</a>
                    </li>
                    <li>
                      <a href="#">Visit Porsche Museum</a>
                    </li>
                  </ul>
                </Col>
                <Col className="footer-cols">
                  <ul>
                    <h4>Porsche Company</h4>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                    <li>
                      <a href="#">At a Glance</a>
                    </li>
                    <li>
                      <a href="#">Responsibility</a>
                    </li>
                    <li>
                      <a href="#">Jobs & Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact & Information</a>
                    </li>
                    <li>
                      <a href="#">Christophorus - The Porsche Magazine</a>
                    </li>
                  </ul>

                  <div className="share-page">
                    <div className="share-page-icon-and-title">
                      <i className="fa-solid fa-share-nodes fa-lg"></i> Share
                      Page
                    </div>
                    <div className="drop">
                      <div className="drop-top">
                        <div className="drops facebook">
                          <i className="fa-brands fa-square-facebook facebook fa-2xl"></i>
                        </div>
                        <div className="drops twitter">
                          <i className="fa-brands fa-square-twitter fa-2xl twitter"></i>
                        </div>
                        <div className="drops instagram">
                          <i className="fa-brands fa-square-instagram fa-2xl instagram"></i>
                        </div>
                        <div className="drops linkedin">
                          <i className="fa-brands fa-linkedin fa-2xl linkedin"></i>
                        </div>
                      </div>
                      <div className="connect-div">
                        <p className="connect-with-porsche">
                          Connect with Porsche
                        </p>
                        <div className="connect">
                          <div className="connect-icons">
                            <i className="fa-brands fa-square-facebook fa-2xl facebook"></i>{" "}
                          </div>
                          <div className="connect-icons">
                            <i className="fa-brands fa-square-twitter fa-2xl twitter"></i>{" "}
                          </div>
                          <div className="connect-icons">
                            <i className="fa-brands fa-square-instagram fa-2xl instagram"></i>{" "}
                          </div>
                          <div className="connect-icons"> </div>
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
