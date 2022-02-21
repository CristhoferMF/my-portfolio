import Project from "../../components/ProjectsSection/Project";
import projectsData from "../../data/projects";
import {
  BackLink,
  Container,
  GridContainer,
  Header,
  HeaderWrapper,
  TitleProject,
} from "./ProjectsComponents";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const projects = projectsData.all();

export default function Projects(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar hideMenu={true} />
      <Container>
        <HeaderWrapper>
          <BackLink to="/">Ir atras</BackLink>
          <Header>Más proyectos</Header>
        </HeaderWrapper>
        <div>
          <GridContainer>
            {projects.map((project) => (
              <Project
                {...project}
                imagePosition="top"
                hideButton
                key={project.id}
                titleComponent={(_title) => (
                  <TitleProject>{_title}</TitleProject>
                )}
              />
            ))}
          </GridContainer>
        </div>
      </Container>
    </>
  );
}
