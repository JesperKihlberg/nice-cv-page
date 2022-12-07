import React from "react";
import Typography from "@material-ui/core/Typography";

interface LogoTextProps {
  children: React.ReactNode;
}
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  logoText: {
    fontFamily: '"Exo 2"',
    fontWeight: 900,
    fontStyle: "italic",
    overflow: "unset",
    // color: theme.palette.,
  },
}));

const LogoText: React.FC<LogoTextProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography variant="h2" component="h2" noWrap color="textPrimary" className={classes.logoText}>
      {children}
    </Typography>
  );
};
export default LogoText;
