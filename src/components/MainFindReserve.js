import React, { useRef, useState } from "react";
import Cayenne from "../Images/FindBuildImages/Cayenne.png";
import Macan from "../Images/FindBuildImages/Macan.png";
import NineEleven from "../Images/FindBuildImages/NineEleven.png";
import Panamera from "../Images/FindBuildImages/Panamera.png";
import SevenOneEight from "../Images/FindBuildImages/SevenOneEight.png";
import SevenOneEightTwo from "../Images/FindBuildImages/SevenOneEightTwo.png";
// import Cayenne from "../Images/FindBuildImages/Cayenne.png";
// import Macan from "../Images/FindBuildImages/Macan.png";
// import Panamera from "../Images/FindBuildImages/Panamera.png";
// import SevenOneEight from "../Images/FindBuildImages/SevenOneEight.png";
// import SevenOneEightTwo from "../Images/FindBuildImages/SevenOneEightTwo.png";
// import pic from "../Images/FindBuildImages";

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
    <div className="container mt-5 mb-5">
      <div className="slider ">
        <div className="slider-wrapper finder-slider-wrapper" ref={sliderRef}>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Cayenne} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Macan} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={NineEleven} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={Panamera} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={SevenOneEight} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
          <div className="slide">
            <div className=" finder-container">
              <img className="finder-images" src={SevenOneEightTwo} />{" "}
              <div className="finder-subheader"> Find XXXX Models</div>
            </div>
          </div>
        </div>
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
  );
};
export default MainFindReserve;
