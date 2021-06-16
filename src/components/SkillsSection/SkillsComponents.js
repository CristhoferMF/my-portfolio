import styled from "styled-components";
import { theme } from "../../theme";

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 96px;
`
export const SkillsWrapper = styled.div`
    max-width: 900px;
    width: 100%;
`
export const SkillsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
`
export const Column1 = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    min-height: 600px;
`

export const Image = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('/images/skills_background.jpg');
    background-position: center;
`
export const Column2 = styled.div`
    flex:2;
    padding-left: 50px;
`

export const ContentWrapper = styled.div`
   
`
export const Heading = styled.h3`
    font-size: ${theme.font.size.h3};
    color: ${theme.color.primary};
    margin-bottom: 25px;
`