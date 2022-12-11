import React from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  const handleNav = () => {
    let Icons = document.querySelectorAll(".icon");
    Icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        Icons.forEach((icon) => icon.classList.remove("active-nav"));
        icon.classList.add("active-nav");
      });
    });
  };

  return (
    <div className="navigation">
      <a href="#home">
        <AiOutlineHome className="icon active-nav" onClick={handleNav} />
      </a>
      <a href="#about">
        <AiOutlineUser className="icon " onClick={handleNav} />
      </a>
      <a href="#skills">
        <GiSkills className="icon " onClick={handleNav} />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className="icon " onClick={handleNav} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className="icon " onClick={handleNav} />
      </a>
    </div>
  );
};

export default Navbar;
