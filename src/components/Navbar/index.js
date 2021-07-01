import {Nav,NavWrapper,NavMenu,NavItem,NavLink} from './NavbarElements'
import storeScroll from './scrollFunction'
import { useEffect } from 'react'

const REACT_SCROLL_CONF = {
    smooth:true,
    duration:500,
    offset:-50
}
const Navbar = () => {

    useEffect(() => {
        return storeScroll();
    })
    
    return (
        <>
            <Nav id='header-primary'>
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
            </Nav>
        </>
    )
}
export default Navbar
