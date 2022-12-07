import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useTheme } from "@material-ui/core";

interface PageProps {
  children: React.ReactNode;
  id: string;
}

const useStyles = makeStyles((theme) => ({
  pageRoot: {
    paddingTop: theme.topBarHeight,
    paddingLeft: theme.navigationPanelWidth,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
}));

const Page: React.FC<PageProps> = ({ children, id }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div className={classes.pageRoot} id={id}>
      {children}
    </div>
  );
};
export default Page;
