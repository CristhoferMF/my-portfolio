import styled from "styled-components";
import { THEME } from "../../theme";
import {Link} from 'react-router-dom';

export const ProjectsContainer = styled.div`
 
    padding: 0px 8px;

    @media screen and (min-width : ${THEME.SCREENS["lg"]}){
        padding: 0;
    }
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
    flex-direction: column-reverse;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        flex-direction:row;
    }
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
    color: ${THEME.color.black};
    margin-top: 48px;
    margin-bottom: 20px;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        margin-top:0 ;
    }
`
export const ProjectDescription = styled.p`
    font-weight: 300;
    margin-bottom:20px;
    margin-top:0;
`
export const Column2 = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right:20px;
    
    @media screen and (min-width : ${THEME.SCREENS["md"]}) {
        width: 400px;
    }
    @media screen and (min-width : ${THEME.SCREENS["lg"]}){
        width: 480px;
        padding-right:0;
    }
`

export const Image = styled.div`
    width: 100%;
    height: 300px;

    box-shadow: 20px 20px 0 ${THEME.color.accent};
    overflow: hidden;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat no-repeat;
    background-position:center center;
    background-size: cover;

    @media screen and (min-width : ${THEME.SCREENS["lg"]}){
        height: 350px;
    }
`

export const ButtonWrapper = styled.div`

`

export const ProjectTagsWrapper = styled.div`
    margin-bottom:20px;
`

export const ProjectTag = styled.div`
    background-color: ${THEME.color.lightGray};
    display: inline-block;
    padding: 0.5rem 0.7rem;
    margin-right: 1rem;
    margin-bottom:10px;
    font-weight: 300;
    border-radius: 20px;
`

export const LinkSeeMoreWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin:1rem 0;
`

export const LinkSeeMore = styled(Link)`
    color:${THEME.color.accent};
    text-align: center;
    margin: auto;
    text-decoration:none;
    padding:1rem;
    display: inline-flex;
    align-items: center;
    
`