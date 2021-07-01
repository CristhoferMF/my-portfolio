import React from 'react'
import {HeroContainer,HeroBg,HeroContentWrapper,HeroContent,Title, Subtitle,Line} from './HeroElements'
import imgBanner from '../../images/banner.png'
import svgLine from '../../images/line.svg'
import TitleTypingEffect from './TitleTypingEffect';

const HERO_TITLE =  "Hola, soy<br/>Cristhofer";
const HERO_SUBTITLE =  "Desarollador<br/>Web";

function HeroSection() {

    return (
        <>
            <HeroContainer id="home">
                <HeroBg src={imgBanner} />
                <HeroContent>
                    <HeroContentWrapper>
                        <TitleTypingEffect text={HERO_TITLE} delay={0} duration={80} />
                        <TitleTypingEffect text={HERO_SUBTITLE} component={<Subtitle/>} delay={2000} duration={100}/>
                        <Line src={svgLine}></Line>
                    </HeroContentWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
