import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Popover from "@material-ui/core/Popover";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MapIcon from "@material-ui/icons/Map";
import React from "react";

interface PopoverChipProps {
  label: string;
  icon: React.ReactElement;
  selectedItems: string[];
  children: React.ReactNode;
}

const PopoverChip: React.FC<PopoverChipProps> = ({ label, icon, selectedItems, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Chip label={label} onDelete={handleClick} icon={icon} onClick={handleClick} deleteIcon={<KeyboardArrowDownIcon />} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box p={2}>
          <Box style={{ maxWidth: "calc(100vw - 300px)", maxHeight: "calc(100vh - 300px)", paddingTop: 2, paddingRight: 1, overflow: "hidden" }}>
            {children}
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default PopoverChip;
