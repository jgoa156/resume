import { Text, View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function SoftSkills({ t, theme }: IDefaultComponentProps) {
  const contentNsObject = Array.from(t("about.general.softSkills.content", { returnObjects: true }));

  const styles = createStyles(theme);

  return (
    <View>
      <PDFTitle title={t("about.general.softSkills.title")} theme={theme} />
      <View style={styles.list}>
        {contentNsObject.map((content: string) => (
          <Text style={styles.skill}><Text style={styles.dot}>• </Text>{content}</Text>
        ))}
      </View>
    </View>
  )
}