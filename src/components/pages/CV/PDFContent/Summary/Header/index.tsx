import { View, Text } from "@react-pdf/renderer";

// Custom
import Contact from "./Contact";
import createStyles from "./styles";

// Interfaces
import { IDefaultComponentProps } from "interfaces";

export default function Header({ t, theme }: IDefaultComponentProps) {
  const roles = Array.from(t("about.general.roles", { returnObjects: true }));

  const styles = createStyles(theme);

  return (
    <View>
      <Text style={styles.h1}>{t("name")}</Text>
      <Text style={styles.h2}>{roles.join(" • ")}</Text>
      <Contact t={t} theme={theme} />
    </View>
  );
}