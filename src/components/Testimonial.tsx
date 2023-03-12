import "../styles/Testimonial.css";
import { ExpandOnLoading, UpMotionOnLoading } from "./LoadingAnimation";
import TestimonialSlider from "./TestimonialSlider";

const Card: React.FC<{ name: string }> = ({ name }) => {
  return (
    // <ExpandOnLoading>
    <div className="testimonial_card">
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 18.002H5C4.73478 18.002 4.48043 17.8966 4.29289 17.7091C4.10536 17.5215 4 17.2672 4 17.002V9.00195C4 8.73674 4.10536 8.48238 4.29289 8.29485C4.48043 8.10731 4.73478 8.00195 5 8.00195H12.5C12.7652 8.00195 13.0196 8.10731 13.2071 8.29485C13.3946 8.48238 13.5 8.73674 13.5 9.00195V20.002C13.5 21.328 12.9732 22.5998 12.0355 23.5375C11.0979 24.4752 9.82608 25.002 8.5 25.002"
          stroke="#7B4AE2"
          stroke-opacity="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 18.002H19.5C19.2348 18.002 18.9804 17.8966 18.7929 17.7091C18.6054 17.5215 18.5 17.2672 18.5 17.002V9.00195C18.5 8.73674 18.6054 8.48238 18.7929 8.29485C18.9804 8.10731 19.2348 8.00195 19.5 8.00195H27C27.2652 8.00195 27.5196 8.10731 27.7071 8.29485C27.8946 8.48238 28 8.73674 28 9.00195V20.002C28 21.328 27.4732 22.5998 26.5355 23.5375C25.5979 24.4752 24.3261 25.002 23 25.002"
          stroke="#7B4AE2"
          stroke-opacity="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p className="testimonial_card__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        voluptatem molestiae dignissimos quaerat distinctio fugit ea saepe
        assumenda, aliquam facere inventore doloremque neque id impedit atque
        amet ducimus! Officia, vel.
      </p>
      <div className="testimonial_card__author">
        <img src="/image 3.png" alt="client pic" />
        <div>
          <h4>{name}</h4>
          <span>Software engineer</span>
        </div>
      </div>
    </div>
    // </ExpandOnLoading>
  );
};

export default () => {
  return (
    <div className="testimonial_section container-margin">
      <UpMotionOnLoading>
        <div className="testimonial_section__heading">
          <span>💬 Clients review</span>
          <h2>Testimonials</h2>
        </div>
      </UpMotionOnLoading>
      <div className="testimonial_window">
        <div className="testimonial_section__cards">
          <Card name="test" />
          <Card name="test" />
          <Card name="test" />
        </div>
      </div>

      <div className="testimonial_slider__window">
        <TestimonialSlider>
          <div className="slider__item">
            <Card name="first" />
            <Card name="first" />
            <Card name="first" />
          </div>
          <div className="slider__item">
            <Card name="second" />
            <Card name="second" />
            <Card name="second" />
          </div>
        </TestimonialSlider>
      </div>
    </div>
  );
};
