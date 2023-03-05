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
  const { t, i18n } = useTranslation();

  return (
    <>
      <HeroContainer id="home">
        <HeroBg src={imgBanner} />
        <HeroContent>
          <HeroContentWrapper>
            {i18n.language === "en" && <EnglishTypeAnimation />}
            {i18n.language === "es" && <SpanishTypeAnimation />}
            <Line src={svgLine}></Line>
          </HeroContentWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
