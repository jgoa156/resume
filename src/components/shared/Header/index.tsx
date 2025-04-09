import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Scrollspy from "react-scrollspy";
import { useTranslation } from "next-i18next";
import { Dropdown } from "react-bootstrap";

// Shared
import Links, { ILink } from "components/shared/Links";

// Custom
import {
  HeaderWrapper,
  TitleWrapper,
  Group,
  LinkWrapper,
  GoToTop,

  Burger,
  Sidenav,
  SidenavBackground,

  LanguageDropdown,
  LanguageDropdownMenu,
  LanguageDropdownItem
} from "./styles";

export default function Header() {
  const { t, ready, i18n } = useTranslation(["main"]);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [showSidenav, setShowSidenav] = useState(false);

  const links = Array.from(t("options.links", { returnObjects: true }) as any[]);

  // Go to top
  const bannerHeight = isTablet ? 400 : 500;
  useEffect(() => {
    setLoaded(true);
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY >= bannerHeight - 50);
      setShowGoToTop(window.scrollY >= bannerHeight + 50);
    });
  }, []);

  // Change language
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Lock scroll
  /*useEffect(() => {
    if (showSidenav) disableScroll.on();
    else disableScroll.off();
  }, [showSidenav]);*/

  // Social media links
  const socialMediaLinks: ILink[] = Array.from(t("contact.content", { returnObjects: true }) as any[]);

  if (!ready) return null;
  return (
    <HeaderWrapper scrolled={scrolled}>
      <nav>
        <TitleWrapper scrolled={scrolled}>
          <img src={`${process.env.basePath}/img/logo.png`} /> Guilherme
        </TitleWrapper>

        <Group>
          <Dropdown align="end" style={{ width: "fit-content" }}>
            <LanguageDropdown variant="secondary">
              <i className={"fas fa-globe"} /> {i18n.language.toUpperCase()}
            </LanguageDropdown>

            <LanguageDropdownMenu renderOnMount={true}>
              <LanguageDropdownItem onClick={() => changeLanguage("en")}>EN</LanguageDropdownItem>
              <LanguageDropdownItem onClick={() => changeLanguage("pt")}>PT</LanguageDropdownItem>
            </LanguageDropdownMenu>
          </Dropdown>

          {loaded
            ? !isTablet
              ? (
                <LinkWrapper>
                  <Scrollspy items={links.map((link) => link.href)} currentClassName={"spy"} offset={-100}>
                    {links.map((link, index) => {
                      return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
                    })}
                  </Scrollspy>
                </LinkWrapper>
              )
              : (
                <Burger onClick={() => setShowSidenav(true)} aria-expanded={showSidenav}>
                  <i className={"fas fa-bars"} />
                </Burger>
              )
            : null
          }
        </Group>

        <GoToTop href={"#banner"} display={showGoToTop} className={"fas fa-arrow-up"} />
      </nav>

      {isTablet
        ? (<>
          <Sidenav show={showSidenav}>
            <div>
              <div className={"buttonWrapper"}>
                <button
                  className={"close"}
                  onClick={() => setShowSidenav(false)}>
                  <i className={"fas fa-times"} />
                </button>
              </div>

              <LinkWrapper>
                {links.map((link, index) => {
                  return <a key={index} href={`#${link.href}`} data-to-scrollspy-id={link.href}>{link.title}</a>
                })}
              </LinkWrapper>

              <Links links={socialMediaLinks} sidenav={true} />
            </div>
          </Sidenav>

          {showSidenav
            ? <SidenavBackground onClick={() => setShowSidenav(false)} show={showSidenav} />
            : null
          }
        </>)
        : null
      }
    </HeaderWrapper>
  );
}