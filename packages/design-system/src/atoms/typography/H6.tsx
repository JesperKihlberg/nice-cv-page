import React from "react";
import Typography from "@material-ui/core/Typography";

interface H6Props {
  children: React.ReactNode;
}

const H6: React.FC<H6Props> = ({ children }) => {
  return <Typography variant="h6">{children}</Typography>;
};
export default H6;
