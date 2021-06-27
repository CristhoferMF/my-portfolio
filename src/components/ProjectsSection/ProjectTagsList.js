import {
    ProjectTagsWrapper,ProjectTag
    } from './ProjectsComponents'

export default function ProjectTagsList({tags}){
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
