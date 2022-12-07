import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { LogoText } from "..";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
  },
}));

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <LogoText>CV@JESPER.KIHLBERG</LogoText>
        </Box>
        <Box sx={{ display: "flex" }}>{children}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
