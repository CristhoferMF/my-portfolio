import styled from "styled-components";
import {THEME} from '../../theme'

export const FeaturedContainer = styled.div`
    width: 100%;
    background: ${THEME.color.darkGray};
`
export const FeaturedWrapper = styled.div`
    display: flex;
    margin:auto;
    max-width: 700px;
    padding: 1rem 2rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        flex-direction: row;
    }
`
export const ExperienceWrapper = styled.div`
        padding: 1rem 0 0 0;
    
    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        padding-right: 1.5rem;
        padding: 3rem 0;
    }
`

export const Experience = styled.div`
    font-weight:bold;
    color: ${THEME.color.primary};
    font-size: ${THEME.font.size.h3};
    text-align:center;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        text-align: left;
    }
`

export const PhraseWrapper = styled.div`
    
    display:flex;
    align-items: center;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        padding-left: 1.5rem;
    }
`

export const Phrase = styled.p`
    font-weight:500;
    font-size:24px;
    text-align: center;
    color: ${THEME.color._white};
`