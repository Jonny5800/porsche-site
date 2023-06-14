import React, { useRef, useState } from "react";
import GT3rs from "../Images/GT3rs.png";
import Taycan from "../Images/Taycan.png";
import Convertible from "../Images/Convertible.png";

const MainFindReserve = () => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    if (slideIndex < 3) {
      setSlideIndex((prevIndex) => prevIndex + 1);
      sliderRef.current.style.transform = `translateX(-${
        (slideIndex + 1) * 33.33
      }%)`;
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prevIndex) => prevIndex - 1);
      sliderRef.current.style.transform = `translateX(-${
        (slideIndex - 1) * 33.33
      }%)`;
    }
  };
  return (
    <div className="container-find-shop-discover mt-5 mb-5">
      <div className="slider ">
        <div className="slider-wrapper finder-slider-wrapper" ref={sliderRef}>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={GT3rs} />{" "}
              <div className="finder-subheader"> Find 718 Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Taycan} />{" "}
              <div className="finder-subheader"> Find 911 Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Convertible} />{" "}
              <div className="finder-subheader"> Find Taycan Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={GT3rs} />{" "}
              <div className="finder-subheader"> Find Panamera Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Taycan} />{" "}
              <div className="finder-subheader"> Find Macan Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Convertible} />{" "}
              <div className="finder-subheader"> Find Cayenne Models</div>
            </div>
          </div>
        </div>
        <div className="finder-button-div">
          <button
            className="prev-button finder-prev-button"
            onClick={handlePrevSlide}
            disabled={slideIndex === 0}
          >
            Previous
          </button>
          <button
            className="next-button finder-next-button"
            onClick={handleNextSlide}
            disabled={slideIndex === 3}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainFindReserve;
