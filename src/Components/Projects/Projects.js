import React from "react";
import "./projects.css";
import Project from "../Project/Project";
import p1 from "../../Images/Project-img/p1.png";
import p2 from "../../Images/Project-img/p2.png";
import p3 from "../../Images/Project-img/p3.png";
import p4 from "../../Images/Project-img/p4.png";
import p5 from "../../Images/Project-img/p5.png";

const Projects = () => {
  const projects = [
    {
      title: "Fire Swordman",
      img: p1,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
      url: "/#",
    },
    {
      title: "Medical Website",
      img: p2,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
      url: "/#",
    },
    {
      title: "Chat-G",
      img: p3,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
      url: "/#",
    },
    {
      title: "Kayotica",
      img: p4,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
      url: "/#",
    },
    {
      title: "ED-Tech",
      img: p5,
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
      url: "/#",
    },
  ];

  return (
    <div id="projects" className="container skills-container">
      <h2 className="skills-title">Projects</h2>
      <div className="container project-container">
        {projects.map((e, i) => (
          <Project key={i} el={e} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
