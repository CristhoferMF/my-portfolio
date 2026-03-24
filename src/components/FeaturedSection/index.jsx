import React from "react";
import {
  FeaturedContainer,
  FeaturedWrapper,
  ExperienceWrapper,
  Experience,
  PhraseWrapper,
  Phrase,
  ExperienceSmall,
} from "./FeaturedElements";
import { useTranslation } from "react-i18next";

function FeaturedSection() {
  const { t } = useTranslation();
  return (
    <>
      <FeaturedContainer>
        <FeaturedWrapper>
          <ExperienceWrapper>
            <Experience>
              3<br />
              {t("featured.years").toUpperCase()}
              <br />
            </Experience>
            <ExperienceSmall>
              {t("featured.experience").toUpperCase()}
            </ExperienceSmall>
          </ExperienceWrapper>
          <PhraseWrapper>
            <Phrase>“{t("featured.quote")}"</Phrase>
          </PhraseWrapper>
        </FeaturedWrapper>
      </FeaturedContainer>
    </>
  );
}

export default FeaturedSection;
