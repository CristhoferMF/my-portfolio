import { ProjectTagsWrapper, ProjectTag } from "./ProjectsComponents";

export default function ProjectTagsList({ tags }) {
  return (
    <ProjectTagsWrapper>
      {tags.map((tag, index) => (
        <ProjectTag key={index}>{tag}</ProjectTag>
      ))}
    </ProjectTagsWrapper>
  );
}
