import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Compare from "../Images/ShoppingToolsPics/Cpmpare.webp";
import Finance from "../Images/ShoppingToolsPics/Finance.jpg";
import Finder from "../Images/ShoppingToolsPics/Finder.jpg";
import Tequipment from "../Images/ShoppingToolsPics/Tequipment.jpg";

const ShoppingTools = () => {
  return (
    <div>
      <div className="container">
        <h1>Shopping Tools</h1>
        <div className="shipping-tools-div d-flex">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Compare} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Finance} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Finder} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Tequipment} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShoppingTools;
