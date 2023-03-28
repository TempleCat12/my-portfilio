import React from "react";
import "./aboutMe.css";

import portrait from "../../assets/portrait.jpeg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";
import java from "../../assets/java.svg";
import mui from "../../assets/mui.svg";
import git from "../../assets/git.svg";
import linux from "../../assets/linux.svg";
import mongondb from "../../assets/mongondb.svg";

const AboutMe = () => {
  return (
    <div id="about" className="portfolio__about section-padding section-margin">
      <h2 className="gradient-text">About Me</h2>
      <div className="portfolio__about-info">
        <div className="portfolio__about-info_text">
          <p>
            Hello! My name is Henry Lee and I enjoy creating things that live on
            the internet. My interest in web development started back in 2022
            when I decided to try copying an simple blog website.It is difficult
            for a new beginner, but it taught me a lot about HTML & CSS &
            javascript!
          </p>
          <p>
            Until today, I am still learning about the knowledge of front-end
            engineers and aspire to become a full-stack engineer. I like elegant
            and concise pages, interesting and easy-to-understand interactive
            designs. I hope that one day, people can also appreciate the
            programs I design.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
        </div>
        <div className="portfolio__about-info_image">
          <div className="portfolio__about-info_image-border" />
          <img src={portrait} alt="portrait" />
        </div>
      </div>
      <div className="portfolio__about-skills">
        <img src={javascript} alt="javascript icon" />
        <img src={react} alt="javascript icon" />
        <img src={mui} alt="javascript icon" />
        <img src={git} alt="javascript icon" />
        <img src={linux} alt="javascript icon" />
        <img src={java} alt="javascript icon" />
        <img src={mongondb} alt="mongondb icon" />
      </div>
    </div>
  );
};

export default AboutMe;
