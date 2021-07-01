import React, { useEffect, useState } from 'react'
import {HeroContainer,HeroBg,HeroContentWrapper,HeroContent,Title, Subtitle,Line} from './HeroElements'
import imgBanner from '../../images/banner.png'
import svgLine from '../../images/line.svg'

const HERO_TITLE =  "Hola, soy Cristhofer";

function HeroSection() {
    const [iLetter,setILetter] = useState(0)
    const [heroTitle,setHeroTitle] = useState('');
    
    useEffect(() => {
        
        let timer = setTimeout(() => {
            if (iLetter < HERO_TITLE.length) {
                setHeroTitle( prevHeroTitle => prevHeroTitle+(HERO_TITLE.charAt(iLetter)))
                setILetter(iLetter+1);
            }
        }, 50);

        return () => {
            clearTimeout(timer);
        };
    },[iLetter])
    return (
        <>
            <HeroContainer id="home">
                <HeroBg src={imgBanner} />
                <HeroContent>
                    <HeroContentWrapper>
                        <Title>{heroTitle}</Title>
                        <Subtitle>Desarollador<br/>Web</Subtitle>
                        <Line src={svgLine}></Line>
                    </HeroContentWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
