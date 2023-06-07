import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DiscoverB from "../Images/DiscoverImages/DiscoverB.png";
import DiscoverCayenneBig from "../Images/DiscoverImages/DiscoverCayenneBig.jpeg";
import DiscoverPhones from "../Images/DiscoverImages/DiscoverPhones.jpg";
import DiscoverDSmall from "../Images/DiscoverImages/DiscoverDSmall.jpg";

const Discover = () => {
  return (
    <div className="container">
      <h1 className="mb-3 mt-5">Discover</h1>
      <div className="discover-main-page-div">
        <Card className="main-discover-cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={DiscoverCayenneBig} />
          <Card.Body>
            <div className="main-discover-text-and-icon-div d-flex">
              <div>*icon * </div>
              <Card.Text className="main-discover-text">
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={DiscoverB} />
          <Card.Body>
            <div className="main-discover-text-and-icon-div d-flex">
              <div>*icon * </div>
              <Card.Text className="main-discover-text">
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={DiscoverPhones} />
          <Card.Body>
            <div className="main-discover-text-and-icon-div d-flex">
              <div>*icon * </div>
              <Card.Text className="main-discover-text">
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={DiscoverDSmall} />
          <Card.Body>
            <div className="main-discover-text-and-icon-div d-flex">
              <div>*icon * </div>
              <Card.Text className="main-discover-text">
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Discover;
