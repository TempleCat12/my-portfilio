import React from "react";
import { MdOpenInNew } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'

import "./projectCard.css";
import githubIcon from '../../assets/github.svg'

const ProjectCard = ({ src, title, desc, techs, github, livePreview }) => {
  console.log(techs);
  const handleClickImage = () => {
    window.open(livePreview, '_blank');
  }
  return (
    <div className="portfolio__project-card">
      <img src={src} alt="project screenshot"  onClick={handleClickImage}/>
      <div className="portfolio__project-card_content">
        <div className="portfolio__project-card_content-header">
            <p>Feature Project</p>
            <h3>{title}</h3>
        </div>
        <div className="portfolio__project-card_content-desc">
            <p>{desc}</p>
        </div>
        <div className="portfolio__project-card_content-footer">
            <div>
                {techs.length > 0 && techs.map((tech) => { return <p key={tech}>{tech}</p>})}
            </div>
            <div>
              <a href={github} aria-label="redirect to Github"><GoMarkGithub size={24} /></a>
              <a href={livePreview} aria-label="redirect to a live preview website"><MdOpenInNew size={24} /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
