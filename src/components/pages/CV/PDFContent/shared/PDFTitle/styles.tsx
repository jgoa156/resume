import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  title: {
    marginBottom: 5,

    color: colors["textDefault"],
    fontSize: "24px",
    fontFamily: "Parkson",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  border: {
    marginBottom: 5
  }
});

export default createStyles;