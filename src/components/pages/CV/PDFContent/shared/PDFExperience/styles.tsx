import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  experienceWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "0px",
    marginBottom: "5px",
  },
  infoTitle: {
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: colors["primary"],
  },
  infoTitleLabel: {
    fontWeight: "normal",
    paddingLeft: "3px",
    color: colors["textDefault"]
  },
  infoTitleSpan: {
    fontWeight: "bold",
    paddingLeft: "3px",
    color: colors["textDefault"]
  },
  infoDate: {
    fontSize: "10px",
    fontWeight: "normal",
    color: colors["muted"],
  },
  infoDescription: {
    fontSize: "8px",
    color: colors["textDefault"],
    marginBottom: "5px",
  },
  dot: {
    fontWeight: "bold",
    color: colors["primary"],
  },
});

export default createStyles;