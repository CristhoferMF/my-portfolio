import React from "react";
import HeadingSection from "../HeadingSection";
import {
  ProjectsContainer,
  ProjectsWrapper,
  LinkSeeMore,
  LinkSeeMoreWrapper,
} from "./ProjectsComponents";
import { IoArrowForward } from "react-icons/io5";
import Project from "./Project";

function ProjectList({ projects }) {
  return projects.map((project, index) => (
    <Project key={project.id} {...project} />
  ));
}

const SeMoreProjects = ({ title = "Más proyectos" }) => {
  return (
    <LinkSeeMoreWrapper>
      <LinkSeeMore to="/projects">
        {title}
        <IoArrowForward />
      </LinkSeeMore>
    </LinkSeeMoreWrapper>
  );
};

function ProjectsSection(projects) {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <HeadingSection textAlign="center">Proyectos</HeadingSection>
          <SeMoreProjects title="Ver todos los proyectos" />
          <ProjectList projects={projects.show(4)} />
          <SeMoreProjects />
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}

export default ProjectsSection;
