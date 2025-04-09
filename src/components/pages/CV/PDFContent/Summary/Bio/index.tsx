// Shared
// import Title from "components/shared/Title";
import PDFTitle from "components/pages/CV/PDFContent/shared/PDFTitle";

// Custom
import styles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";
import { Text, View } from "@react-pdf/renderer";

export default function Bio({ t }: IDefaultComponentProps) {
  const contentNsObject = Array.from(t("about.general.content", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("about.title")} />
      {contentNsObject.map((content: string) => (
        <Text style={styles.bioParagraph}>{content}</Text>
      ))}
    </View>
  );
}