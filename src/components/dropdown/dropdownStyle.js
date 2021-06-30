import { makeStyles } from "@material-ui/core";

export const dropdownStyle = makeStyles({
  dropDownContainer: {
    width: "25%",
    height: "50px",
  },
  dropDownHeader: {
    display: "flex",
    height: "50px",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: "12px",
    fontWeight: 500,
    color: "#353535",
    borderRadius: "0 4px 4px 0",
    background: "#ffffff",
    border: "1px ridge rgba(136, 4, 148, .4)",
    transition: "border .2s",
    cursor: "pointer",
    "&:focus": {
      border: "1px solid rgba(136, 4, 148, .8)",
    },
  },
  dropDownList: {
    outline: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    position: "absolute",
    width: "12.5%",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingLeft: "4px",
    marginTop: "12px",
    height: "120px",
    overflowY: "scroll",
    background: "#fff",
    border: "2px solid #e5e5e5",
    color: "#3faffa",
    fontSize: "14px",
    fontWeight: 600,
  },
  listItem: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "12px",
    marginLeft: "8px",
    listStyle: "none",
    "&:hover": {
      cursor: "pointer",
      background: "#c3c3c3",
    },
  },
  icons: {
    width: "25px",
    height: "25px",
    marginRight: "6px",
  },
  headerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});