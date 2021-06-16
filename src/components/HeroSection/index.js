import React from 'react'
import {HeroContainer,HeroBg,HeroContentWrapper,HeroContent,Title, Subtitle,Line} from './HeroElements'
function HeroSection() {
    return (
        <>
            <HeroContainer>
                <HeroBg/>
                <HeroContent>
                    <HeroContentWrapper>
                        <Title>Hola, soy<br/>Cristhofer</Title>
                        <Subtitle>Desarollador<br/>Web</Subtitle>
                        <Line src="/images/line.svg"></Line>
                    </HeroContentWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
