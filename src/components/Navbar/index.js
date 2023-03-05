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
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

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

export const LanguageWrapper = styled("div")`
  display: flex;
  gap: 0.8rem;
  margin-left: 3em;
  cursor: pointer;
`;

const Navbar = ({ hideMenu }) => {
  const { t, i18n } = useTranslation();
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
          <LanguageWrapper>
            <ReactCountryFlag
              svg
              onClick={() => {
                i18n.changeLanguage("en");
              }}
              className="emojiFlag"
              countryCode="US"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
              aria-label="United States"
            />
            <ReactCountryFlag
              className="emojiFlag"
              svg
              onClick={() => {
                i18n.changeLanguage("es");
              }}
              countryCode="ES"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
              aria-label="United States"
            />
          </LanguageWrapper>
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
                  {t("navbar.home")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="aboutme" {...REACT_SCROLL_CONF}>
                  {t("navbar.about me")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="skills" {...REACT_SCROLL_CONF}>
                  {t("navbar.skills")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="projects" {...REACT_SCROLL_CONF}>
                  {t("navbar.projects")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="contact" {...REACT_SCROLL_CONF}>
                  {t("navbar.contact me")}
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
