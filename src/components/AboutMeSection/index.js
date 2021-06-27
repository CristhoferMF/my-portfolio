import React from 'react'
import {AboutMeContainer,Rectangle,AboutMeWrapper,AboutMeRow,Column1,Column2,TextWrapper,Phrase,Image,ImageWrapper} from './AboutMeElements'
import HeadingSection from '../HeadingSection'
import imgReactangle from '../../images/rectangle.svg'
import imgProfile from '../../images/person.jpg'
import ThemeLink from '../ThemeLink'

function AboutMeSection() {
    return (
        <>
            <AboutMeContainer id="aboutme">
                <AboutMeWrapper>
                    <Rectangle src={imgReactangle}/>
                    <AboutMeRow>
                        <Column1>
                            <TextWrapper>
                                <HeadingSection>Acerca de mi</HeadingSection>
                                <Phrase>¡Hola! Mi nombre es Cristhofer Montalvo y actualmente vivo en Perú. Desde pequeño tuve mucha curiosidad sobre el mundo
                                     de la informática. Esto me llevo a estudiar <b>Desarrollo de Software</b> 💻 despues de concluir el colegio. En los dos años finales de la carrera trabajé en la  
                                     <ThemeLink href="http://fim.uni.edu.pe/"> FIM UNI</ThemeLink> y aumentó mi interes por el mundo del desarrollo web.<br/>
                                     Actualmente mi deseo es seguir creciendo junto con esta industria tan cambiante. <br/>
                                     Si sigues bajando verás en qué tecnologias me he desempeñado.<hr/>
                                     Como no todo se trata de computadoras, En mi tiempo libre me gusta tocar la guitarra española 🎵, leer y escribir.<br/>
                                </Phrase>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Image src={imgProfile}/>
                            </ImageWrapper>
                        </Column2>
                    </AboutMeRow>
                </AboutMeWrapper>
            </AboutMeContainer>
        </>
    )
}

export default AboutMeSection
