import React from 'react'
import {HeroContainer,HeroBg,HeroContentWrapper,HeroContent,Line} from './HeroElements'
import imgBanner from '../../images/banner.png'
import svgLine from '../../images/line.svg'
import Typical from 'react-typical'
const HERO_TITLE =  "Hola, soy Cristhofer";
const HERO_SUBTITLE =  "Desarollador Web";

function HeroSection() {

    return (
        <>
            <HeroContainer id="home">
                <HeroBg src={imgBanner} />
                <HeroContent>
                    <HeroContentWrapper>
                              <Typical
                                    steps={[HERO_TITLE]}
                                    className="title"
                                    wrapper="h1"
                                />
                                <Typical
                                    steps={[1500,HERO_SUBTITLE]}
                                    className="subtitle"
                                    wrapper="h1"
                                />
                        <Line src={svgLine}></Line>
                    </HeroContentWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
