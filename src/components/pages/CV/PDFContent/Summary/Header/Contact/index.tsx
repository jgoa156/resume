import { View, Image, Text } from "@react-pdf/renderer";

// Custom
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function Contact({ t, theme }: IDefaultComponentProps) {
  type IContentNsObject = { icon: string, text: string };
  const contentNsObject: IContentNsObject[] = Array.from(t("contact.content", { returnObjects: true }));

  const styles = createStyles(theme);

  const exclude = ["link"];

  return (
    <View style={styles.contactWrapper}>
      <View>
        {contentNsObject.map(({ text, icon }: IContentNsObject) => (!exclude.includes(icon.split("-").pop())) && (
          <Text style={styles.contactText}><Text style={styles.dot}>• </Text>{text} </Text>
        ))}
      </View>
      <Image src={`${process.env.img}/cv_qr${theme["primary"] === "#222" ? "_light" : ""}.png`} style={styles.qr} />
    </View>
  )
}