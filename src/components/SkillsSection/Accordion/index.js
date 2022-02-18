import React, { useState } from "react";
import {
  AccordionSkillsTypeList,
  AccordionSkillsTypeWrapper,
  SkillsListHeadingWraper,
  SkillsListHeading,
  SkillsList,
  SkillImageWrapper,
  SkillImage,
  SkillsListIcon,
} from "./AccordionComponents";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import SVGTecnologies from "../../../data/svg";

function AccordionSkillsType({ skillGroup, toogle, i, idVisible }) {
  const { skills, name } = skillGroup;
  return (
    <AccordionSkillsTypeWrapper>
      <SkillsListHeadingWraper
        onClick={() => {
          toogle(i);
        }}
      >
        <SkillsListHeading>{name}</SkillsListHeading>
        <SkillsListIcon>
          {i === idVisible ? <IoArrowUp /> : <IoArrowDown />}
        </SkillsListIcon>
      </SkillsListHeadingWraper>
      <SkillsList isVisible={i === idVisible ? true : false}>
        {skills.map((skill, i) => (
          <SkillImageWrapper key={i}>
            <SkillImage
              src={SVGTecnologies[skill.name]}
              title={skill.fullName}
              isInverted={skill.isInverted}
            />
          </SkillImageWrapper>
        ))}
      </SkillsList>
    </AccordionSkillsTypeWrapper>
  );
}
function Accordion({ skillsGroup }) {
  const [idVisible, setIdVisible] = useState(0);

  const toogle = (i) => {
    if (idVisible === i) {
      return setIdVisible(null);
    }

    setIdVisible(i);
  };

  return (
    <AccordionSkillsTypeList>
      {skillsGroup.map((skillGroup, i) => (
        <AccordionSkillsType
          key={i}
          skillGroup={skillGroup}
          toogle={toogle}
          i={i}
          idVisible={idVisible}
        />
      ))}
    </AccordionSkillsTypeList>
  );
}

export default Accordion;
