import React from "react";
import "./projects-page.css";
import Card from "./../../components/card/card";

import { projects } from "../../components/card/card-data";

const ProjectsPage = () => {
  return (
    <div className="projects_wrapper">
      <div className="projects_title">
        <h1>My projects</h1>
      </div>

      <div className="cards_wrapper">
        <div className="cards">
          {projects
            .map((project) => <Card {...project} key={project.id} />)
            .reverse()}
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
