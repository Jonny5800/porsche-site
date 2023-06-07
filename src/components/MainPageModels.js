import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Models718 from "../Images/Models718.jpg";
import Models911 from "../Images/Models911.jpg";
import ModelsTaycan from "../Images/ModelsTaycan.jpg";
import ModelsPanamera from "../Images/ModelsPanamera.jpg";
import ModelsMacan from "../Images/ModelsMacan.jpg";
import ModelsCayenne from "../Images/ModelsCayenne.jpg";

const MainPageModels = () => {
  const cardStyle = {
    width: "18rem",
  };

  const imageStyle = {
    // objectFit: "cover",
    // height: "100%",
  };
  return (
    <div className="models-main-div">
      <div className="container">
        <h1>Models</h1>
      </div>{" "}
      {/* Top row */}
      <div className="models-top-row ">
        <Card style={cardStyle}>
          <Card.Img
            className="model-image"
            variant="top"
            src={Models718}
            style={imageStyle}
          />
          <Card.Body>
            <Card.Title className="model-name ">Model Name</Card.Title>
            <Card.Text className="model-price">Price</Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
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
            src={Models911}
            style={imageStyle}
          />
          <Card.Body>
            <Card.Title className="model-name ">Model Name</Card.Title>
            <Card.Text className="model-price">Price</Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
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
            src={ModelsTaycan}
            style={imageStyle}
          />
          <Card.Body>
            <Card.Title className="model-name ">Model Name</Card.Title>
            <Card.Text className="model-price">Price</Card.Text>
            <div className="model-button-div">
              <Button className="model-left-button" variant="primary">
                Build your own
              </Button>
              <Button className="model-right-button" variant="primary">
                All Models
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="models-bottom-row">
        <div className="models-top-row ">
          <Card style={cardStyle}>
            <Card.Img
              className="model-image"
              variant="top"
              src={ModelsPanamera}
              style={imageStyle}
            />
            <Card.Body>
              <Card.Title className="model-name ">Model Name</Card.Title>
              <Card.Text className="model-price">Price</Card.Text>
              <div className="model-button-div">
                <Button className="model-left-button" variant="primary">
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
            <Card.Body>
              <Card.Title className="model-name ">Model Name</Card.Title>
              <Card.Text className="model-price">Price</Card.Text>
              <div className="model-button-div">
                <Button className="model-left-button" variant="primary">
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
            <Card.Body>
              <Card.Title className="model-name ">Model Name</Card.Title>
              <Card.Text className="model-price">Price</Card.Text>
              <div className="model-button-div">
                <Button className="model-left-button" variant="primary">
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
    </div>
  );
};

export default MainPageModels;
