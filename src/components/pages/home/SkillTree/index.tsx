import { useTranslation } from "react-i18next";

// Shared
import Title from "components/shared/Title";
import FadeIn from "components/shared/Animations/FadeIn";

// Custom
import Node from "./Node";
import NodeHoverCard from "./Node/NodeHoverCard";
import { skills } from "./skills";
import {
  SectionWrapper,

  SkillTreeWrapper,
} from "./components";

// Interfaces
import { INodeProps } from "./interfaces";

export default function SkillTree() {
  const { t, ready } = useTranslation(["main"], { keyPrefix: "skillTree" });

  if (!ready) return null;
  return (
    <SectionWrapper id="skills">
      <div>
        <FadeIn>
          <Title>{t("title")}</Title>
        </FadeIn>

        <FadeIn>
          <SkillTreeWrapper>
            {skills.map((skill: INodeProps, index: number) => (
              <Node key={index} t={t} {...skill} />
            ))}
          </SkillTreeWrapper>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}