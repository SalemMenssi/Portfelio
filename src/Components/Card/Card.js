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
      <p className="content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum nam
        explicabo officia accusantium eos excepturi quas, cum quis ipsum dicta
        non culpa officiis ut voluptatum commodi illo natus blanditiis!
      </p>
    </div>
  );
};

export default Card;
