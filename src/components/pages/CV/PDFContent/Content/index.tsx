import { View } from "@react-pdf/renderer";

// Custom
import Education from "./Education";
import Work from "./Work";
import styles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Content({ t }: IDefaultComponentProps) {
  return (
    <View style={styles.contentWrapper}>
      <Work t={t} />
      <Education t={t} />
    </View>
  );
}