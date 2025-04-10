// Shared
import PDFTitle from "components/pages/CV/PDFContent/shared/PDFTitle";

// Custom
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";
import { Text, View } from "@react-pdf/renderer";

export default function Bio({ t, theme }: IDefaultComponentProps) {
  const styles = createStyles(theme);

  return (
    <View>
      <PDFTitle title={t("about.altTitle")} theme={theme} />
      <Text style={styles.bioParagraph}>{t("about.general.summary")}</Text>
    </View>
  );
}