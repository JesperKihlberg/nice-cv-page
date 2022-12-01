import React from "react";
import { PageContainer, Page } from "./molecules";
import ComponentOverviewPage from "./pages/ComponentOverviewPage";
import { ThemeProvider } from "./theme";

const App: React.FC = () => {
  const navigationItems = [
    (ids: string[], currentId: string, onSelectId: (id: string) => void) => (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 150,
          height: "100%",
        }}
      >
        {ids.map((id) => (
          <div
            key={id}
            onClick={() => onSelectId(id)}
            style={{
              backgroundColor: currentId === id ? "rgba(0, 0, 0, 0.5)" : "transparent",
            }}
          >
            {id}
          </div>
        ))}
      </div>
    ),
  ];

  return (
    <ThemeProvider>
      <PageContainer navigationItems={navigationItems}>
        <Page id="1">
          <ComponentOverviewPage />
        </Page>
        <Page id="2">
          <div>Page 2</div>
        </Page>
        <Page id="3">
          <div>Page 3</div>
        </Page>
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
