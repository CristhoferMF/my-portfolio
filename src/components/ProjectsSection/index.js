import React from 'react'
import { HeadingSection } from '../HeadingSection'
import {
ProjectsContainer,ProjectsWrapper,ProjectWrapper,ProjectRow,Column1,
ProjectTitle,ProjectDescription,Column2,Image,ButtonWrapper,ProjetSlugsWrapper,ProjetSlug
} from './ProjectsComponents'
import { Button } from '../Button'

function ProjectSlugs(){
    return (
            <ProjetSlugsWrapper>
                <ProjetSlug>Wordpress</ProjetSlug>
                <ProjetSlug>HTML</ProjetSlug>
                <ProjetSlug>Javascript</ProjetSlug>
            </ProjetSlugsWrapper>
    )
}

function Project({title,description,imgURL}){
    
    return (
        <>
            <ProjectWrapper>
                <ProjectRow>
                    <Column1>
                        <ProjectTitle>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectSlugs />
                        <ButtonWrapper>
                            <Button>Ver más</Button>
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
        projects.map( project => (<Project {...project}/>))
    )
}


function ProjectsSection({projects}) {
    return (
        <>
            <ProjectsContainer>
                <ProjectsWrapper>
                    <HeadingSection textAlign="center">Proyectos</HeadingSection>
                    <ProjectList projects={projects.show(3)}/>
                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection
