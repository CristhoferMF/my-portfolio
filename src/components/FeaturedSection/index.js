import React from 'react'
import {FeaturedContainer,FeaturedContent,ExperienceWrapper,Experience,PhraseWrapper,Phrase} from './FeaturedElements';

function FeaturedSection() {
    return (
        <>
            <FeaturedContainer>
                <FeaturedContent>
                    <ExperienceWrapper>
                        <Experience>+2<br/>AÑOS</Experience>
                    </ExperienceWrapper>
                    <PhraseWrapper>
                        <Phrase>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tortor, gravida ames id urna”
                        </Phrase>
                    </PhraseWrapper>
                </FeaturedContent>
            </FeaturedContainer>
        </>
    )
}

export default FeaturedSection
