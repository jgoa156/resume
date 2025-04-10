import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  contentWrapper: {
    width: "55%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    backgroundColor: colors["color3"],
    padding: "30px 20px",
    fontFamily: "SFPro",
  },
});

export default createStyles;