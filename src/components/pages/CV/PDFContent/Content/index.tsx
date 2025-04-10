import { View } from "@react-pdf/renderer";

// Custom
import Education from "./Education";
import Work from "./Work";
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function Content({ t, theme }: IDefaultComponentProps) {
  const styles = createStyles(theme);

  return (
    <View style={styles.contentWrapper}>
      <Work t={t} theme={theme} />
      <Education t={t} theme={theme} />
    </View>
  );
}