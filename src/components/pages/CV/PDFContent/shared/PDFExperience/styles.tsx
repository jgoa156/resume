import { StyleSheet } from '@react-pdf/renderer';
import colors from '../colors';

const styles = StyleSheet.create({
  experienceWrapper: {
    display: "flex",
    gap: "0px",
    marginBottom: "10px",
  },
  experienceImage: {
    width: "30px",
    height: "auto",
  },
  infoTitle: {
    fontSize: "10px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: colors.primary,
  },
  infoTitleLabel: {
    fontWeight: "normal",
    paddingLeft: "3px",
    color: colors.textDefault
  },
  infoTitleSpan: {
    fontWeight: "normal",
    paddingLeft: "3px",
    color: colors.muted
  },
  infoDate: {
    fontSize: "10px",
    color: colors.muted,
    marginBottom: "5px",
  },
  infoDescription: {
    color: colors.textDefault,
    marginBottom: "5px",
  }
});

export default styles;