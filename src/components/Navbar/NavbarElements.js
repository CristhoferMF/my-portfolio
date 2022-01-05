import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { THEME } from "../../theme";

export const Header = styled.header`
    height:80px;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 999;
    transition-duration: 0.3s;

    &:not([data-scroll='0']) {
        background:${ props => props.theme.body};
        box-shadow: 0 2px 10px ${ props => (props.theme.isLight) ? "#ccc" : '#2E2532' };
    }

    @media screen and (max-width: ${THEME.SCREENS.sm}){
        position: absolute;
    }

`

export const NavWrapper = styled.nav`
    margin: auto;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: ${THEME.SCREENS.sm}){
        display: none;
    }
   
`
export const NavWidgetRight = styled.div`
    height: 80px;
    position: absolute;
    display: flex;
    align-items: center;
    left: 15px;
`
export const NavMenu = styled.ul`
    height: 80px;
    list-style: none;
    display: flex;
    text-align: center;
    margin:0;
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 1.6em;
`
export const NavLink = styled(LinkS)`
    
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0.5em 0;
    letter-spacing: 0.05em;
    border-bottom:3px solid transparent;
    cursor:pointer;

    &:hover{
        border-bottom:3px solid ${THEME.color.primary};
    }
`