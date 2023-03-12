import { ReactNode, useState } from "react";
import "../styles/TestimonialSlider.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ExpandOnLoading } from "./LoadingAnimation";

const TestimonialSlider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const totalSlides = 2;
  const [sliderPosition, setSliderPosition] = useState(0);

  const moveLeft = () => {
    if (sliderPosition > 0) setSliderPosition(sliderPosition - 1);
    else setSliderPosition(totalSlides - 1);
  };

  const moveRight = () => {
    if (sliderPosition < totalSlides - 1) setSliderPosition(sliderPosition + 1);
    else setSliderPosition(0);
  };

  return (
    <ExpandOnLoading>
      <div className="slider">
        <div className="slider__buttons">
          <button onClick={moveLeft} className="slider_btn__left">
            <BsChevronLeft />
          </button>
          <button onClick={moveRight} className="slider_btn__right">
            <BsChevronRight />
          </button>
        </div>
        <div className="slider__window">
          <div
            style={{
              transform: `translateX(-${
                sliderPosition * (100 / totalSlides)
              }%)`,
            }}
            className="slider__container"
          >
            {children}
          </div>
        </div>
      </div>
    </ExpandOnLoading>
  );
};

export default TestimonialSlider;
