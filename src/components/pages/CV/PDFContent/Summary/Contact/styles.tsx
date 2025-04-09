import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  contactWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  contactItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  contactIcon: {
    fontSize: "15px",
    marginRight: "5px",
    color: "white"
  },
  contactText: {
    fontSize: "10px",
    color: "white",
  },
  qrWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  qrImage: {
    width: "95px",
    height: "95px",
  },
});

export default styles;