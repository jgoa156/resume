// Custom
import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Header({ t }: IDefaultComponentProps) {
  return (
    <View>
      <Text style={styles.h1}>{t("name")}</Text>
    </View>
  );
}