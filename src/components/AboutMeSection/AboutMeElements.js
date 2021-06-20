import styled from 'styled-components'
import { theme } from '../../theme'

export const AboutMeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 96px 0;
`
export const Rectangle = styled.img`
    position: absolute;
    left:-480px;
    top:-10px;
    z-index: -1;
`
export const AboutMeWrapper = styled.div`
    max-width: 900px;
    position: relative;
`
export const AboutMeRow= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column1 = styled.div`
    flex:1;
`

export const TextWrapper = styled.div`
    margin-right: 1rem;
`

export const Phrase = styled.p`
    font-size: ${theme.font.size.base};
    font-weight: 400;
    color: ${theme.color.black};
`
export const Column2 = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    
`

export const ImageWrapper = styled.p`
    width: 300px;
`

export const Image = styled.img`
    width: 90%;
    box-shadow: 20px 20px 0px ${theme.color.accent};
`