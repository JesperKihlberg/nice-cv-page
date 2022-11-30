import { SvgIcon, SvgIconProps } from "@material-ui/core";
import classNames from "classnames";
import React, { CSSProperties } from "react";

export interface SvgBaseProps extends SvgIconProps {}
interface SvgBaseComponentProps extends SvgBaseProps {
  children: React.ReactNode;
}
const SvgBase: React.FC<SvgBaseComponentProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      {props.children}
    </SvgIcon>
  );
};

export default SvgBase;
