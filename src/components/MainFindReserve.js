import ModelTaycan from "../Images/ModelTaycan.jpg";
import React, { useRef, useState } from "react";

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
    <div className="slider">
      <div className="slider-wrapper" ref={sliderRef}>
        <div className="slide">Slide 1</div>
        <div className="slide">Slide 2</div>
        <div className="slide">Slide 3</div>
        <div className="slide">Slide 4</div>
        <div className="slide">Slide 5</div>
        <div className="slide">Slide 6</div>
      </div>
      <button
        className="prev-button"
        onClick={handlePrevSlide}
        disabled={slideIndex === 0}
      >
        Previous
      </button>
      <button
        className="next-button"
        onClick={handleNextSlide}
        disabled={slideIndex === 3}
      >
        Next
      </button>
    </div>
  );
};
export default MainFindReserve;
