import React from "react";
import "../styles/ProjectSection.css";
import { ExpandOnLoading, UpMotionOnLoading } from "./LoadingAnimation";

const Card: React.FC = () => {
  return (
    <ExpandOnLoading>
      <div className="project_card">
        <h2 className="project_card__heading">Heading</h2>
        <p className="project_card__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          alias in fugit placeat animi! Esse libero assumenda.
        </p>
        <div className="project_card__tags">
          <span className="project_card__online">Online</span>
          <span className="project_card__github">Github</span>
        </div>

        <div className="project_card__image">
          <img src="/image 1.png" alt="image" />
        </div>
      </div>
    </ExpandOnLoading>
  );
};

export default () => {
  return (
    <div className="prject_section container-margin">
      <UpMotionOnLoading>
        <div id="projects" className="project_section__heading">
          <span>🚀 My works</span>
          <br />
          Projects
        </div>
      </UpMotionOnLoading>

      <div className="project_section__window">
        <div className="project_section__cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
