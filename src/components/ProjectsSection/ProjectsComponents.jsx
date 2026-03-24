import styled from "styled-components";
import { THEME } from "../../theme";
import { Link } from "react-router-dom";

export const ProjectsContainer = styled.div`
  padding: 48px 8px;

  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    padding: 96px 0;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 900px;
  margin: auto;
`;
/** Project */
export const ProjectWrapper = styled.div`
  padding: ${(props) => props.paddingVertical || "60px"} 0;
`;
export const ProjectRow = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    flex-direction: row;
  }
`;
export const Column1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 2rem;
`;

export const ProjectTitle = styled.h4`
  font-size: 48px;
  margin-top: 48px;
  margin-bottom: 20px;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    margin-top: ${(props) => (props.position === "top" ? "2rem" : "0")};
  }
`;
export const ProjectDescription = styled.p`
  font-weight: 300;
  margin-bottom: 20px;
  margin-top: 0;
  font-size: ${THEME.font.size.base};
`;
export const Column2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20px;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    width: 400px;
  }
  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    width: 480px;
    padding-right: 0;
  }

  a {
    min-width: 100%;
  }
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  box-shadow: 20px 20px 0 ${THEME.color.accent};
  overflow: hidden;
  object-fit: cover;
  margin: auto 20px 20px auto;
  background-color: #3b3f45;
  filter: ${({ theme }) => (theme.isLight ? "" : "brightness(90%)")};
  //transition: all 0.6s ease;
  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    height: 350px;
  }

  &:hover {
    background-color: transparent;
    transition: background-color 0.25s;
  }
`;

export const ButtonWrapper = styled.div``;

export const ProjectTagsWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 1.6rem;
`;

export const ProjectTag = styled.div`
  background-color: ${(props) => props.theme.term};
  display: inline-block;
  padding: 0.5em 0.7em;
  margin-right: 1em;
  margin-bottom: 0.55em;
  font-weight: 300;
  border-radius: 20px;
  color: ${(props) => props.theme.color};
  user-select: none;
`;

export const LinkSeeMoreWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
`;

export const LinkSeeMore = styled(Link)`
  color: ${THEME.color.accent};
  text-align: center;
  margin: auto;
  text-decoration: underline;
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  font-size: 1.6rem;
`;
