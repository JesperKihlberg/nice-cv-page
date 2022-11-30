import React from "react";
import SvgBase, { SvgBaseProps } from "./SvgBase";

interface FoldersProps extends SvgBaseProps {}

const Folders: React.FC<FoldersProps> = (props) => {
  return (
    <SvgBase {...props}>
      <g>
        <path id="svg_1" d="m2,6.125l-2,0l0,5l0.01,0l-0.01,9c0,1.1 0.9,2 2,2l18,0l0,-2l-18,0" />
        <path
          id="svg_3"
          d="m21.9375,4.3125l-8,0l-2,-2l-6,0c-1.1,0 -1.99,0.9 -1.99,2l-0.01,12c0,1.1 0.9,2 2,2l16,0c1.1,0 2,-0.9 2,-2l0,-10c0,-1.1 -0.9,-2 -2,-2zm0,12l-16,0l0,-10l16,0l0,10z"
        />
      </g>
    </SvgBase>
  );
};

export default Folders;
