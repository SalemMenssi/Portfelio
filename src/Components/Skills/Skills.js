import React from "react";
import Card from "../Card/Card";
import "./skills.css";

const Skills = () => {
  const skills = [
    {
      name: "GAME DEV",
      icon: "game",
      content:
        "As a Unity game developer, I excel in creating both 2D and 3D games, along with crafting tools and game mechanics. With a proven track record of innovation and creativity, I'm committed to pushing the boundaries of game development.",
    },
    {
      name: "WEB DEV",
      icon: "web",
      content:
        "As a web developer skilled in React, Node.js, MongoDB, and more, with two years of game development experience, I offer a unique blend of creativity and problem-solving. I'm committed to delivering top-notch web solutions that exceed expectations.",
    },
    {
      name: "MOBILE DEV",
      icon: "mobile",
      content:
        "As a React Native mobile developer, I create apps for Android and iOS with a focus on seamless user experiences. With expertise in cross-platform development, I deliver efficient and innovative solutions tailored to client needs.",
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
