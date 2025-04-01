import { useTranslation } from "next-i18next";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import SectionWrapper from "components/shared/SectionWrapper";
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";
import {
  CardsWrapper,
  SkillCard,
  Skill,

  ButtonsWrapper,
  ButtonLeft,
  ButtonRight
} from "./styles";

export default function Skills() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "skills" });

  const isTablet = useMediaQuery({
    query: "(max-width: 768px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)"
  });
  const [displayScrollLeft, setDisplayScrollLeft] = useState(false);
  const [displayScrollRight, setDisplayScrollRight] = useState(true);

  // Skills object
  const skillsNsObject = Array.from(t("skills", { returnObjects: true }) as any[]);

  // Slider
  const skillsRef = useRef<any>(null);
  const cardWidth = isTablet ? 310 : 380;

  function getInnerWidth() {
    return window.innerWidth >= 1280 ? 1280 : window.innerWidth;
  }

  function cardsInViewport() {
    return Math.floor(getInnerWidth() / cardWidth);
  }

  function slideLeft() {
    skillsRef.current.scrollLeft -= cardsInViewport() * cardWidth;
  }
  function slideRight() {
    skillsRef.current.scrollLeft += cardsInViewport() * cardWidth;
  }

  useEffect(() => {
    if (ready && skillsRef && skillsRef.current) {
      skillsRef.current.addEventListener("scroll", function () {
        const innerWidth = getInnerWidth();
        const scroll = innerWidth + skillsRef.current.scrollLeft;
        const width = skillsRef.current.scrollWidth;

        setDisplayScrollLeft(scroll > innerWidth);
        setDisplayScrollRight(scroll < width);
      });
    }
  }, [ready]);

  if (!ready) return null;
  return (
    <SectionWrapper id="skills">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <FadeIn>
          <CardsWrapper ref={skillsRef}>
            <div>
              {skillsNsObject?.map((skill, index) => {
                return (
                  <SkillCard key={index}>
                    <h5>{skill.category}</h5>

                    <div>
                      {skill.tools?.map((tool, index) => {
                        return (
                          <Skill key={index} proficiency={tool.proficiency}>
                            <div>
                              <label>{tool.name}</label>
                              <span>{tool.proficiency}%</span>
                            </div>
                          </Skill>
                        );
                      })}
                    </div>
                  </SkillCard>
                );
              })}
            </div>
          </CardsWrapper>
        </FadeIn>

        {!isMobile
          ? (
            <ButtonsWrapper>
              {displayScrollLeft
                ? <ButtonLeft onClick={() => slideLeft()}><i className={"fas fa-chevron-left"} /></ButtonLeft>
                : null
              }
              {displayScrollRight
                ? <ButtonRight onClick={() => slideRight()}><i className={"fas fa-chevron-right"} /></ButtonRight>
                : null
              }
            </ButtonsWrapper>
          )
          : null
        }
      </div>
    </SectionWrapper>
  );
}