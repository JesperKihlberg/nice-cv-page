import React from "react";
import { ArrowDropDown, ArrowDropUp, Box, IconButton, ResizingAvatar, TimelineDot } from "@jesper-kihlberg/design-system";

interface AvatarPageIndicatorProps {
  ids: string[];
  currentId: string;
  onSelectId: (id: string) => void;
  getResingAvatarProps: (id: string) => React.ComponentProps<typeof ResizingAvatar>;
}

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.topBarHeight,
    position: "absolute",
    top: 0,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "top",
    width: theme.navigationPanelWidth,
  },
  avatarContainer: {
    border: "4px solid " + theme.palette.primary.main,
    borderRadius: "50% 0",
    padding: theme.spacing(1),
  },
  avatar: {
    cursor: "pointer",
    "&:hover": {
      cursor: "pointer",
    },
  },
  dot: {
    width: theme.spacing(1),
    height: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(1),
  },
}));

const AvatarPageIndicator: React.FC<AvatarPageIndicatorProps> = ({ ids, currentId, onSelectId, getResingAvatarProps }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <IconButton
        onClick={() => {
          const currentIndex = ids.indexOf(currentId);
          const nextIndex = currentIndex - 1;
          if (nextIndex >= 0) {
            onSelectId(ids[nextIndex]);
          }
        }}
      >
        <ArrowDropUp fontSize="large" color="primary" />
      </IconButton>
      {ids.map((id) => {
        const isSelected = id === currentId;
        const isLast = id === ids[ids.length - 1];
        const resizingAvatarProps = getResingAvatarProps(id);
        return (
          <Box>
            <Box className={classes.avatarContainer}>
              <ResizingAvatar key={id} {...resizingAvatarProps} onClick={() => onSelectId(id)} expanded={isSelected} className={classes.avatar} />
            </Box>
            {!isLast && <TimelineDot className={classes.dot} color="primary" />}
          </Box>
        );
      })}
      <IconButton
        onClick={() => {
          const currentIndex = ids.indexOf(currentId);
          const nextIndex = currentIndex + 1;
          if (nextIndex < ids.length) {
            onSelectId(ids[nextIndex]);
          }
        }}
      >
        <ArrowDropDown fontSize="large" color="primary" />
      </IconButton>
    </Box>
  );
};

export default AvatarPageIndicator;
