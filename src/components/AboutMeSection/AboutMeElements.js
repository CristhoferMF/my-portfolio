import styled from 'styled-components'
import { theme } from '../../theme'

export const AboutMeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 96px 0;
    position: relative;
`
export const Rectangle = styled.img`
    position: absolute;
    left:-130px;
    top:70px;
    z-index: -1;

    @media only screen and (max-width : 1200px) { 
        display: none;
    }
        /* Desktops, large screens*/
    @media only screen and (max-width : 1400px) { 
        left:-300px;
        top:70px;
    }
    @media screen and (min-width : 1900px ){
        left:70px;
        top:70px;
    }
    @media screen and (min-width : 2400px ){
        left:250px;
        top:70px;
    }
`
export const AboutMeWrapper = styled.div`
    max-width: 900px;
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

`

export const Heading = styled.h3`
    font-size: ${theme.font.size.h3};
    color: ${theme.color.primary};
    margin-bottom: 25px;
`
export const Phrase = styled.p`
    font-size: ${theme.font.size.base};
    font-weight: 300;
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