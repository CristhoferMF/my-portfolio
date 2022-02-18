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

function FeaturedSection() {
  return (
    <>
      <FeaturedContainer>
        <FeaturedWrapper>
          <ExperienceWrapper>
            <Experience>
              3<br />
              AÑOS
              <br />
            </Experience>
            <ExperienceSmall>EXPERIENCIA</ExperienceSmall>
          </ExperienceWrapper>
          <PhraseWrapper>
            <Phrase>
              “Creo que el software es lo que mueve la sociedad actual mirando a
              un mundo conectado sin barreras"
            </Phrase>
          </PhraseWrapper>
        </FeaturedWrapper>
      </FeaturedContainer>
    </>
  );
}

export default FeaturedSection;
