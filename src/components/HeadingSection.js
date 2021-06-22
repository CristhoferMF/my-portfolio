import styled from "styled-components";
import { THEME } from "../theme";

const HeadingSection =  styled.h3`
    font-size: ${THEME.font.size.h3};
    color: ${THEME.color.primary};
    letter-spacing: 0.07em;
    margin-bottom: 25px;
    margin-top: 0px;

    ${({textAlign = 'left'}) => {
        if(textAlign){
            return "text-align:"+textAlign
        }
    }}
`

export default HeadingSection