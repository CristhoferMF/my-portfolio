import React from 'react'
import {FeaturedContainer,FeaturedWrapper,ExperienceWrapper,Experience,PhraseWrapper,Phrase} from './FeaturedElements';

function FeaturedSection() {
    return (
        <>
            <FeaturedContainer>
                <FeaturedWrapper>
                    <ExperienceWrapper>
                        <Experience>+2<br/>AÑOS</Experience>
                    </ExperienceWrapper>
                    <PhraseWrapper>
                        <Phrase>
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tortor, gravida ames id urna”
                        </Phrase>
                    </PhraseWrapper>
                </FeaturedWrapper>
            </FeaturedContainer>
        </>
    )
}

export default FeaturedSection
