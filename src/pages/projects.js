import styled from "styled-components";
import Project from "../components/ProjectsSection/Project";
import { THEME } from "../theme";
import projectsData from "../data/projects";
import ScrollToTop from "../components/ScrollToTop";
import { Link } from "react-router-dom";

const projects = projectsData.all();

const Container = styled.div`
    max-width: 960px;
    margin: auto;
    padding-left: 8px;
    padding-right: 8px;

    @media screen and (min-width: ${THEME.SCREENS.lg}){
        padding-left: 0;
        padding-right: 0;
    }
`
const HeaderWrapper = styled.div`
    padding-top: 48px;
`
const Header = styled.h1`
    font-size: ${THEME.font.size.h1};
    color: ${THEME.color.primary};
    margin-top: 0
`

const BackLink = styled(Link)`
    color: ${THEME.color.primary};
    text-decoration: underline;
    font-size: ${THEME.font.size.base};
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3rem;
`

export default function Projects(props){
    return (
        <Container>
            <ScrollToTop/>
            <HeaderWrapper>
                <BackLink to="/">Ir atras</BackLink>
                <Header>Más proyectos</Header>
            </HeaderWrapper>
            <div>
                <GridContainer>
                    {projects.map(project => (
                        <Project {...project} imagePosition="top" hideButton key={project.id} />
                    ))} 
                </GridContainer>
            </div>
        </Container>
    );
}