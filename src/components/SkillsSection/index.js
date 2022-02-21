import React from "react";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Column1,
  Image,
  Column2,
  ContentWrapper,
} from "./SkillsComponents";
import Accordion from "./Accordion";
import HeadingSection from "../HeadingSection";
import imgSkills from "../../images/skills_background.jpg";

function SkillsSection({ skillsGroup }) {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsWrapper>
          <SkillsRow>
            <Column1>
              <Image src={imgSkills} />
            </Column1>
            <Column2>
              <ContentWrapper>
                <HeadingSection>Skills</HeadingSection>
                <Accordion skillsGroup={skillsGroup} />
              </ContentWrapper>
            </Column2>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
}

export default SkillsSection;
