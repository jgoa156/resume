import Title from "components/shared/Title";
import { ITranslatedCVComponent } from "../../interfaces";
import Experience, { IExperience } from "components/shared/Experience";

// Custom
import { SkillsWrapper } from "./components";

export default function Work({ t }: ITranslatedCVComponent) {
  const contentNsObject = Array.from(t("skills.content", { returnObjects: true })) as string[];

  return (
    <SkillsWrapper>
      <Title alignLeft={true}>{t("skills.title")}</Title>

      <ul>
        {contentNsObject?.map((skill, index) => <li key={index}><span>{skill}</span></li>)}
      </ul>
    </SkillsWrapper>
  )
}