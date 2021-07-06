import styled from 'styled-components'
import { THEME } from '../../theme'

export const AboutMeContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 48px 8px;
    overflow: hidden;
    
    @media screen and (min-width : ${THEME.SCREENS["lg"]}){
        padding: 96px 0px;
        overflow: visible;
    }
`
/* SVG  */
export const Rectangle = styled.img`
    position: absolute;
    left:-570px;
    top:-10px;
    z-index: -1;
    filter: ${ ({theme}) => theme.isLight ? '' : 'invert(70%) brightness(20%);' };

    @media screen and (min-width : ${THEME.SCREENS["lg"]}){
        left:-480px;
        top:0;
    }
`
/* SVG  */

export const AboutMeWrapper = styled.div`
    max-width: 900px;
    position: relative;
`
export const AboutMeRow= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column-reverse;

    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        flex-direction: row;
    }
`

export const Column1 = styled.div`
    flex:1;
`

/*Column1 Starts */

export const TextWrapper = styled.div`
    
`

export const Phrase = styled.p`
    font-size: ${THEME.font.size.base};
    line-height:1.5rem;
    font-weight: 300;
    text-align: justify;

    @media screen and (min-width : ${THEME.SCREENS.md}){
        text-align: left;

    }
`

/*Column1 Ends */

export const Column2 = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    
    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        justify-content: flex-end;
    }
`
/*Column2 Starts */
export const ImageWrapper = styled.div`
    width: 300px;
`

export const Image = styled.img`
    width: 90%;
    box-shadow: 20px 20px 0px ${THEME.color.accent};
    margin-bottom:60px;
    filter: ${ ({theme})  => theme.isLight ? '' : 'brightness(90%);' };
    
    @media screen and (min-width : ${THEME.SCREENS["md"]}){
        margin-bottom:0px;
    }
`
/*Column2 Ends */