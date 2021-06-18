import React,{useState} from 'react'
import {AccordionSkillsTypeList,
AccordionSkillsTypeWrapper,AccordionSkillsTypeHeading,SkillsList,SkillWrapper,SkillTitle,SkillProgress,SkillPaintedLine,SkillProcentage} from './AccordionComponents'
import { dataSkills } from '../Data'

function Skill(props){

    return (
        <SkillWrapper>
            <SkillTitle>{props.name}</SkillTitle>
            <SkillProgress>
                <SkillPaintedLine {...props}/>
                <SkillProcentage {...props}>{props.percentage}%</SkillProcentage>
            </SkillProgress>
        </SkillWrapper>
    )
}

function AccordionSkillsType({skillGroup,setVisible}){

    const {skills,name,isVisible} = skillGroup;

    return (
        <AccordionSkillsTypeWrapper>
            <AccordionSkillsTypeHeading onClick={()=> {setVisible(skillGroup)}}>{name}</AccordionSkillsTypeHeading>
            <SkillsList isVisible={isVisible}>
                {skills.map( (skill) => (
                    <Skill {...skill}/>
                ))}
            </SkillsList>
        </AccordionSkillsTypeWrapper>
    )
}
function Accordion() {

    const [skillsGroup, setSkillsGroup] = useState(dataSkills.skillsGroup);

    const setVisible = (skilGroup) => {
        const indexToVisible = skillsGroup.findIndex((_skilGroup) => _skilGroup === skilGroup);
        const newSkillsGroup = [...skillsGroup]

        newSkillsGroup.forEach(skilGroup => {
            if(skilGroup.isVisible===true) skilGroup.isVisible = false;
        });
        
        newSkillsGroup[indexToVisible].isVisible = true;
        setSkillsGroup(newSkillsGroup)
    }

    return (
        <AccordionSkillsTypeList>
            {skillsGroup.map( (skillGroup) => (
                <AccordionSkillsType skillGroup={skillGroup} setVisible={setVisible}/>
            ) )}
        </AccordionSkillsTypeList>
    )
}

export default Accordion
