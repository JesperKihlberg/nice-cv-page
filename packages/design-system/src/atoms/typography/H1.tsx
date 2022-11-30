import React from "react";
import Typography from "@material-ui/core/Typography";

interface H1Props {
  children: React.ReactNode;
}

const H1: React.FC<H1Props> = ({ children }) => {
  return <Typography variant="h1">{children}</Typography>;
};

export default H1;
