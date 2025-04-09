import { Text, View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import styles from "./styles";

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
    <View>
      <PDFTitle title={t("skillTree.title")} />

      <View style={styles.list}>
        {parsedContent && Object.keys(parsedContent)?.map((category) => (
          <View>
            <Text style={styles.category}>{category}</Text>
            <View>
              {category && parsedContent[category] && Object.keys(parsedContent[category])?.map((skill) => (
                <Text style={styles.skill}>• {skill}<Text style={styles.subSkill}>: {parsedContent[category][skill].join(", ")}</Text></Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}