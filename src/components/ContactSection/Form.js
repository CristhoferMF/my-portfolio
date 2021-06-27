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
                <FormTextArea placeholder="Mensaje"/>
                <ButtonWrapper>
                    <Button type="submit">Enviar</Button>
                </ButtonWrapper>
                <small style={{color:'#4c4c4c',fontWeight:300,marginTop:10}}>* Este formulario todavia no esta operativo</small>
            </FormWrapper>
        </form>
    )
}

export default Form
