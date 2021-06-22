import React from 'react'
import  HeadingSection from '../HeadingSection'
import {
ProjectsContainer,ProjectsWrapper,ProjectWrapper,ProjectRow,Column1,
ProjectTitle,ProjectDescription,Column2,Image,ButtonWrapper,ProjectTagsWrapper,ProjectTag,LinkSeeMore,LinkSeeMoreWrapper
} from './ProjectsComponents'
import  Button  from '../Button'
import {Link} from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";


function ProjectTags({tags}){
    console.log(tags)
    return (
            <ProjectTagsWrapper>
                {
                    tags.map( (tag,index) => (
                        <ProjectTag key={index}>{tag}</ProjectTag>
                    ))
                }
            </ProjectTagsWrapper>
    )
}

function Project({title,description,imgURL,id,tags}){
    
    return (
        <>
            <ProjectWrapper>
                <ProjectRow>
                    <Column1>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectTags tags={tags}/>
                        <ButtonWrapper>
                            <Link to={"/projects/"+id}><Button>Ver más</Button></Link>
                        </ButtonWrapper>
                    </Column1>
                    <Column2>
                        <Image src={imgURL}/>
                    </Column2>
                </ProjectRow>
            </ProjectWrapper>
        </>
    )
}

function  ProjectList({projects}){
    return (
        projects.map( (project,index) => (<Project key={project.id} {...project}/>))
    )
}


function ProjectsSection({projects}) {
    return (
        <>
            <ProjectsContainer>
                <ProjectsWrapper>
                    <HeadingSection textAlign="center">Proyectos</HeadingSection>
                    <ProjectList projects={projects.show(3)}/>
                    <LinkSeeMoreWrapper>
                        <LinkSeeMore to="/projects">
                            Más proyectos
                            <IoArrowForward/>
                        </LinkSeeMore>
                    </LinkSeeMoreWrapper>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection
