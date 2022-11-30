import React from "react";
import Typography from "@material-ui/core/Typography";

interface H5Props {
  children: React.ReactNode;
}

const H5: React.FC<H5Props> = ({ children }) => {
  return <Typography variant="h5">{children}</Typography>;
};
export default H5;
