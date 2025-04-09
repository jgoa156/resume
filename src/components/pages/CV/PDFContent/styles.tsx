import { StyleSheet } from '@react-pdf/renderer';
import colors from './shared/colors';

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    fontSize: "10px",
    // gridTemplateColumns: "2fr 3fr",
    //  height: "fit-content",
    background: colors.color1,
  },
});

export default styles;