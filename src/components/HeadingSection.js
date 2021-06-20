import styled from "styled-components";
import { theme } from "../theme";

export const HeadingSection =  styled.h3`
    font-size: ${theme.font.size.h3};
    color: ${theme.color.primary};
    letter-spacing: 0.07em;
    margin-bottom: 25px;
    margin-top: 0px;

    ${props => {
        if(props.textAlign){
            return "text-align:"+props.textAlign
        }
    }}
`