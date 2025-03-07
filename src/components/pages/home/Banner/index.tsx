import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { useTranslation } from "react-i18next";

import {
  SectionWrapper,

  BackgroundWrapper,
  Background,

  Intro,
  AnimatedTitle,

  Links,
  Link,

  Dropdown,
  DownloadDropdown,
  DownloadDropdownMenu,
  DownloadDropdownItem
} from "./styles";
import CopyToClipboard from "components/shared/CopyToClipboard";
import GeneratePDF from "./PDF";

export default function Banner() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "banner" });

  // Konami code - TODO: ADD RGB EFFECT 
  const [konami, setKonami] = useState<boolean>(false);
  let key = 0;
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 65, 66];

  function handleKonami(e) {
    if (e.keyCode == code[key]) {
      key++;

      if (key == code.length) {
        setKonami(true);
        document.removeEventListener("keydown", handleKonami);
      }
    } else {
      key = 0;
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKonami);
  }, []);

  // Parallax effect
  const [parallaxY, setParallaxY] = useState("50%");
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  const bannerHeight = isTablet ? 400 : 500;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY <= bannerHeight) {
        let y = (window.scrollY / bannerHeight) * 100;
        setParallaxY(`calc(50% - ${y / 2}%)`);
      }
    });
  }, []);

  // Text animation
  const [role, setRole] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = Array.from(t("roles", { returnObjects: true })) as any[];

  useEffect(() => {
    // Going to next word
    if (ready) {
      if (charIndex == (roles[roleIndex].length + 1) * -1) {
        setTimeout(() => {
          setRoleIndex(roleIndex == roles.length - 1 ? 0 : roleIndex + 1);
          setRole("");
          setCharIndex(0);
        }, 500);
        // Erasing word
      } else if (charIndex < 0) {
        setTimeout(() => {
          setRole(role.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 10);
        // Writing word
      } else if (charIndex < roles[roleIndex].length) {
        setTimeout(() => {
          setRole(role + roles[roleIndex][charIndex])
          setCharIndex(charIndex + 1);
        }, 30);
        // Waiting 1.5s before erasing word
      } else {
        setTimeout(() => {
          setCharIndex(-1);
        }, 1500);
      }
    }
  }, [ready, charIndex]);

  // Links
  const links = [
    { icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com" },
    { icon: "fab fa-github", href: "https://github.com/jgoa156" },
    { icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666" },
    { icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156" }
  ];

  if (!ready) return null;
  return (
    <SectionWrapper id="banner">
      <BackgroundWrapper>
        <Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/${konami ? "bbbggg" : "bg"}.png`} />
      </BackgroundWrapper>

      <div>
        <Intro>
          <h1>
            {t("title")}
            <br />
            {t("subtitle")}&nbsp;<AnimatedTitle>{role}</AnimatedTitle>
          </h1>

          <Links>
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}>
                  <i className={link.icon} />
                </Link>
              );
            })}
          </Links>

          <Dropdown align="end">
            <DownloadDropdown variant="secondary">
              <i className={"fas fa-download"} /> {t("download")}
            </DownloadDropdown>

            <DownloadDropdownMenu renderOnMount={true}>
              <DownloadDropdownItem href={"/files/Guilherme Almeida - CV (EN).pdf"} download={"Guilherme Almeida - CV (EN)"}>English</DownloadDropdownItem>
              <DownloadDropdownItem href={"/files/Guilherme Almeida - CV (PT).pdf"} download={"Guilherme Almeida - CV (PT)"}>Português</DownloadDropdownItem>
            </DownloadDropdownMenu>

            <CopyToClipboard text={t("resume.text")} />
          </Dropdown>

          {/*<GeneratePDF />*/}
        </Intro>
      </div>
    </SectionWrapper>
  );
}