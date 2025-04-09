import { View } from "@react-pdf/renderer";

// Custom
import Bio from "./Bio";
import Header from "./Header";
import Contact from "./Contact";
import Skills from "./Skills";
import styles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces/IDefaultComponent";

export default function Summary({ t }: IDefaultComponentProps) {
  return (
    <View style={styles.summaryWrapper}>
      <Header t={t} />
      <Bio t={t} />
      <Contact t={t} />
      <Skills t={t} />
    </View>
  );
}