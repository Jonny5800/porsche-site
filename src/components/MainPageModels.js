import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Models718 from "../Images/Models718.jpg";
import Models718Two from "../Images/Models718Two.webp";
import Models911 from "../Images/Models911.jpg";
import ModelsTaycan from "../Images/ModelsTaycan.jpg";
import ModelsPanamera from "../Images/ModelsPanamera.jpg";
import ModelsMacan from "../Images/ModelsMacan.jpg";
import ModelsCayenne from "../Images/ModelsCayenne.jpg";
import ModelTaycan from "../Images/ModelTaycan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const MainPageModels = () => {
  const cardStyle = {
    // width: "18rem",
    flex: 1,
    paddingBottom: 0,
    border: "transparent",
    borderRadius: "0px",
  };

  const imageStyle = {
    objectFit: "cover",
    height: "100%",
  };

  return (
    <div className="models-main-div mb-5">
      <div className="container">
        <h1>Models</h1>
      </div>

      <div className="models-container-box">
        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={Models718Two}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              {" "}
              <h3>
                <h3>Model Name</h3>
              </h3>{" "}
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>
            {/* <div className="model-button-div"> */}
            <Button className="model-left-button" variant="primary">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                style={{ paddingRight: "7px" }}
              />
              Build your own
            </Button>
            <Button className="model-right-button" variant="primary">
              All Models
            </Button>
            {/* </div> */}
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={Models911}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <h3>Model Name</h3>
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>
            {/* <div className="model-button-div"> */}
            <Button className="model-left-button" variant="primary">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                style={{ paddingRight: "7px" }}
              />
              Build your own
            </Button>
            <Button className="model-right-button" variant="primary">
              All Models
            </Button>
            {/* </div> */}
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={ModelTaycan}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <h3>Model Name</h3>
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>

            <Button className="model-left-button" variant="primary">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                style={{ paddingRight: "7px" }}
              />
              Build your own
            </Button>
            <Button className="model-right-button" variant="primary">
              All Models
            </Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={ModelsPanamera}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <h3>Model Name</h3>
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
                {" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{ paddingRight: "7px" }}
                />
                Build your own
              </Button>
              <Button className="model-right-button" variant="primary">
                All Models
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={ModelsMacan}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <h3>Model Name</h3>
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
                {" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{ paddingRight: "7px" }}
                />
                Build your own
              </Button>
              <Button className="model-right-button" variant="primary">
                All Models
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={ModelsCayenne}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <h3>Model Name</h3>
            </Card.Title>
            <Card.Text className="model-price">
              <h5>from £xx,xxx incl. VAT</h5>
            </Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
                {" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{ paddingRight: "7px" }}
                />
                Build your own
              </Button>
              <Button className="model-right-button" variant="primary">
                All Models
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default MainPageModels;
