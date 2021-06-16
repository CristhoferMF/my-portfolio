import React from 'react'

function Skill(){
    return (
        <SkillWrapper>
            <TitleSkill>REACT JS</TitleSkill>
            <ProgressSkill>
                <Line/>
                <PaintedLine/>
                <Procentage>90%</Procentage>
            </ProgressSkill>
        </SkillWrapper>
    )
}

function AccordionSkillsType(){
    return (
        <AccordionSkillsTypeWrapper>
            <TypeHeading>Frontend</TypeHeading>
            <SkillsWrapper>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </SkillsWrapper>
        </AccordionSkillsTypeWrapper>
    )
}
function Accordion() {
    return (
        <>
            <AccordionContainer>
                <AccordionSkillsType/>
                <AccordionSkillsType/>
                <AccordionSkillsType/>
            </AccordionContainer>
        </>
    )
}

export default Accordion
