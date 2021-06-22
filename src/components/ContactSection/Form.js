import React from 'react'
import {FormWrapper,FormInput,FormTextArea,ButtonWrapper} from './ContactElements'
import Button from '../Button'

function Form() {
    return (
        <form>
            <FormWrapper>
                <FormInput placeholder="Tu nombre"/>
                <FormInput placeholder="Tu correo electrónico"/>
                <FormInput placeholder="Asunto"/>
                <FormTextArea placeholder="Detalles"/>
                <ButtonWrapper>
                    <Button type="submit">Enviar</Button>
                </ButtonWrapper>
            </FormWrapper>
        </form>
    )
}

export default Form
