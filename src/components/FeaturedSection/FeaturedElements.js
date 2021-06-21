import styled from "styled-components";
import {THEME} from '../../theme'

export const FeaturedContainer = styled.div`
    width: 100%;
    background: ${THEME.color.darkGray};
`
export const FeaturedContent = styled.div`
    display: flex;
    margin:auto;
    max-width: 700px;
    padding: 0 2rem;
    justify-content: center;
`
export const ExperienceWrapper = styled.div`
    padding-right: 1.5rem;
    padding: 3rem 0;
`

export const Experience = styled.div`
    font-weight:bold;
    color: ${THEME.color.primary};
    font-size: ${THEME.font.size.h3};
`

export const PhraseWrapper = styled.div`
    padding-left: 1.5rem;
    display:flex;
    align-items: center;
`

export const Phrase = styled.p`
    font-weight:500;
    font-size:24px;
    text-align: center;
    color: ${THEME.color._white};
`