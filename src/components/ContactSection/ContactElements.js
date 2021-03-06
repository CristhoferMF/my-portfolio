import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { THEME } from "../../theme";

export const ContactSectionContainer = styled.div`
  overflow: hidden;
  padding: 48px 8px;
  padding-bottom: 96px;

  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ContactSectionWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  position: relative;
`;

export const CircleSVG = styled.img`
  display: none;

  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    display: block;
    position: absolute;
    top: 150px;
    left: -450px;
    z-index: -1;
    filter: ${({ theme }) =>
      theme.isLight ? "" : "invert(70%) brightness(15%);"};
  }
`;

export const RowContact = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media screen and (min-width: ${THEME.SCREENS["lg"]}) {
    flex-direction: row;
  }
`;

export const Column1 = styled.div`
  flex: 1;
  display: block;
  padding-right: 40px;
`;

/* Column1 */
export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 1.6rem;
`;

export const Email = styled.a`
  color: ${THEME.color.accent};
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

/* End Column1 */

export const Column2 = styled.a`
  flex: 1;
`;

/* Form */

export const FormWrapper = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;

  @media screen and (max-width: ${THEME.SCREENS["lg"]}) {
    padding: 20px 0;
    padding-bottom: 90px;
  }
`;

export const FormInput = styled.input`
  padding: 20px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  border: none;

  &:focus,
  &:focus-within {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.text};
  }
`;

export const FormTextArea = styled.textarea`
  padding: 20px;
  margin: 10px 0;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text};
  border: none;
  resize: none;

  &:focus,
  &:focus-within {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.text};
  }
`;
export const ButtonWrapper = styled.div`
  margin: 10px 0;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  margin-top: 1.5em;
`;
export const CustomSocialIcon = styled(SocialIcon)`
  max-height: 40px;
  max-width: 40px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 50%;
`;
