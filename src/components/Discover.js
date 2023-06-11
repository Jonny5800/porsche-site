import Card from "react-bootstrap/Card";
import DiscoveryB from "../Images/DiscoverImages/DiscoveryB.png";
import DiscoverCayenneBig from "../Images/DiscoverImages/DiscoverCayenneBig.jpeg";
import DiscoverPhones from "../Images/DiscoverImages/DiscoverPhones.jpg";
import DiscoverDSmall from "../Images/DiscoverImages/DiscoverDSmall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const Discover = () => {
  const cardStyle = {
    width: "18rem",
    flex: 1,
  };
  const imageStyle = {
    height: "100%",
    borderRadius: "0px",
  };
  return (
    <div className="container">
      <h1 className="mb-3 mt-5">Discover</h1>
      <div className="discover-main-page-div">
        <Card className="main-discover-cards" style={cardStyle}>
          <Card.Img variant="top" style={imageStyle} src={DiscoverCayenneBig} />
          <Card.Body className="discover-main-subheading-border">
            <div className="main-discover-text-and-icon-div d-flex">
              {/* <div>*icon * </div> */}
              <Card.Text className="main-discover-text">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{ paddingRight: "7px" }}
                />
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={cardStyle}>
          <Card.Img variant="top" style={imageStyle} src={DiscoveryB} />
          <Card.Body className="discover-main-subheading-border">
            <div className="main-discover-text-and-icon-div d-flex">
              {/* <div>*icon * </div> */}
              <Card.Text className="main-discover-text">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ paddingRight: "7px" }}
                />
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={cardStyle}>
          <Card.Img variant="top" style={imageStyle} src={DiscoverPhones} />
          <Card.Body className="discover-main-subheading-border">
            <div className="main-discover-text-and-icon-div d-flex">
              {/* <div>*icon * </div> */}
              <Card.Text className="main-discover-text">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ paddingRight: "7px" }}
                />
                Discover image subheading
              </Card.Text>
            </div>
          </Card.Body>
        </Card>

        <Card className="main-discover-cards" style={cardStyle}>
          <Card.Img variant="top" style={imageStyle} src={DiscoverDSmall} />
          <Card.Body className="discover-main-subheading-border">
            <div className="main-discover-text-and-icon-div d-flex">
              {/* <div>*icon * </div> */}
              <Card.Text className="main-discover-text">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  style={{ paddingRight: "7px" }}
                />
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
