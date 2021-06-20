import styled from "styled-components";
import { theme } from "../theme";

export const Button = styled.button`
    background-color: ${theme.color.accent};
    padding: 1rem 2rem;
    border:none;
    color:${theme.color._white};
    cursor:pointer;
    transition-duration: 0.2s;
    
    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.8;
    }
`