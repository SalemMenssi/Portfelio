import React from "react";
import "./Home.css";
import profil from "../../Images/profil.jpg";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div
          className="main-img"
          onClick={(e) =>
            !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
              ? e.currentTarget.classList.toggle("active")
              : null
          }
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
    </div>
  );
};

export default Home;
