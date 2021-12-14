import React from 'react'
import { useParams } from 'react-router-dom'
import dataProjects from '../../data/projects';
import {Link} from 'react-router-dom'
import {ProjectTitleWrapper,ProjectTitle,ProjectCode, ButtonWrapper, BackLink} from './ProjectPageComponents'
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
import {AiFillGithub, AiFillPushpin} from 'react-icons/ai'


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
    function renderGithubLink(){
        if(project.codeLink){
            return <ProjectCode href={project.codeLink} target="_blank">
                        <AiFillGithub/> Ir al codigo
                    </ProjectCode>
        }

        return;
    }

    function renderPreviewLink() {
        if(project.previewLink){
            return <ProjectCode href={project.previewLink} target="_blank">
                       <AiFillPushpin /> Demo
                    </ProjectCode>
        }

        return;
    }
    console.log(!!project.images)
    return (
        <ProjectPageContainer>
        <ScrollToTop/>
            <ProjectHeadingRow>
                <ProjectTitleWrapper>
                    <BackLink to="./">Ir atras</BackLink>
                    <ProjectSubHeading>PROYECTO:</ProjectSubHeading>
                    <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectImageWrapper>
                    <ProjectImage src={project.imgURL}/>
                </ProjectImageWrapper>
            </ProjectHeadingRow>
            <ProjectDescription>{project.descriptionFullText}</ProjectDescription>
            <ButtonWrapper>
                {renderGithubLink()}
                {renderPreviewLink()}
            </ButtonWrapper>
            <GalleryWrapper>
                <GalleryTitle>GALERIA:</GalleryTitle>
                {!!project.images && <Gallery images={project.images} enableImageSelection={false} margin={4} rowHeight={150}/>}
            </GalleryWrapper>
        </ProjectPageContainer>
    )
}

export default Project
