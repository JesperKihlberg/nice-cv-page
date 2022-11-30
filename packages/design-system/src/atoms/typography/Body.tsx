import React from "react";
import Typography from "@material-ui/core/Typography";

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};
export default Body;
