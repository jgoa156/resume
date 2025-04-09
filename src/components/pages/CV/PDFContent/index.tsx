import { Document, Page, Font, View } from '@react-pdf/renderer';

// Custom
import Summary from './Summary';
import Content from './Content';
import styles from './styles';

// Interfaces
import { IDefaultComponentProps } from 'interfaces/IDefaultComponent';

import sfProNormal from "./shared/fonts/SF-Pro-Display-Regular.otf";
import sfProSemi from "./shared/fonts/SF-Pro-Display-Semibold.otf";
import parkson from "./shared/fonts/Parkson-Demi.ttf";

Font.register({
  family: "SFPro",
  fonts: [
    { src: sfProNormal, fontWeight: "normal" },
    { src: sfProSemi, fontWeight: "semibold" },
  ]
});

Font.register({
  family: "Parkson",
  src: parkson,
});

export default function PDFContent({ t, ready }: IDefaultComponentProps) {
  return (
    <Document>
      <Page size="A4" wrap={false}>
        <View style={styles.page} id="pdf-content">
          <Summary t={t} />
          <Content t={t} />
        </View>
      </Page>
    </Document>
  );
}
