import React from 'react'
import {AboutMeContainer,Rectangle,AboutMeWrapper,AboutMeRow,Column1,Column2,TextWrapper,Heading,Phrase,Image,ImageWrapper} from './AboutMeElements'
function AboutMeSection() {
    return (
        <>
            <AboutMeContainer id="aboutme">
                <AboutMeWrapper>
                    <Rectangle src="/images/rectangle.svg"/>
                    <AboutMeRow>
                        <Column1>
                            <TextWrapper>
                                <Heading>Acerca de mi</Heading>
                                <Phrase>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas urna porta ut vestibulum massa
                                    interdum ac vitae. Elit bibendum tortor, habitasse nec vel purus.<br></br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas urna porta ut vestibulum massa interdum ac vitae. 
                                    Elit bibendum tortor, habitasse nec vel purus.  </Phrase>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Image src="/images/person.jpg"/>
                            </ImageWrapper>
                        </Column2>
                    </AboutMeRow>
                </AboutMeWrapper>
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
