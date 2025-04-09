import { StyleSheet } from '@react-pdf/renderer';
import colors from '../shared/colors';

const styles = StyleSheet.create({
  summaryWrapper: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: colors.color1,
    padding: "30px 20px",
    fontFamily: "SFPro",
  },
});

export default styles;