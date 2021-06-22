import styled from "styled-components";
import { THEME } from "../theme";

const Button = styled.button`
    background-color: ${THEME.color.accent};
    padding: 1rem 2rem;
    border:none;
    color:${THEME.color._white};
    cursor:pointer;
    transition-duration: 0.2s;
    
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.8;
    }
`

export default Button;