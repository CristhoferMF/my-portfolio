import styled from "styled-components";

export const HeroContainer = styled.div`
    max-width: 1200px;
    margin:auto ;
    height: 100vh;
    max-height: 960px;
    position: relative;
    
    @media screen and (min-width : 1900px) { 
        max-width: 1440px;
    }
`
export const HeroBg = styled.div`
    background-image: url("/images/banner.png");
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-size: auto 95%;
    background-repeat: no-repeat;
    background-position: bottom right;
`
export const HeroContent = styled.div`
    height:100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
`
export const HeroContentWrapper  = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.h1`
    font-size:96px;
    font-weight:bold;
    line-height: 100px;
    margin:0 0;

    @media screen and (min-width : 1900px) {
        font-size: 120px;
        line-height: 120px;
    }
`
export const Subtitle = styled.h2`
    font-size:72px;
    font-weight:bold;
    line-height: 74px;
    color:#33C176;
    margin:0 0;
    margin-top: 40px;

    @media screen and (min-width : 1900px) {
        font-size: 84px;
        line-height: 90px;

    }
`
export const Line = styled.img`
    width: 8px;
    position: absolute;
    bottom: 0px;

    @media screen and (min-width : 1900px) {
        width: 10px;
    }
`