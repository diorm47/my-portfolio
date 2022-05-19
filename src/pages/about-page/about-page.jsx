import React from "react";
import "./about-page.css";

import aboutImg from "../../assets/about-img.jpg";

import css from "../../assets/skills/css.png";
import git from "../../assets/skills/git.png";
import html from "../../assets/skills/html.png";
import js from "../../assets/skills/js.png";
import redux from "../../assets/skills/redux.png";
import react from "../../assets/skills/react.png";
import mui from "../../assets/skills/mui.png";

import npm from "../../assets/skills/npm.png";
import photoshop from "../../assets/skills/photoshop.png";
import chrome from "../../assets/skills/chrome.png";
import github from "../../assets/skills/github.png";
import vscode from "../../assets/skills/vscode.png";
import figma from "../../assets/skills/figma.png";

const AboutPage = () => {
  return (
    <div className="about_wrapper">
      <div className="main_about">
        <div className="left_block">
          <div className="about_title">
            <h1>About Me</h1>
            <div className="about_me-description">
              <p>
                My name is Diyor. I am currently looking for a job as a junior
                React.js developer. Know the latest frontend technologies. I
                have about a year of experience in JavaScript library - React.js
                and create dynamic web applications using it. Actively learning
                TypeScript at now. I am a fast learner, sociable, hardworking,
                capable and I speak English well (intermediate).
              </p>
            </div>
          </div>
        </div>

        <div className="right_block">
          <img src={aboutImg} alt="about_img" />
        </div>
      </div>

      <div className="skils_tools">
        <div className="skills_bar">
          <h1>
            Professional <span>Skillset</span>
          </h1>
          <div className="skills">
            <div className="skill">
              <img src={html} alt="html" />
              <p>HTML5</p>
            </div>

            <div className="skill">
              <img src={css} alt="css" />
              <p>CSS3</p>
            </div>
            <div className="skill">
              <img src={js} alt="js" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={react} alt="react" />
              <p>React.js</p>
            </div>
            <div className="skill">
              <img src={redux} alt="redux" />
              <p>Redux</p>
            </div>
            <div className="skill">
              <img src={mui} alt="mui" />
              <p>MaterialUI</p>
            </div>
            <div className="skill">
              <img src={git} alt="git" />
              <p>Git</p>
            </div>
          </div>
        </div>

        <div className="tools_bar">
          <h1>
            <span>Tools</span> I use
          </h1>
          <div className="tools">
            <div className="tool">
              <img src={vscode} alt="vscode" />
              <p>VSCode</p>
            </div>
            <div className="tool">
              <img src={chrome} alt="chrome" />
              <p>Chrome</p>
            </div>
            <div className="tool">
              <img src={github} alt="github" />
              <p>GitHub</p>
            </div>
            <div className="tool">
              <img src={npm} alt="npm" />
              <p>NPM</p>
            </div>
            <div className="tool">
              <img src={photoshop} alt="photoshop" />
              <p>Photoshop</p>
            </div>
            <div className="tool">
              <img src={figma} alt="figma" />
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
