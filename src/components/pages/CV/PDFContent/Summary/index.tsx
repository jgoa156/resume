import { View } from "@react-pdf/renderer";

// Custom
import Bio from "./Bio";
import Header from "./Header";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";
import Skills from "./Skills";
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function Summary({ t, theme }: IDefaultComponentProps) {
  const styles = createStyles(theme);

  return (
    <View style={styles.summaryWrapper}>
      <View>
        <Header t={t} theme={theme} />
        <Bio t={t} theme={theme} />
      </View>
      <Languages t={t} theme={theme} />
      <SoftSkills t={t} theme={theme} />
      <Skills t={t} theme={theme} />
    </View>
  );
}