import {
  Header,
  NavWrapper,
  NavMenu,
  NavItem,
  NavLink,
  NavWidgetRight,
  NavWidgetLeft,
} from "./NavbarElements";
import storeScroll from "./scrollFunction";
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { SocialIcon } from "react-social-icons";
import socials from "../../data/social";

const REACT_SCROLL_CONF = {
  smooth: true,
  duration: 500,
  offset: -50,
};

const SocialIconList = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 11px;
  gap: 1em;
`;

export const CustomSocialIcon = styled(SocialIcon)`
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.text};
  max-height: 40px;
  max-width: 40px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = ({ hideMenu }) => {
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    return storeScroll();
  });

  return (
    <>
      <Header id="header-primary">
        <NavWidgetLeft>
          <DarkModeToggle
            onChange={themeContext.themeToggler}
            checked={!themeContext.isLight}
            size={50}
          />
        </NavWidgetLeft>
        <NavWidgetRight>
          <SocialIconList>
            {socials.map(({ network, url }) => (
              <CustomSocialIcon
                key={network}
                target="_blank"
                url={url}
                fgColor={themeContext.text}
                bgColor="transparent"
                network={network}
              />
            ))}
          </SocialIconList>
        </NavWidgetRight>
        {!hideMenu && (
          <NavWrapper>
            <NavMenu>
              <NavItem>
                <NavLink to="home" {...REACT_SCROLL_CONF}>
                  Inicio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="aboutme" {...REACT_SCROLL_CONF}>
                  Acerca de mi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="skills" {...REACT_SCROLL_CONF}>
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="projects" {...REACT_SCROLL_CONF}>
                  Proyectos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="contact" {...REACT_SCROLL_CONF}>
                  Contáctame
                </NavLink>
              </NavItem>
            </NavMenu>
          </NavWrapper>
        )}
      </Header>
    </>
  );
};
export default Navbar;
