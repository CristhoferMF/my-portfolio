import React from 'react'
import { useParams } from 'react-router-dom'
import dataProjects from '../../data/projects';
import {Link} from 'react-router-dom'
import {ProjectTitleWrapper,ProjectTitle,ProjectCode} from './ProjectPageComponents'
import {ProjectSubHeading} from './ProjectPageComponents'
import {ProjectPageContainer} from './ProjectPageComponents'
import {ProjectDescription} from './ProjectPageComponents'
import {ProjectHeadingRow} from './ProjectPageComponents'
import {ProjectImage} from './ProjectPageComponents'
import {ProjectImageWrapper} from './ProjectPageComponents'
import {GalleryWrapper} from './ProjectPageComponents'
import {GalleryTitle} from './ProjectPageComponents'
import Gallery from 'react-grid-gallery';
import ScrollToTop from '../../components/ScrollToTop'
import {AiFillGithub} from 'react-icons/ai'

function Project() {
    const {name} = useParams();
    const project = dataProjects.findBySlug(name)

    if(!project){
        return <>
            <p>
                No existe el proyecto
            </p>
            <Link to="/">Regresar a la pagina principal</Link>
        </>
    }
    
    return (
        <ProjectPageContainer>
        <ScrollToTop/>
            <ProjectHeadingRow>
                <ProjectTitleWrapper>
                    <ProjectSubHeading>PROYECTO:</ProjectSubHeading>
                    <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectImageWrapper>
                    <ProjectImage src={project.imgURL}/>
                </ProjectImageWrapper>
            </ProjectHeadingRow>
            <ProjectDescription>{project.descriptionFullText}</ProjectDescription>
            {project.codeLink && <ProjectCode href={project.codeLink} target="_blank">
                <AiFillGithub/> Ir al codigo
            </ProjectCode>}
            <GalleryTitle>GALERIA:</GalleryTitle>
            <GalleryWrapper>
                {project.images[0] && <Gallery images={project.images} enableImageSelection={false} margin={4} rowHeight={150}/>}
            </GalleryWrapper>
        </ProjectPageContainer>
    )
}

export default Project
