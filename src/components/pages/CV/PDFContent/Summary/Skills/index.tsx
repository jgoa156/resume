import { Text, View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";
import { INodeProps } from "components/pages/Home/SkillTree/interfaces";

export default function Skills({ t, theme }: IDefaultComponentProps) {
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

  const styles = createStyles(theme);

  return (
    <View>
      <PDFTitle title={t("skillTree.altTitle")} theme={theme} />

      <View style={styles.list}>
        {parsedContent && Object.keys(parsedContent)?.map((category) => (
          <View style={styles.categoryWrapper}>
            <Text style={styles.category}>{category}</Text>
            <View>
              {category && parsedContent[category] && Object.keys(parsedContent[category])?.map((skill) => (
                <View style={styles.skillWrapper}>
                  <Text style={styles.skill}>• {skill}</Text>
                  {parsedContent[category][skill].map((subSkill) => (
                    <Text style={styles.subSkill}><Text style={styles.dot}>•</Text> {subSkill}</Text>
                  ))}
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}