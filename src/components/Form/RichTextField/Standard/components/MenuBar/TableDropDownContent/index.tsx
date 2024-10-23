import {
  Navigation,
  NavigationHeader,
  NavigationScreen,
} from "@components/Navigation";

import { CreateTableScreen } from "./Screens/CreateTableScreen";
import { HomeScreen } from "./Screens/HomeScreen";

export const TableDropDownContent = () => {
  return (
    <Navigation home="home">
      <NavigationHeader></NavigationHeader>
      <NavigationScreen name="home">
        <HomeScreen />
      </NavigationScreen>
      <NavigationScreen name="create-table">
        <CreateTableScreen />
      </NavigationScreen>
    </Navigation>
  );
};
