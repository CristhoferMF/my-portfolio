import styled from "styled-components";
import { THEME } from "../../theme";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 96px 8px;

  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    padding: 96px 0;
  }
`;
export const SkillsWrapper = styled.div`
  max-width: 900px;
  width: 100%;
`;
export const SkillsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
`;
export const Column1 = styled.div`
  display: none;
  min-height: 600px;
  max-height: 600px;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    display: flex;
    align-items: center;
    flex: 1;
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  filter: ${({ theme }) => (theme.isLight ? "" : "brightness(90%);")};
  background-position: center;
`;
export const Column2 = styled.div`
  flex: 2;

  @media screen and (min-width: ${THEME.SCREENS["md"]}) {
    padding-left: 50px;
  }
`;

export const ContentWrapper = styled.div``;
