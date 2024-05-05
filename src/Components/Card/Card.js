import React from "react";
import "./card.css";
import { GiGamepad } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Card = ({ card }) => {
  return (
    <div className="card">
      {card.icon === "game" ? (
        <GiGamepad className="symbole" />
      ) : card.icon === "web" ? (
        <CgWebsite className="symbole" />
      ) : (
        <FaMobileAlt className="symbole" />
      )}
      <h2 className="skill-title">{card.name}</h2>
      <p className="content">{card.content}</p>
    </div>
  );
};

export default Card;
