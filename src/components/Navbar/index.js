import {Header,NavWrapper,NavMenu,NavItem,NavLink,NavWidgetRight} from './NavbarElements'
import storeScroll from './scrollFunction'
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect,useContext,useState } from 'react'
import { ThemeContext } from 'styled-components';
const REACT_SCROLL_CONF = {
    smooth:true,
    duration:500,
    offset:-50
}
const Navbar = ({onThemeToggler}) => {

    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        return storeScroll();
    })
    
    return (
        <>
            <Header id='header-primary'>
                <NavWidgetRight>
                    <DarkModeToggle
                        onChange={onThemeToggler}
                        checked={!themeContext.isLight}
                        size={50}
                    />
                </NavWidgetRight>
                <NavWrapper>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="home" {...REACT_SCROLL_CONF}>Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="aboutme" {...REACT_SCROLL_CONF} >Acerca de mi</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skills" {...REACT_SCROLL_CONF} >Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="projects" {...REACT_SCROLL_CONF} >Proyectos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact" {...REACT_SCROLL_CONF} >Contáctame</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavWrapper>
            </Header>
        </>
    )
}
export default Navbar
