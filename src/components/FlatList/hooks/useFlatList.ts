import { useContext } from "react";

import { FlatListContext } from "@components/FlatList/context";

export const useFlatList = () => useContext(FlatListContext);
