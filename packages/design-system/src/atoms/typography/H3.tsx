import React from "react";
import Typography from "@material-ui/core/Typography";

interface H3Props {
  children: React.ReactNode;
}

const H3: React.FC<H3Props> = ({ children }) => {
  return <Typography variant="h3">{children}</Typography>;
};
export default H3;
