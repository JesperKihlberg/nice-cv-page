import { Box, Chip, Typography, useTheme } from "@material-ui/core";
import React from "react";

const ComponentOverviewPage: React.FC = () => {
  const theme = useTheme();
  // console.log(JSON.stringify(theme));
  return (
    <>
      <Box>
        <Typography variant="h1">Typographies</Typography>
        <Typography variant="caption">{JSON.stringify(theme.typography.h1)}</Typography>

        <Typography variant="h1">h1</Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="button">button</Typography>
        <Typography variant="caption">caption</Typography>
        <Typography variant="overline">overline</Typography>
        <Chip label="Chip" onDelete={console.log} />
      </Box>
    </>
  );
};

export default ComponentOverviewPage;
