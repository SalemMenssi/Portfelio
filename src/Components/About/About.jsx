import React from "react";
import Button from "../buttons/Button";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="container about-container">
      <h2 className="about-title">About Me</h2>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
        laboriosam, provident recusandae voluptatibus voluptas nisi minima
        consequuntur nostrum itaque sapiente error distinctio aliquid aut eaque
        odio. Vel ab ut similique!
      </p>
      <Button />
    </div>
  );
};

export default About;
