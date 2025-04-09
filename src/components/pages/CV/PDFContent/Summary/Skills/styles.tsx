import { StyleSheet } from '@react-pdf/renderer';
import colors from '../../shared/colors';

const styles = StyleSheet.create({
  list: {
    color: "white",
    fontSize: "10px",
    paddingBottom: "5px"
  },
  category: {
    fontSize: "18px",
    fontFamily: "Parkson",
    marginBottom: "10px"
  },
  skill: {
    fontSize: "10px",
    fontWeight: "semibold",
    color: colors.primary,
    marginBottom: "5px"
  },
  subSkill: {
    fontWeight: "normal",
    color: colors.textDefault,
  }
});

export default styles;