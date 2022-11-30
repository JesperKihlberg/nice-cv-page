import { alpha, createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";
import MuiTreeItem, { TreeItemProps as MuiTreeItemProps } from "@material-ui/lab/TreeItem";

const StyledTreeItem = withStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      "& .close": {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 7,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  })
)((props: MuiTreeItemProps) => <MuiTreeItem {...props} />);

interface TreeItemProps {
  hidden?: boolean;
  label: React.ReactNode;
  nodeId: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
const TreeItem: React.FC<TreeItemProps> = ({ hidden, label, nodeId, children, onClick }) => {
  console.log("TreeItem", nodeId);
  return (
    <StyledTreeItem hidden={hidden} nodeId={nodeId} label={label} onClick={onClick}>
      {children}
    </StyledTreeItem>
  );
};

export default TreeItem;
