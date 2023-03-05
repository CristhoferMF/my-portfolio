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
                <HeadingSection>Acerca de mi</HeadingSection>
                <Phrase>
                  {t("aboutme.hello my name is...")}&nbsp;
                  <b>{t("aboutme.software development")}</b>&nbsp;💻&nbsp;
                  {t("aboutme.after i left the college")}.
                </Phrase>
                <Phrase>
                  En los dos años finales de la carrera trabajé en la
                  <ThemeLink target="_blank" href="http://fim.uni.edu.pe/">
                    &nbsp;FIM UNI&nbsp;
                  </ThemeLink>
                  y aumentó mi interes por el mundo del desarrollo web.
                  Actualmente mi deseo es seguir creciendo junto con esta
                  industria tan cambiante. <br />
                  Si sigues bajando verás en qué tecnologias me he desempeñado.
                </Phrase>
                <hr />
                <Phrase>
                  Como no todo se trata de computadoras, En mi tiempo libre me
                  gusta tocar la guitarra española 🎵, leer y escribir.
                  <br />
                </Phrase>
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
