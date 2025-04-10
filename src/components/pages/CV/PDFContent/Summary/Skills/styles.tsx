import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  list: {
    color: colors["textDefault"],
    fontSize: "10px",
    paddingBottom: "5px"
  },
  categoryWrapper: {
    marginBottom: "5px",
  },
  skillWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: "5px",
  },
  category: {
    fontSize: "18px",
    fontFamily: "Parkson",
    marginBottom: "5px"
  },
  dot: {
    color: colors["primary"],
  },
  skill: {
    fontSize: "10px",
    fontWeight: "bold",
    color: colors["primary"],
    marginRight: "5px"
  },
  subSkill: {
    fontWeight: "normal",
    color: colors["textDefault"],
    marginRight: "5px"
  }
});

export default createStyles;