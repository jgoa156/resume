import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  dot: {
    fontWeight: "bold",
    color: colors["primary"],
  },
  skill: {
    fontSize: "10px",
    color: colors["textDefault"],
    marginBottom: "5px",
    marginRight: "5px",
  },
});

export default createStyles;