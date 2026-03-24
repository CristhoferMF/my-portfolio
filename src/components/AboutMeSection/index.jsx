import React from "react";
import {
  AboutMeContainer,
  Rectangle,
  AboutMeWrapper,
  AboutMeRow,
  Column1,
  Column2,
  TextWrapper,
  Phrase,
  Image,
  ImageWrapper,
} from "./AboutMeElements";
import HeadingSection from "../HeadingSection";
import imgReactangle from "../../images/rectangle.svg";
import imgProfile from "../../images/person.jpg";
import ThemeLink from "../ThemeLink";
import { useTranslation } from "react-i18next";

function AboutMeSection() {
  const { t } = useTranslation();

  return (
    <>
      <AboutMeContainer id="aboutme">
        <AboutMeWrapper>
          <Rectangle src={imgReactangle} />
          <AboutMeRow>
            <Column1>
              <TextWrapper>
                <HeadingSection>{t("aboutme.title")}</HeadingSection>
                <Phrase>
                  {t("aboutme.hello my name is...")}&nbsp;
                  <b>{t("aboutme.software development")}</b>&nbsp;💻&nbsp;
                  {t("aboutme.after i left the college")}.
                </Phrase>
                <Phrase>
                  {t("aboutme.the last two years...")}
                  <ThemeLink target="_blank" href="http://fim.uni.edu.pe/">
                    &nbsp;FIM UNI&nbsp;
                  </ThemeLink>
                  {t("aboutme.grew up mi interest..")}
                  <br />
                  {t("aboutme.if you keep scrolling down...")}
                </Phrase>
                <hr />
                <Phrase>{t("aboutme.computers are not everything...")}</Phrase>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper>
                <Image src={imgProfile} />
              </ImageWrapper>
            </Column2>
          </AboutMeRow>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  );
}

export default AboutMeSection;
