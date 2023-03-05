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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <HeadingSection textAlign="center">
            {t("projects.title")}
          </HeadingSection>
          <SeMoreProjects title={t("projects.view all projects")} />
          <ProjectList projects={projects.show(4)} />
          <SeMoreProjects />
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
}

export default ProjectsSection;
