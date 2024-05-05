import React from "react";
import "./projects.css";
import Project from "../Project/Project";
import p1 from "../../Images/Project-img/p1.png";
import p2 from "../../Images/Project-img/p2.png";
import p3 from "../../Images/Project-img/p3.png";
import p4 from "../../Images/Project-img/p4.png";
import p5 from "../../Images/Project-img/p5.png";
import p6 from "../../Images/Project-img/p6.png";
import p9 from "../../Images/Project-img/p9.png";
import p10 from "../../Images/Project-img/p10.png";
import p11 from "../../Images/Project-img/p11.png";
import p7 from "../../Images/Project-img/p7.gif";
import p8 from "../../Images/Project-img/p8.gif";

const Projects = () => {
  const projects = [
    {
      title: "Fire Swordman",
      img: p7,
      content:
        "Embark on an epic journey as a fiery swordsman battling through hordes of mobs in this adrenaline-pumping 2D platformer",
      url: "/#",
    },
    {
      title: "Medical Website",
      img: p2,
      content:
        "Explore the comprehensive showcase website of our state-of-the-art dialysis hospital, offering insights into our cutting-edge facilities, compassionate care, and commitment to patient well-being.",
      url: "/#",
    },
    {
      title: "Chat-G",
      img: p3,
      content:
        "Discover Chat-G: your vibrant social hub, where connections grow, conversations flow, and friendships blossom.",
      url: "/#",
    },
    {
      title: "Kayotica",
      img: p4,
      content:
        "mbark on an immersive journey through our captivating visual novel, where every choice shapes your destiny. Delve into rich storytelling, unforgettable characters, and boundless possibilities.",
      url: "/#",
    },
    {
      title: "ED-Tech",
      img: p5,
      content:
        "Dive into our web development educational game. Learn coding languages through challenges and fun exercises, becoming a pro as you play.",
      url: "/#",
    },
    {
      title: "Flappy Butterfly",
      img: p8,
      content:
        "Fly through enchanting landscapes as a fluttering butterfly in our charming twist on the classic Flappy Bird game. Navigate obstacles with grace and finesse to soar to new heights.",
      url: "/#",
    },
    {
      title: "Dialogue System Node",
      img: p6,
      content:
        "Experience seamless storytelling with our node-based dialogue system. Craft intricate narratives by connecting nodes, allowing for dynamic conversations and immersive gameplay experiences.",
      url: "/#",
    },
    {
      title: "LuckyBoy Web",
      img: p9,
      content:
        "Dive into the world of sea sports with our exhilarating website. Explore thrilling activities like surfing, diving, and sailing, and discover breathtaking destinations for your next aquatic adventure.",
      url: "/#",
    },
    {
      title: "Packtec",
      img: p10,
      content:
        "Optimize your business with our streamlined employer management app. Handle scheduling, payroll, and communication effortlessly, all in one place.",
      url: "/#",
    },
    {
      title: "Pointing App",
      img: p11,
      content:
        "Navigate with ease using our intuitive pointing app. Quickly pinpoint locations, get directions, and explore your surroundings effortlessly",
      url: "/#",
    },
  ];

  return (
    <div id="projects" className="container skills-container">
      <h2 className="skills-title">Projects</h2>
      <div className="container project-container">
        {projects.map((e, i) => (
          <Project key={i} el={e} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
