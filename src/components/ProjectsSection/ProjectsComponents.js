import styled from "styled-components";
import { theme } from "../../theme";

export const ProjectsContainer = styled.div`
    width: 100%;
`

export const ProjectsWrapper = styled.div`
    max-width: 900px;
    margin: auto;
`
/** Project */
export const ProjectWrapper = styled.div`
    padding: 40px 0;
`
export const ProjectRow = styled.div`
    display: flex;
`
export const Column1 = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 2rem;
`

export const ProjectTitle = styled.h4`
    font-size: 48px;
    color: ${theme.color.black};
    margin: 0;
    margin-bottom: 20px;
`
export const ProjectDescription = styled.p`
    font-weight: 300;
    margin-bottom:20px;
    margin-top:0;
`
export const Column2 = styled.div`
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Image = styled.div`
    width: 100%;
    min-height: 350px;
    height: 350px;
    box-shadow: 20px 20px 0 ${theme.color.accent};
    overflow: hidden;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat no-repeat;
    background-position:center center;
`

export const ButtonWrapper = styled.div`

`