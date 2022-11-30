import * as React from "react";
import { withMuiCssBaseline } from "./decorators/withMuiCssBaseline";
import ThemeProvider from "@jesper-kihlberg/design-system/src/theme/ThemeProvider";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withMuiCssBaseline(),
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
