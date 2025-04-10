import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  summaryWrapper: {
    width: "45%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: colors["color1"],
    padding: "30px 20px",
    fontFamily: "SFPro",
  },
});

export default createStyles;