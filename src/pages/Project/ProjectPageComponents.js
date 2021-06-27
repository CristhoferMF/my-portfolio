import styled from "styled-components";
import { THEME } from "../../theme";

export const ProjectPageContainer = styled.div`
    max-width: 900px;
    margin: auto;
    padding-left: 8px;
    padding-right: 8px;

    @media screen and (min-width: ${THEME.SCREENS.lg}){
        padding-left: 0;
        padding-right: 0;
    }
`
export const ProjectHeadingRow = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items:center;
    margin-top: 48px;

    @media screen and (min-width: ${THEME.SCREENS.md}){
        flex-direction: row;
        gap: 20px;
        margin-top: 96px;
        margin-bottom: 64px;
    }
`
export const ProjectTitleWrapper = styled.div`
    flex:1;
    width: 100%;
`
export const ProjectTitle = styled.h1`
    margin-top:0;
    flex:1;
    font-size:${THEME.font.size.h3};
    color: ${THEME.color.primary};
    line-height:${THEME.font.size.h3};

    @media screen and (min-width: ${THEME.SCREENS.md}){
        font-size:64px;
        line-height:64px;
    }
`
export const ProjectSubHeading = styled.h2`

    margin-bottom:1rem;
    color:${THEME.color.accent}
`

export const ProjectImageWrapper = styled.div`
    flex:1;
    
`
export const ProjectImage = styled.img`

    max-width: 300px;
    max-height: 500px;

    @media screen and (min-width: ${THEME.SCREENS.md}){
        font-size:64px;
        max-width: 100%;
    }
`

export const ProjectDescription = styled.p`
    width: 100%;
    font-size:24px;
    font-weight:300;
`

export const GalleryTitle = styled.h3`
    font-size:24px;
    color:${THEME.color.accent}
`


export const GalleryWrapper = styled.div`
    display: block;
    min-height: 1px;
    width: 100%;
    overflow: auto;
    padding-bottom: 96px;
`