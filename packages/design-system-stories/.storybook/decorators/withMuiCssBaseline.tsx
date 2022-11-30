import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

/**
 * Wraps components with the MUI css baseline, making sure e.g.
 * native html elements are using mui styles.
 *
 */
export function withMuiCssBaseline() {
  return (story: any) => <CssBaseline>{story()}</CssBaseline>;
}
