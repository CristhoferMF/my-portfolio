import React, {
    useState
} from 'react'
import {
    AccordionSkillsTypeList,
    AccordionSkillsTypeWrapper,
    SkillsListHeadingWraper,
    SkillsListHeading,
    SkillsList,
    SkillWrapper,
    SkillTitle,
    SkillsListIcon,
    SkillProgress,
    SkillPaintedLine,
    SkillProcentage
} from './AccordionComponents'
import { dataSkills } from '../Data'
import { IoArrowDown,IoArrowUp } from "react-icons/io5";


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

function AccordionSkillsType({skillGroup,toogle,i,idVisible}){

    const {skills,name} = skillGroup;

    return (
        <AccordionSkillsTypeWrapper>
            <SkillsListHeadingWraper onClick={()=> {toogle(i)}}>
                <SkillsListHeading>{name}</SkillsListHeading>
                <SkillsListIcon>
                    {(i === idVisible) ? <IoArrowUp/> : <IoArrowDown/> }
                </SkillsListIcon>
            </SkillsListHeadingWraper>
            <SkillsList isVisible={ (i === idVisible) ? true : false }>
                {skills.map( (skill) => (
                    <Skill {...skill}/>
                ))}
            </SkillsList>
        </AccordionSkillsTypeWrapper>
    )
}
function Accordion() {

    const {skillsGroup} = dataSkills
    const [idVisible,setIdVisible] = useState(0)

    const toogle = (i) => {
        if(idVisible === i) {
            return setIdVisible(null)
        }

        setIdVisible(i)
    }

    return (
        <AccordionSkillsTypeList>
            {skillsGroup.map( (skillGroup,i) => (
                <AccordionSkillsType skillGroup={skillGroup} toogle={toogle} i={i} idVisible={idVisible}/>
            ) )}
        </AccordionSkillsTypeList>
    )
}

export default Accordion
