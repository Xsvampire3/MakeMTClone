import React from "react";
import { makeStyles } from "@mui/styles";
import { Twitter, Facebook } from "@mui/icons-material";
import { Link } from "@mui/material";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bottom: 0,
    width: "100%",
    padding: "1rem",
    boxSizing: "border-box"
  },
  copyright: {
    textAlign: "right"
  },
  countryList: {
    display: "flex",
    gap: "0.5rem"
  }
});

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </Link>
      </div>
      <div className={classes.copyright}>
        © 2023 MAKEMYTRIP PVT. LTD.
        <div className={classes.countryList}>
          <span>Country:</span>
          <span>India</span>
          <span>USA</span>
          <span>UAE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
