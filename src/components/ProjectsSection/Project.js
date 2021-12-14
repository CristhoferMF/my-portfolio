import { Link } from 'react-router-dom'
import Button from '../Button'
import {
     ProjectWrapper, ProjectRow, Column1,
    ProjectTitle, ProjectDescription, Column2, Image, ButtonWrapper,
} from './ProjectsComponents'
import ProjectTagsList from './ProjectTagsList'

export default function Project({ title, description, imgURL, slug, tags, imagePosition, hideButton }) {
    
    const ImageLink = () => {
        return (<Link to={"/projects/" + slug}>
            <Image src={imgURL} imagePosition={imagePosition} />
        </Link>)
    }
    
    const paddingVertical = imagePosition === 'top' ? '1rem' : null;

    return (
        <>
            <ProjectWrapper paddingVertical={paddingVertical}>
                <ProjectRow>
                    <Column1>
                        {imagePosition === "top" && <ImageLink />}
                        <ProjectTitle position={imagePosition}>{title}</ProjectTitle>
                        <ProjectDescription>{description}</ProjectDescription>
                        <ProjectTagsList tags={tags} />
                        <ButtonWrapper>
                            {hideButton || <Link to={"/projects/" + slug}><Button>Leer más</Button></Link>}
                        </ButtonWrapper>
                    </Column1>
                    {imagePosition === "top" ? null : <Column2>
                        <ImageLink />
                    </Column2>}
                </ProjectRow>
            </ProjectWrapper>
        </>
    )
}