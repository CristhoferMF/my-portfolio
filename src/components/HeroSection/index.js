import React from 'react'
import {HeroContainer,HeroBg,HeroContentWrapper,HeroContent,Title, Subtitle,Line} from './HeroElements'
import imgBanner from '../../images/banner.png'
import svgLine from '../../images/line.svg'


function HeroSection() {
    return (
        <>
            <HeroContainer id="home">
                <HeroBg src={imgBanner} />
                <HeroContent>
                    <HeroContentWrapper>
                        <Title>Hola, soy<br/>Cristhofer</Title>
                        <Subtitle>Desarollador<br/>Web</Subtitle>
                        <Line src={svgLine}></Line>
                    </HeroContentWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
