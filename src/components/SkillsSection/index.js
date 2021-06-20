import React from 'react'
import {SkillsContainer,SkillsWrapper,SkillsRow,Column1,Image,Column2,ContentWrapper} from './SkillsComponents'
import Accordion from './Accordion'
import {HeadingSection } from '../HeadingSection'

function SkillsSection({skillsGroup}) {
    return (
        <>
            <SkillsContainer>
                <SkillsWrapper>
                    <SkillsRow>
                        <Column1>
                            <Image />
                        </Column1>
                        <Column2>
                            <ContentWrapper>
                                <HeadingSection>Skills & Experiencia</HeadingSection>
                                <Accordion skillsGroup={skillsGroup}/>
                            </ContentWrapper>
                        </Column2>
                    </SkillsRow>
                </SkillsWrapper>
            </SkillsContainer>
        </>
    )
}

export default SkillsSection
