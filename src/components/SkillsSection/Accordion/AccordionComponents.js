import styled from "styled-components";
import {theme} from "../../../theme"

export const AccordionSkillsTypeList = styled.div`
    display:flex;
    flex-direction: column;
`

export const AccordionSkillsTypeWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const AccordionSkillsTypeHeading = styled.h4`
    font-size: ${theme.font.size.h3};
    letter-spacing: 0;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 1.5rem;
    cursor: pointer;
`

export const SkillsList = styled.div`
    display: ${ props => (props.isVisible) ? "flex":"none"};
    flex-direction: column;
    padding-bottom: 3rem;
`

export const SkillWrapper = styled.div`
    padding: 1rem 0;
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
    background-color: ${theme.color.lightGray};
`

export const SkillPaintedLine = styled.div`
    width: ${(props) => props.percentage}%;
    position: absolute;
    height: 100%;
    left: 0;
    background-color:${theme.color.accent};
`

export const SkillProcentage = styled.p`
    padding: 0;
    font-size: 14px;
    padding-right: 0.2rem;
    z-index: 1;
    color : ${(props) => props.percentage === 100 ? theme.color._white : theme.color.black }
`