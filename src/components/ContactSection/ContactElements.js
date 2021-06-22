import styled from "styled-components";
import { THEME } from "../../theme";

export const ContactSectionContainer = styled.div`
    width: 100%;
    overflow: hidden;
    margin-top: 96px;
`

export const ContactSectionWrapper = styled.div`
    max-width: 900px;
    margin: auto;
    position: relative;
    //change when form in
    min-height: 500px;
`

export const CircleSVG = styled.img`
    position: absolute;
    top: 150px;
    left: -450px;
    z-index:-1;
`

export const RowContact = styled.div`
    display: flex;
    z-index:1;
` 

export const Column1 = styled.div`
    flex:1;
    display: block;
    padding-right: 40px;
`

export const Description = styled.p`
    margin-bottom: 20px;
`

export const Email = styled.a`
    color:${THEME.color.accent};
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor:pointer;
     
     &:hover{
         cursor:pointer;
         text-decoration: underline;
     }
`

export const Column2 = styled.a`
    flex:1;
`

/* Form */

export const FormWrapper = styled.div`
    padding: 0 30px;
    display: flex;
    flex-direction: column;
`

export const FormInput = styled.input`
    padding: 20px;
    margin: 10px 0;
    background-color: #F0F4F9;
    border:none;

    &:focus{
        outline: none;
    }
`

export const FormTextArea = styled.textarea`
    padding: 20px;
    margin: 10px 0;
    background-color: #F0F4F9;
    border:none;
    resize: none;
`
export const ButtonWrapper = styled.div`
    margin: 10px 0;
`