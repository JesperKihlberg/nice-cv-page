import React from "react";
import Typography from "@material-ui/core/Typography";

interface CaptionProps {
  children: React.ReactNode;
}

const Caption: React.FC<CaptionProps> = ({ children }) => {
  return <Typography variant="caption">{children}</Typography>;
};
export default Caption;
