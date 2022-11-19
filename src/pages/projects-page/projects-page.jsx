import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Card from "./../../components/card/card";
import "./projects-page.css";

import { useEffect } from "react";
import { projects } from "../../components/card/card-data";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="projects_wrapper">
      <div
        className="projects_title"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
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
