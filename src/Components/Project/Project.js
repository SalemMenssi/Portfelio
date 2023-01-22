import React from "react";
import "./project.css";

const Project = ({ el }) => {
  return (
    <div className="project">
      <figure className="project__thumb">
        <img src={el.img} alt="project-img" className="project__image" />
        <figcaption className="project__caption">
          <h2 className="project__title">{el.title}</h2>
          <p className="project__snippet">{el.content}</p>
          <a href={el.url} className="project__button">
            GITHUB
          </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default Project;
