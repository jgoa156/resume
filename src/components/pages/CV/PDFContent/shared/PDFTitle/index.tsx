import { Line, Svg, Text, View } from "@react-pdf/renderer";

// Custom
import createStyles from "./styles";

export default function PDFTitle({ title, theme }) {
  const styles = createStyles(theme);

  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>

      <Svg height="2" style={styles.border}>
        <Line
          x1="0"
          y1="0"
          x2="400"
          y2="0"
          strokeWidth={1}
          stroke={theme.primary}
        />
      </Svg>
    </View>
  );
}