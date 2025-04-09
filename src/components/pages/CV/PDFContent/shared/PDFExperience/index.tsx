// Custom
import { Text, View } from "@react-pdf/renderer";
import styles from "./styles";

// Interfaces
import { IExperience } from "components/shared/Experience";

export default function PDFExperience({ name, type, institution, company, icon, iconProps, start, end, short }: IExperience) {
  return (
    <View style={styles.experienceWrapper}>
      {/*<Image src={{ uri: `${process.env.img}/${icon}`, method: "GET", headers: { "Cache-Control": "no-cache" }, body: "" }} />*/}
      <View>
        <Text style={styles.infoTitle}>
          {company ? company : institution}
          <Text style={styles.infoTitleLabel}> - {name}</Text>
          <Text style={styles.infoTitleSpan}> - {type}</Text>
        </Text>

        <Text style={styles.infoDate}>{start} - {end}</Text>

        {short && (
          <Text style={styles.infoDescription}>• {short}</Text>
        )}
      </View>
    </View>
  )
}