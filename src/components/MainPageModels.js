import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Models718Two from "../Images/Models718Two.webp";
import Models911 from "../Images/Models911.jpg";
import ModelsPanamera from "../Images/ModelsPanamera.jpg";
import ModelsMacan from "../Images/ModelsMacan.jpg";
import ModelsCayenne from "../Images/ModelsCayenne.jpg";
import ModelTaycan from "../Images/ModelTaycan.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const MainPageModels = () => {
  const cardStyle = {
    flex: 1,
    paddingBottom: 0,
    border: "transparent",
  };

  const imageStyle = {
    objectFit: "cover",
    height: "100%",
    borderRadius: "0px",
  };

  return (
    <div className="models-main-div mb-5">
      <div className="container-find-shop-discover mt-5 mb-4">
        <div className="model-section-heading ">
          {" "}
          <h1>Models</h1>{" "}
        </div>
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
              <span className="model-name-span"> 718 </span>{" "}
            </Card.Title>
            <Card.Text className="model-price">
              <span className=""> from £51,800.00 incl. VAT </span>
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
            src={Models911}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <span className="model-name-span">911</span>
            </Card.Title>
            <Card.Text className="model-price">
              <span className="">from £97,000.00 incl. VAT</span>
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
            src={ModelTaycan}
            style={imageStyle}
          />
          <Card.Body style={{ padding: "0px" }}>
            <Card.Title className="model-name ">
              <span className="model-name-span">Taycan</span>
            </Card.Title>
            <Card.Text className="model-price">
              <span className="model-price-span">
                from £79,200.00 incl. VAT
              </span>
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
              <span className="model-name-span">Panamera</span>
            </Card.Title>
            <Card.Text className="model-price">
              <span className="model-price-span">
                from £72,900.00 incl. VAT
              </span>
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
              <span className="model-name-span">Macan</span>
            </Card.Title>
            <Card.Text className="model-price">
              <span className="model-price-span">
                from £53,400.00 incl. VAT
              </span>
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
              <span className="model-name-span">Cayenne</span>
            </Card.Title>
            <Card.Text className="model-price">
              <span className="model-price-span">
                from £67,400.00 incl. VAT
              </span>
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
