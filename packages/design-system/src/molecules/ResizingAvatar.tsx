import React from "react";
import { Avatar } from "@jesper-kihlberg/design-system";
import makeStyles from "@material-ui/core/styles/makeStyles";
import classNames from "classnames";

interface ResizingAvatarProps extends React.ComponentProps<typeof Avatar> {
  src?: string;
  alt: string;
  children?: React.ReactNode;
  expanded?: boolean;
}

const useStyles = makeStyles((theme) => ({
  expanded: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    transition: "width 0.3s, height 0.3s",
  },
  collapsed: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    transition: "width 0.3s, height 0.3s",
  },
}));

const ResizingAvatar: React.FC<ResizingAvatarProps> = ({ src, alt, children, expanded, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Avatar src={src} alt={alt} className={classNames(expanded ? classes.expanded : classes.collapsed, className)} {...rest}>
      {children}
    </Avatar>
  );
};

export default ResizingAvatar;
