import { makeStyles } from "@material-ui/core";

export const headerStyle = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    width: "100%",
  },
  purpleLine: {
    width: "100%",
    height: "8px",
    background: "#3e065c",
  },
  whiteBar: {
    width: "100%",
    height: "60px",
    background: "#fff",
  },
  purpleBar: {
    width: "100%",
    height: "40px",
    background: "#3e065c",
  },
  img: {
    marginTop: "-180px",
  },
  parallexContainer: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    background: "rgba(62, 6, 92, 0.6)",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    opacity: "1 !important",
    color: "#fff",
    fontFamily: "-apple-system, sans-serif",
    fontSize: "42px",
    fontWeight: 600,
    padding: 0,
    margin: 0,
    marginTop: "-60px",
  },
  text: {
    fontFamily: "-apple-system, sans-serif",
    fontSize: "24px",
    color: "#fff",
    fontWeight: 500,
    padding: 0,
    margin: 0,
  },
});
