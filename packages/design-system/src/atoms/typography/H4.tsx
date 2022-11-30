import React from "react";
import Typography from "@material-ui/core/Typography";

interface H4Props {
  children: React.ReactNode;
}

const H4: React.FC<H4Props> = ({ children }) => {
  return <Typography variant="h4">{children}</Typography>;
};
export default H4;
