import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContentWrapper,
  HeroContent,
  Line,
} from "./HeroElements";
import imgBanner from "../../images/banner.png";
import svgLine from "../../images/line.svg";
import EnglishTypeAnimation from "./EnglishTypeAnimation";
import SpanishTypeAnimation from "./SpanishTypeAnimation";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { i18n } = useTranslation();

  console.log(i18n.language);
  return (
    <>
      <HeroContainer id="home">
        <HeroBg src={imgBanner} />
        <HeroContent>
          <HeroContentWrapper>
            {(i18n.language.startsWith("en") || !i18n.language) && (
              <EnglishTypeAnimation />
            )}
            {i18n.language.startsWith("es") && <SpanishTypeAnimation />}
            <Line src={svgLine}></Line>
          </HeroContentWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
