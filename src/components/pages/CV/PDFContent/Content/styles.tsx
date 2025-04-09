import { StyleSheet } from '@react-pdf/renderer';
import colors from '../shared/colors';

const styles = StyleSheet.create({
  contentWrapper: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: colors.color3,
    padding: "30px 20px",
    fontFamily: "SFPro",
  },
});

export default styles;