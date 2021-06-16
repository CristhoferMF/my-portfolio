import React from 'react'
import {SkillsContainer,SkillsWrapper,SkillsRow,Column1,Image,Column2,ContentWrapper,Heading} from './SkillsComponents'

function SkillsSection({skills}) {
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
                                <Heading>Skills & Experiencia</Heading>
                                
                            </ContentWrapper>
                        </Column2>
                    </SkillsRow>
                </SkillsWrapper>
            </SkillsContainer>
        </>
    )
}

export default SkillsSection
