import React, { useContext } from "react";
import { IoArrowForward } from "react-icons/io5";
import {
  ContactSectionContainer,
  ContactSectionWrapper,
  RowContact,
  Column1,
  Column2,
  Description,
  Email,
  CircleSVG,
  SocialsWrapper,
  CustomSocialIcon,
} from "./ContactElements";
import imgCircleSVG from "../../images/circle.svg";
import HeadingSection from "../HeadingSection";
import Form from "./Form";
import socials from "../../data/social";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

function ContactSection(props) {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  return (
    <ContactSectionContainer id="contact">
      <ContactSectionWrapper>
        <CircleSVG src={imgCircleSVG} />
        <RowContact>
          <Column1>
            <HeadingSection>{t("contact.lets talk")}</HeadingSection>
            <Description>{t("contact.if you have a project...")}</Description>
            <Email href="mailto:cristhofermontalvo@gmail.com">
              cristhofermontalvo@gmail.com
              <IoArrowForward />
            </Email>
            <SocialsWrapper>
              {socials.map(({ network, url }) => (
                <CustomSocialIcon
                  key={network}
                  target="_blank"
                  url={url}
                  fgColor={themeContext.text}
                  bgColor="transparent"
                  network={network}
                />
              ))}
            </SocialsWrapper>
          </Column1>
          <Column2>
            <Form />
          </Column2>
        </RowContact>
      </ContactSectionWrapper>
    </ContactSectionContainer>
  );
}

export default ContactSection;
