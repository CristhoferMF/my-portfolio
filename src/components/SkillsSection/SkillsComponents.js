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
    max-height: 600px;
`

export const Image = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${ props => props.src});
    background-position: center;
`
export const Column2 = styled.div`
    flex:2;
    padding-left: 50px;
`

export const ContentWrapper = styled.div`
   
`