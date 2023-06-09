import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainFooterLinks = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="container">
      <div className="main-footer-links-div mt-5 mb-3">
        {mobileView ? (
          <h1>This is mobile view</h1>
        ) : (
          <div className="main-footer-normal-view-div ">
            <h1>This is normal view, not mobile</h1>

            <div className="container">
              <Row md={4}>
                <Col xs={6}>
                  <ul>
                    <h4>Build & FInd</h4>
                    <li>Build your Porsche</li>
                    <li>Compare Models</li>
                    <li>Find a Porsche</li>
                    <li>Find a Porsche Centre</li>
                  </ul>
                </Col>
                <Col>
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
                <Col>
                  {" "}
                  <ul>
                    <h4>Behind the scenes</h4>
                    <li>Passion Motorsports</li>
                    <li>Porsche Experience</li>
                    <li>Porsche Classic</li>
                    <li>Visit Porsche Museum</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    <h4>Porsche Company</h4>
                    <li>Latest News</li>
                    <li>At a Glance</li>
                    <li>Responsibility</li>
                    <li>Jobs & Careers</li>
                    <li>Contact & Information</li>
                    <li>Christophorus - The Porsche Magazine</li>
                  </ul>
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
