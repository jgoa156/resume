import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";

// Custom
import Node from "./Node";
import { skills } from "./Skills";
import {
  SkillTreeWrapper,
  SkillTreeNodesWrapper,
  CarouselDot,
} from "./styles";

// Interfaces
import { INodeProps } from "./interfaces";
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function SkillTree({ t }: IDefaultComponentProps) {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  // Carousel settings
  const [settings, setSettings] = useState<any>({
    customPaging: (i: number) => <a><CarouselDot /></a>,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  });

  useEffect(() => {
    setSettings((prev) => ({
      ...prev,
      slidesToShow: isMobile ? 1 : isTablet ? 2 : 3
    }));
  }, [isTablet, isMobile]);

  return (
    <SkillTreeWrapper id="skills">
      <div>
        <FadeIn>
          <Title>{t("skillTree.title")}</Title>
        </FadeIn>

        <FadeIn>
          <SkillTreeNodesWrapper>
            {isTablet
              ? <Slider {...settings}>
                {skills.map((skill: INodeProps, index: number) => (
                  <Node key={index} t={t} {...skill} />
                ))}
              </Slider>
              : skills.map((skill: INodeProps, index: number) => (
                <Node key={index} t={t} {...skill} />
              ))}
          </SkillTreeNodesWrapper>
        </FadeIn>
      </div>
    </SkillTreeWrapper>
  );
}