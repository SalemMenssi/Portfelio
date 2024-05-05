import React from "react";
import "./buttons.css";

const Button = () => {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Learn more
      </a>
      <a
        href="https://drive.google.com/file/d/1GE8rjQF5okALFVKJWG0YyQ0NbXx5qNdL/view?usp=sharing"
        className="btn sec"
      >
        Resume
      </a>
    </div>
  );
};

export default Button;
