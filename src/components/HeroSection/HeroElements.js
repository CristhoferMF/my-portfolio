import styled from "styled-components";
import { THEME } from "../../theme";

export const HeroContainer = styled.div`
  padding: 0 8px;
  box-sizing: border-box;
  margin: auto;
  height: 100vh;
  position: relative;
  max-height: 600px;
  overflow: hidden;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    max-height: 600px;
  }
  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    padding: 0;
    max-width: 1100px;
    max-height: 800px;
  }
  @media screen and (min-width: ${THEME.SCREENS["2xl"]}) {
    max-width: 1200px;
  }
  @media screen and (min-width: ${THEME.SCREENS["4xl"]}) {
    max-width: 1440px;
  }
`;
export const HeroBg = styled.div`
  /* 1version*/
  display: none;
  /* end--1version*/
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    background-image: url(${(props) => props.src});
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: bottom right;
  }
  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    background-size: auto 85%;
  }
  @media screen and (min-width: ${THEME.SCREENS["xl"]}) {
    background-size: auto 92%;
  }
  @media screen and (min-width: ${THEME.SCREENS["2xl"]}) {
    background-size: auto 95%;
  }
`;
export const HeroContent = styled.div`
  height: 100%;
  display: flex;
  /* 1version
    justify-content: flex-start;
    */
  justify-content: center;
  /* end--1version*/
  align-items: center;
  z-index: 1;
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 1version*/
  text-align: center;
  /** */
  .title {
    font-weight: bold;
    margin: 0 0;
    font-size: ${THEME.font.size.h1};
    max-width: 500px;

    @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
      font-size: 8rem;
      line-height: 8rem;
    }

    @media screen and (min-width: ${THEME.SCREENS["2xl"]}) {
      font-size: 9.6rem;
      line-height: 9.6rem;
    }
    @media screen and (min-width: ${THEME.SCREENS["4xl"]}) {
      font-size: 12rem;
      line-height: 12rem;
    }
  }
  .subtitle {
    font-weight: bold;
    color: #33c176;
    margin: 0 0;
    font-size: 3rem;
    line-height: 3rem;
    margin-top: 20px;

    @media screen and (min-width: ${THEME.SCREENS["md"]}) {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
    @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
      font-size: 4.5rem;
      line-height: 4.5rem;
      margin-top: 40px;
    }
    @media screen and (min-width: ${THEME.SCREENS["4xl"]}) {
      font-size: 5.25rem;
      line-height: 5.25rem;
    }
  }
`;

export const Line = styled.img`
  display: none;
  width: 8px;
  bottom: 0px;
  position: absolute;

  @media screen and (min-width: ${THEME.SCREENS["xl"]}) {
    /* 1v 
        display: block;
        */
  }
  @media screen and (min-width: ${THEME.SCREENS["4xl"]}) {
    width: 10px;
  }
`;
