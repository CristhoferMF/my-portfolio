import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import {ContactSectionContainer,ContactSectionWrapper,RowContact,Column1,Column2,Description,Email,CircleSVG} from './ContactElements';
import imgCircleSVG from '../../images/circle.svg'
import HeadingSection from '../HeadingSection';
import Form from './Form';

function ContactSection() {
    return (
        <ContactSectionContainer id="contact">
            <ContactSectionWrapper>
                <CircleSVG src={imgCircleSVG}/>
                <RowContact>
                    <Column1>
                        <HeadingSection>Charlemos</HeadingSection>
                        <Description>Si tiene un proyecto en el cuál le gustaria que trabajase o colaborar con este, 
                            llene este formulario para ponernos en contacto.</Description>
                        <Email href="mailto:cristhofermontalvofiestas@gmail.com">
                            cristhofermontalvofiestas@gmail.com
                            <IoArrowForward/>
                        </Email>
                    </Column1>
                    <Column2>
                        <Form/>
                    </Column2>
                </RowContact>
            </ContactSectionWrapper>
        </ContactSectionContainer>
    )
}

export default ContactSection
