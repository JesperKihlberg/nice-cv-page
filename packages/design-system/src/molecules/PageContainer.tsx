import React, { useEffect, WheelEventHandler } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

type NavigationItemCreator = (ids: string[], currentId: string, onSelectId: (id: string) => void) => React.ReactNode;

interface PageContainerProps {
  children: React.ReactNode;
  onSelectedIdChange?: (id: string) => void;
  navigationItems?: NavigationItemCreator[] | null;
  selectedId?: string;
}

const useStyles = makeStyles((theme) => ({
  pageContainerRoot: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  },
}));

const PageContainer: React.FC<PageContainerProps> = ({ children, navigationItems, onSelectedIdChange, selectedId }) => {
  const containerId = "page-container";
  const [ids, setIds] = React.useState<string[]>([]);
  const [currentIndex, _setCurrentIndex] = React.useState<number>(0);
  const classes = useStyles();
  const currentIndexRef = React.useRef(currentIndex);

  const setCurrentIndex = (index: number) => {
    currentIndexRef.current = index;
    _setCurrentIndex(index);
  };

  const handleResize: EventListener = () => {
    const pageElement = document.getElementById(containerId);
    if (pageElement) {
      pageElement.scrollTo({
        top: currentIndexRef.current * window.innerHeight,
      });
    }
  };

  const onScroll: WheelEventHandler = (event) => {
    event.stopPropagation();
    if (event.deltaY > 0) {
      if (currentIndex < ids.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (event.deltaY < 0) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const onSelectId = (id: string) => {
    const index = ids.indexOf(id);
    if (index >= 0) {
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (selectedId) {
      const index = ids.indexOf(selectedId);
      if (index >= 0) {
        setCurrentIndex(index);
      }
    }
  }, [selectedId, ids]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (children) {
      const newIds = (
        React.Children?.map(children, (child) => {
          if (child && React.isValidElement(child)) {
            return child.props?.id;
          }
          return null;
        }) || []
      ).filter((id) => id !== null) as string[];
      setIds(newIds);
    }
  }, [children]);

  useEffect(() => {
    if (currentIndex >= 0 && currentIndex < ids.length) {
      const pageElement = document.getElementById(containerId);
      if (pageElement) {
        pageElement.scrollTo({
          behavior: "smooth",
          top: currentIndex * window.innerHeight,
        });
        onSelectedIdChange?.(ids[currentIndex]);
      }
    }
  }, [currentIndex]);

  return (
    <div className={classes.pageContainerRoot} onWheel={onScroll} id={containerId}>
      {children}
      {navigationItems?.map((navigationItem, index) => (
        <React.Fragment key={index}>{navigationItem(ids, ids[currentIndex], onSelectId)}</React.Fragment>
      ))}
    </div>
  );
};

export default PageContainer;
