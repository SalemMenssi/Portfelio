import React from "react";
import Button from "../buttons/Button";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="container about-container">
      <h2 className="about-title">About Me</h2>
      <br />
      <p>
        Driven Full-Stack Developer with a Passion for Gaming . I started my
        journey as a web developer mastering JavaScript and the MERN stack.
        While honing my skills at Gomycode, I actively participated in incubator
        programs like Pocit and UTM Innov, fostering my entrepreneurial spirit.
        This led me to found my own gaming startup in 2023, combining my
        technical expertise with a love for the industry.
      </p>
      <Button />
    </div>
  );
};

export default About;
