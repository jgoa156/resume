import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useKonamiCode from "hooks/useKonamiCode";

// Shared
import Links, { ILink } from "components/shared/Links";
import CopyToClipboard from "components/shared/CopyToClipboard";

// Custom
import {
  BannerWrapper,
  BackgroundWrapper,
  Background,

  Intro,
  AnimatedTitle,

  Dropdown,
  DownloadDropdown,
  DownloadDropdownMenu,
  DownloadDropdownItem,
  Separator,
  GoToBottom
} from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Banner({ t, ready }: IDefaultComponentProps) {
  // Konami code - TODO: ADD RGB EFFECT 
  const konami = useKonamiCode();

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
  const roles = Array.from(t("banner.roles", { returnObjects: true }) as any[]);

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

  // Social media links
  const socialMediaLinks: ILink[] = Array.from(t("contact.content", { returnObjects: true }));

  return (
    <>
      <BannerWrapper id="banner">
        <BackgroundWrapper className="no-default-styling">
          <Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/${konami ? "bbbggg" : "bg"}.png`} />
        </BackgroundWrapper>

        <div className="no-default-styling">
          <Intro>
            <h1>
              {t("banner.title")}
              <br />
              {t("banner.subtitle")}&nbsp;<AnimatedTitle>{role}</AnimatedTitle>
            </h1>

            <Links links={socialMediaLinks} />

            <Dropdown align="end">
              <DownloadDropdown variant="secondary">
                <i className={"fas fa-download"} /> {t("banner.download")}
              </DownloadDropdown>

              <DownloadDropdownMenu renderOnMount={true}>
                <DownloadDropdownItem href={"/files/Guilherme Almeida - CV (EN).pdf"} download={"Guilherme Almeida - CV (EN)"}>English</DownloadDropdownItem>
                <DownloadDropdownItem href={"/files/Guilherme Almeida - CV (PT).pdf"} download={"Guilherme Almeida - CV (PT)"}>Português</DownloadDropdownItem>
              </DownloadDropdownMenu>

              <CopyToClipboard text={t("banner.resume.text")} />
            </Dropdown>

            <GoToBottom href={"#main-tools"} display={true} className={"fas fa-arrow-down"} />
          </Intro>
        </div>
      </BannerWrapper>

      {Array(10).fill(0).map((_, index) => (
        <Separator key={index} />
      ))}
    </>
  );
}