import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: "10%",
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    outline: "none",
    border: "none",
    fontSize: "14px",
    fontFamily: "-apple-system, sans-serif",
    margin: "4px",
    color: "#880494",
    transition: "color .2s",
    "&:hover": {
      cursor: "pointer",
      color: "#d90d9c",
    },
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "start",
    justifyContent: "center",
  },
  openModalButton: {
    outline: "none",
    border: "none",
    transition: "color .2s",
    background: "#fff",
    "&:hover": {
      cursor: "pointer",
      color: "#d90d9c",
    },
  },
}));
