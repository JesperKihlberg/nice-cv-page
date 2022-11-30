import React from "react";
import Typography from "@material-ui/core/Typography";

interface BodyAltProps {
  children: React.ReactNode;
}
const BodyAlt: React.FC<BodyAltProps> = ({ children }) => {
  return <Typography variant="body2">{children}</Typography>;
};
export default BodyAlt;
