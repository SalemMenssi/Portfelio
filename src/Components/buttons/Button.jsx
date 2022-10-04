import React from "react";
import "./buttons.css";

const Button = () => {
  return (
    <div className="container button-container">
      <a href="#about" className="btn pri">
        Learn more
      </a>
      <a
        href="https://drive.google.com/file/d/1J_6TaSUvHsZeTT7vJjFHIkV7oXuszd0T/view?usp=sharing"
        className="btn sec"
      >
        Resume
      </a>
    </div>
  );
};

export default Button;
