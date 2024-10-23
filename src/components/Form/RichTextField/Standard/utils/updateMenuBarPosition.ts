import { camelCaseToN } from "@verdantkit/utils";

type UpdateMenuBarPositionUtilProps = {
  menuBarRef: React.RefObject<HTMLDivElement>;
  editorContentRef: React.RefObject<HTMLDivElement>;
};

export const updateMenuBarPosition = ({
  editorContentRef,
  menuBarRef,
}: UpdateMenuBarPositionUtilProps) => {
  if (
    !(
      editorContentRef.current instanceof HTMLDivElement &&
      menuBarRef.current instanceof HTMLDivElement
    )
  ) {
    return null;
  }

  const menuBarElement = menuBarRef.current;
  const menuBarCoordinates = menuBarElement.getBoundingClientRect();
  const editorContentElement = editorContentRef.current;
  const editorContentCoordinates = editorContentElement.getBoundingClientRect();
  const margin = 28 * 2;

  const menuBarStyles: React.CSSProperties = {
    position: "fixed",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    top: "0px",
    left: `${editorContentCoordinates.left - margin / 2}px`,
    width: `${editorContentCoordinates.width + margin}px`,
    zIndex: "30",
    boxShadow:
      "0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  };

  if (menuBarCoordinates.top < 0) {
    return Object.assign(menuBarElement.style, menuBarStyles);
  }

  if (window.scrollY <= menuBarCoordinates.y) {
    Object.keys(menuBarStyles).forEach((property) => {
      menuBarElement.style.removeProperty(camelCaseToN(property, "-"));
      // Object.assign(menuBarElement.style.removeProperty(), {
      //   [property]: "unset",
      // });
    });
  }
};
