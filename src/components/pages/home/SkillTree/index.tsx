import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";

// Custom
import Node from "./Node";
import { skills } from "./skills";
import {
  SectionWrapper,

  SkillTreeWrapper,
} from "./components";

// Interfaces
import { INodeProps } from "./interfaces";

export default function SkillTree() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "skillTree" });

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  // Carousel settings
  const [settings, setSettings] = useState<any>({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });

  useEffect(() => {
    console.log(isTablet, isMobile, settings);
    setSettings((prev) => ({
      ...prev,
      slidesToShow: isMobile ? 1 : isTablet ? 2 : 3
    }));
  }, [isTablet, isMobile]);

  if (!ready) return null;
  return (
    <SectionWrapper id="skills">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <FadeIn>
          <SkillTreeWrapper>
            {isTablet
              ? <Slider {...settings}>
                {skills.map((skill: INodeProps, index: number) => (
                  <Node key={index} t={t} {...skill} />
                ))}
              </Slider>
              : skills.map((skill: INodeProps, index: number) => (
                <Node key={index} t={t} {...skill} />
              ))}
          </SkillTreeWrapper>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}