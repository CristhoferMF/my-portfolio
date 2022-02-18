import styled, { css } from "styled-components";
import { THEME } from "../../../theme";

export const AccordionSkillsTypeList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionSkillsTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SkillsListHeadingWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid ${THEME.color.cyanBlue};
`;

export const SkillsListHeading = styled.h4`
  font-size: ${THEME.font.size.h3};
  letter-spacing: 0;
  text-transform: uppercase;
  margin: 0;
  margin: 1.1rem 0;
`;
export const SkillsListIcon = styled.div`
  font-size: 30px;
`;

export const SkillsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  max-height: 0;
  row-gap: 1.5em;
  overflow: hidden;
  flex-direction: column;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  ${(props) =>
    props.isVisible &&
    css`
      max-height: 999px;
      height: auto;
      overflow: auto;
      padding-bottom: 3rem;
      padding-top: 3rem;
    `}
`;
export const SkillImageWrapper = styled.div`
  border: 1px solid ${THEME.color.cyanBlue};
  width: 60px;
  height: 60px;
  padding: 0.75em;
`;

export const SkillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  ${({ theme, isInverted }) =>
    !theme.isLight &&
    css`
      filter: ${isInverted ? "invert(100%)" : "invert(0%)"} opacity(0.8);
    `}
`;
