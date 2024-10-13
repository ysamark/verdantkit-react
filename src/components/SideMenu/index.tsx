import { SideMenuWrapper } from "./components/SideMenuWrapper";
import { SideMenuContextProvider } from "./context";
import { useSideMenuContextDataObject } from "./hooks";
import { SideMenuProps } from "./types";

type SideMenuComponent = React.FunctionComponent<SideMenuProps>;

export const SideMenu: SideMenuComponent = (props) => {
  const context = useSideMenuContextDataObject(props);

  return (
    <SideMenuContextProvider value={context}>
      <SideMenuWrapper>{props.children}</SideMenuWrapper>
    </SideMenuContextProvider>
  );
};
