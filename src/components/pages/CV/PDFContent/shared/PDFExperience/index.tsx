// Custom
import { Text, View } from "@react-pdf/renderer";
import createStyles from "./styles";

// Interfaces
import { IExperience } from "interfaces";

export default function PDFExperience({ name, type, institution, company, start, end, bullets, theme }: IExperience) {
  const styles = createStyles(theme);

  return (
    <View style={styles.experienceWrapper}>
      <View>
        <Text style={styles.infoTitle}>
          {company ? company : institution}
          <Text style={styles.infoTitleLabel}> - {name}</Text>
          {institution && <Text style={styles.infoTitleSpan}> - {type}</Text>}
          <Text style={styles.infoDate}> - {start} - {end}</Text>
        </Text>

        {bullets && bullets.map((bullet) => <Text style={styles.infoDescription}><Text style={styles.dot}>• </Text>{bullet}</Text>)}
      </View>
    </View>
  )
}