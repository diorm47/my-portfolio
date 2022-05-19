import React from "react";
import "./card.css";

function Card({ image, title, description, techlogogies, code, demo }) {
  return (
    <div className="card">
      <div className="card_img">
        <img src={image} alt={title} />
      </div>
      <div className="card_items">
        <div className="card_title">
          <h1>{title}</h1>
        </div>
        <div className="card_description">
          <p>{description}</p>
        </div>
        <div className="technologies">
          {techlogogies.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>
        <div className="card_buttons">
          <a className="code_button" href={code} target="_blank" rel="noreferrer">
            <h3>Code</h3>
          </a>
          <a className="demo_button" href={demo} target="_blank" rel="noreferrer">
            <h3>Demo</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
