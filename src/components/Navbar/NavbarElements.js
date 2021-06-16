import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
    height:80px;
    background: #ffff;
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 999;
`

export const NavWrapper = styled.div`
    height: 80px;
    margin: auto;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavMenu = styled.ul`
    height: 80px;
    list-style: none;
    display: flex;
    text-align: center;
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    padding: 0 1rem;
`
export const NavLink = styled(LinkS)`
    
    font-size: 16px;
    font-weight: 400;
    padding: 0.5rem 0;
    letter-spacing: 0.05rem;
    border-bottom:3px solid transparent;
    cursor:pointer;

    &:hover{
        border-bottom:3px solid #33C176;

    }
`