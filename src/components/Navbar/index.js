import {Nav,NavWrapper,NavMenu,NavItem,NavLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavWrapper>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="home">Inicio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="aboutme">Acerca de mi</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="skills">Sills & Experiencia</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="proyects">Proyectos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="contact">Contáctame</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavWrapper>
            </Nav>
        </>
    )
}

export default Navbar
