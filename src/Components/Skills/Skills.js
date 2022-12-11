import React from "react";
import Card from "../Card/Card";
import "./skills.css";

const Skills = () => {
  const skills = [
    {
      name: "GAME DEV",
      icon: "game",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
    },
    {
      name: "WEB DEV",
      icon: "web",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
    },
    {
      name: "MOBILE DEV",
      icon: "mobile",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam harum perspiciatis quas ea repellendus architecto itaque perferendis optio aspernatur commodi at quia, beatae deleniti officia necessitatibus amet neque, fugiat eligendi.",
    },
  ];
  return (
    <div id="skills" className="container skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="container card-container">
        {skills.map((e, i) => (
          <Card key={i} card={e} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
