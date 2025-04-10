import { Text, View } from "@react-pdf/renderer";

// Shared
import PDFTitle from "../../shared/PDFTitle";

// Custom
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function Languages({ t, theme }: IDefaultComponentProps) {
  const contentNsObject = Array.from(t("about.general.languages.content", { returnObjects: true }));

  const styles = createStyles(theme);

  return (
    <View>
      <PDFTitle title={t("about.general.languages.title")} theme={theme} />
      <View style={styles.list}>
        {contentNsObject.map(({ name, level }: any) => (
          <Text style={styles.skill}><Text style={styles.dot}>• {name}: </Text>{level}</Text>
        ))}
      </View>
    </View>
  )
}