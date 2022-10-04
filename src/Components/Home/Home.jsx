import React from "react";
import "./Home.css";
import Button from "../buttons/Button";
import profil from "../../Images/profil.jpg";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div
          className="main-img"
          onClick={(e) => e.currentTarget.classList.toggle("active")}
        >
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={profil} alt="profil" />
      </div>
      <a href="#footer" className="scroll-down">
        <hr />
        <h5>scroll down</h5>
        <BsMouse className="scroll" />
        <hr />
      </a>
      <h2>
        <span>About Me</span>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          laboriosam, provident recusandae voluptatibus voluptas nisi minima
          consequuntur nostrum itaque sapiente error distinctio aliquid aut
          eaque odio. Vel ab ut similique!
        </p>
      </h2>

      <Button />
    </div>
  );
};

export default Home;
