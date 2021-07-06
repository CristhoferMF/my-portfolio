import styled,{css} from "styled-components";
import {THEME} from "../../../theme"

export const AccordionSkillsTypeList = styled.div`
    display:flex;
    flex-direction: column;
`

export const AccordionSkillsTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const SkillsListHeadingWraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid ${THEME.color.cyanBlue};
`

export const SkillsListHeading = styled.h4`
    font-size: ${THEME.font.size.h3};
    letter-spacing: 0;
    text-transform: uppercase;
    margin: 0;
    margin: 0.7rem 0;
`
export const SkillsListIcon = styled.div`
    font-size: 30px;
`

export const SkillsList = styled.div`
    display: flex;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    transition: all 0.5s cubic-bezier(0,1,0,1);

    ${ props => props.isVisible && css`
        max-height: 999px;
        height: auto;
        overflow: auto;
        padding-bottom: 3rem;
    `}
`

export const SkillWrapper = styled.div`
    padding: 0.5rem 0;
`
export const SkillTitle = styled.p`
    font-weight: 500;
    text-transform: uppercase;
`

export const SkillProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    height: 20px;
    background-color: ${THEME.color.cyanBlue};
`

export const SkillPaintedLine = styled.div`
    width: ${(props) => props.percentage}%;
    position: absolute;
    height: 100%;
    left: 0;
    background-color:${THEME.color.accent};
`

export const SkillProcentage = styled.p`
    padding: 0;
    font-size: 14px;
    padding-right: 0.2rem;
    z-index: 1;
    color : ${(props) => props.percentage === 100 ? '#fff' : '#000' }
`