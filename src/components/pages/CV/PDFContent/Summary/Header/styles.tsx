import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  h1: {
    fontFamily: "Parkson",
    fontSize: "32px",
    color: colors["textDefault"],
    marginBottom: "5px",
  },
  h2: {
    fontSize: "12px",
    fontWeight: "bold",
    color: colors["primary"],
    marginBottom: "5px",
  },
  h3: {
    fontSize: "10px",
    fontWeight: "bold",
    color: colors["textDefault"],
    marginBottom: "5px",
  }
});

export default createStyles;