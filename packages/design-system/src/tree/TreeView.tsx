import React from "react";
import MuiTreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface TreeViewProps {
  children: React.ReactNode;
  expandedIds?: string[];
  onNodeToggle?: (event: React.ChangeEvent<{}>, nodeIds: string[]) => void;
}
const TreeView: React.FC<TreeViewProps> = ({ children, expandedIds, onNodeToggle }) => {
  return (
    <MuiTreeView
      expanded={expandedIds}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      onNodeToggle={onNodeToggle}
    >
      {children}
    </MuiTreeView>
  );
};

export default TreeView;
