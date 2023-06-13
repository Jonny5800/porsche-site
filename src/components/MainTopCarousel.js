import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GT3rs from "../Images/GT3rs.png";
import Taycan from "../Images/Taycan.png";
import Convertible from "../Images/Convertible.png";

const MainTopCarousel = () => {
  return (
    <div className="main-carousel-div">
      <div className="container main-carousel-container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-pics"
              src={Convertible}
              alt="Pic1"
            />
            <Carousel.Caption>
              <h3 className="carousel-car-name">FIrst Car</h3>
              <p className="carousel-car-strapline">
                Car strapline + some deets.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-pics"
              src={Taycan}
              alt="Pic 2"
            />

            <Carousel.Caption>
              <h3 className="carousel-car-name">Second Car</h3>
              <p className="carousel-car-strapline">
                Car strapline + some deets
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-pics"
              src={GT3rs}
              alt="Pic 3"
            />

            <Carousel.Caption>
              <h3 className="carousel-car-name">Third Car</h3>
              <p className="carousel-car-strapline">
                Car strapline + some deets
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MainTopCarousel;
