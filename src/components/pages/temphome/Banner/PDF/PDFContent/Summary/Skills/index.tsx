// Shared
import Title from "components/shared/Title";

// Custom
import { SkillsWrapper } from "./components";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";
import { INodeProps } from "components/pages/Home/SkillTree/interfaces";

export default function Skills({ t }: IDefaultComponentProps) {
  function parseSkillsArray(skills: INodeProps[]): any {
    const categories = {};

    if (!skills[0]?.childNodes) {
      return skills.map((skill) => skill.title);
    }

    skills.forEach((skill) => {
      if (skill.childNodes) {
        categories[skill.title] = parseSkillsArray(skill.childNodes);
      }
    });

    return categories;
  }

  const contentNsObject = Array.from(t("skillTree.skills", { returnObjects: true }));
  const parsedContent = parseSkillsArray(contentNsObject);

  return (
    <SkillsWrapper>
      <Title alignLeft={true}>{t("skillTree.title")}</Title>

      <ul>
        {parsedContent && Object.keys(parsedContent)?.map((skill, index) => (
          <li key={index} className="category">
            <strong>{skill}</strong>
            <ul className="category">
              {skill && parsedContent[skill] && Object.keys(parsedContent[skill])?.map((subSkill, subIndex) => (
                <>
                  <li key={subIndex}>
                    <strong>{subSkill}</strong>: {parsedContent[skill][subSkill].join(", ")}
                  </li>
                </>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SkillsWrapper>
  )
}