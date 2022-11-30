import React from "react";
import ComponentOverviewPage from "./pages/ComponentOverviewPage";
import { ThemeProvider } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ComponentOverviewPage />
    </ThemeProvider>
  );
};

export default App;
