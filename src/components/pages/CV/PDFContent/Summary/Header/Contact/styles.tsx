import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  contactWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
    marginBottom: "5px",
  },
  dot: {
    fontWeight: "bold",
    color: colors["primary"],
  },
  contactText: {
    fontSize: "10px",
    color: colors["textDefault"],
    marginBottom: "5px",
    marginRight: "5px",
  },
  qr: {
    width: "70px",
    height: "70px",
  }
});

export default createStyles;