import React from "react";
import { PageContainer, Page } from "./molecules";
import ComponentOverviewPage from "./pages/ComponentOverviewPage";
import { ThemeProvider } from "./theme";
import AvatarPageIndicator from "./organisms/AvatarPageIndicator";
import Header from "./organisms/Header";
import { Button } from ".";
import { ContactMail, GitHub, Work } from "@material-ui/icons";

const App: React.FC = () => {
  const [currentId, setCurrentId] = React.useState(window.location.pathname.slice(1) || "1");
  const pageData = [
    {
      id: "About me",
      title: "About me",
      src: "https://material-ui.com/static/images/avatar/1.jpg",
      alt: "Avatar 1",
      content: <ComponentOverviewPage />,
    },
    // {
    //   id: "Education",
    //   title: "Education",
    //   icon: "📚",
    //   alt: "Education",
    //   content: <>Education</>,
    // },
    {
      id: "Work",
      title: "Work",
      icon: <Work />,
      alt: "Work",
      content: <>Work experience</>,
    },
    {
      id: "Github",
      title: "Github",
      icon: <GitHub />,
      alt: "Github",
      content: <>Github</>,
    },
    {
      id: "Contact",
      title: "Contact",
      icon: <ContactMail />,
      alt: "Contact",
      content: <>Contact</>,
    },
  ];

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

  const urlId = window.location.pathname.slice(1);

  React.useEffect(() => {
    if (urlId) {
      setCurrentId(urlId);
    }
  }, [urlId]);

  const onPageChange = (id: string) => {
    window.history.replaceState({}, "", `${id}`);
    setCurrentId(id);
  };

  const avatarPageIndicator = (ids: string[], currentId: string, onSelectId: (id: string) => void) => (
    <AvatarPageIndicator
      ids={ids}
      currentId={currentId}
      onSelectId={onSelectId}
      getResingAvatarProps={(id) => ({
        src: pageData.find((page) => page.id === id)?.src,
        alt: pageData.find((page) => page.id === id)?.alt || "",
        children: pageData.find((page) => page.id === id)?.icon,
      })}
    />
  );
  return (
    <ThemeProvider>
      <Header>
        {pageData.map((page) => (
          <Button
            key={page.id}
            onClick={() => onPageChange(page.id)}
            style={{
              backgroundColor: currentId === page.id ? "rgba(0, 0, 0, 0.5)" : "transparent",
            }}
          >
            {page.title}
          </Button>
        ))}
      </Header>
      <PageContainer navigationItems={[avatarPageIndicator]} onSelectedIdChange={onPageChange} selectedId={currentId}>
        {pageData.map((page) => (
          <Page id={page.id} key={page.id}>
            {page.content}
          </Page>
        ))}
        {/* <Page id="About me">
          <ComponentOverviewPage />
        </Page>
        <Page id="Work">
          <div>Page 2</div>
        </Page>
        <Page id="Github">
          <div>Page 3</div>
        </Page> */}
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
