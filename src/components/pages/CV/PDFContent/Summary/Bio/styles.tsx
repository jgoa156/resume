import { StyleSheet } from '@react-pdf/renderer';

const createStyles = (colors) => StyleSheet.create({
  bioParagraph: {
    color: colors["textDefault"],
    fontSize: "10px",
  },
});

export default createStyles;