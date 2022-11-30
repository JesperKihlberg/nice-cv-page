import React from "react";
import Typography from "@material-ui/core/Typography";

interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
  return <Typography variant="h2">{children}</Typography>;
};
export default H2;
