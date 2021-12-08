import React from 'react'
import {FormWrapper,FormInput,FormTextArea,ButtonWrapper} from './ContactElements'
import Button from '../Button'

function Form() {
    return (
        <form action="https://formspree.io/f/mpzbzwnk" method="POST">
            <FormWrapper>
                <FormInput placeholder="Tu nombre" name="name" required/>
                <FormInput placeholder="Tu correo electrónico" name="email" required/>
                <FormInput placeholder="Asunto" name="asunto" required/>
                <FormTextArea placeholder="Mensaje" name="message" required/>
                <ButtonWrapper>
                    <Button type="submit">Enviar</Button>
                </ButtonWrapper>
            </FormWrapper>
        </form>
    )
}

export default Form
