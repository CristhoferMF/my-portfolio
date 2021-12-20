import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { THEME } from "../../theme";

export const Container = styled.div`
max-width: 1200px;
margin: auto;
padding-left: 8px;
padding-right: 8px;

@media screen and (min-width: ${THEME.SCREENS.lg}){
    padding-left: 0;
    padding-right: 0;
}
`
export const HeaderWrapper = styled.div`
padding-top: 48px;
`
export const Header = styled.h1`
font-size: ${THEME.font.size.h1};
color: ${THEME.color.primary};
margin-top: 0
`

export const BackLink = styled(Link)`
color: ${THEME.color.primary};
text-decoration: underline;
font-size: ${THEME.font.size.base};
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 3rem;
`

export const TitleProject = styled.h2`
    font-size: 2.5rem;
    line-height: 1;
    margin-bottom: .3em;
`