import "../styles/AboutSection.css";
import { ExpandOnLoading, UpMotionOnLoading } from "./LoadingAnimation";

export default () => {
  return (
    <div className="container-margin">
      <ExpandOnLoading>
        <div id="about" className="about_section">
          <div className="about_section__image">
            <img src="/ProfilePic.png" alt="profile pic" />
          </div>
          <div className="about_section__content">
            <span className="emoji-text">😎 About me</span>
            <h2>Exploring the world of programming</h2>
            <div className="about_section__lines">
              <p>
                💻{" "}
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi corrupti.
                </span>
              </p>
              <p>
                🎓{" "}
                <span>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Error,
                  recusandae sapiente reiciendis.
                </span>
              </p>
              <p>
                🚀{" "}
                <span>
                  {" "}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </span>
              </p>
            </div>
          </div>
        </div>
      </ExpandOnLoading>
    </div>
  );
};
