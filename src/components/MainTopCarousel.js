import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import GT1 from "../Images/GT1.jpg";
import GT2 from "../Images/GT2.jpg";
import GT3rs from "../Images/GT3rs.png";
import GT2Banner from "../Images/GT2Banner.jpg";
import BannerCarrera from "../Images/BannerCarrera.png";
import Taycan from "../Images/Taycan.png";
import Convertible from "../Images/Convertible.png";

const MainTopCarousel = () => {
  return (
    <div>
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
            <p className="carousel-car-strapline">Car strapline + some deets</p>
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
            <p className="carousel-car-strapline">Car strapline + some deets</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainTopCarousel;
