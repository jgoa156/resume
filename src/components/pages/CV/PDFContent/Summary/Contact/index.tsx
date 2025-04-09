import { View, Image, Text } from "@react-pdf/renderer";

// Shared
import PDFTitle from "components/pages/CV/PDFContent/shared/PDFTitle";

// Custom
import styles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Contact({ t }: IDefaultComponentProps) {
  type IContentNsObject = { icon: string, text: string };
  const contentNsObject: IContentNsObject[] = Array.from(t("contact.content", { returnObjects: true }));

  return (
    <View>
      <PDFTitle title={t("contact.title")} />

      <View style={styles.qrWrapper}>
        <View style={styles.contactWrapper}>
          {contentNsObject.map((content: IContentNsObject) => (
            <View style={styles.contactItem}>
              {/*<Svg style={styles.contactIcon} />*/}
              <Text style={styles.contactText}>• {content?.text}</Text>
            </View>
          ))}
        </View>
        <Image style={styles.qrImage} src={"/cv_qr.png"} />
      </View>
    </View >
  )
}