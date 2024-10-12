import { useContext } from "react";

import { DropZoneContext } from "@components/DropZone/context";

export const useDropZone = () => useContext(DropZoneContext);
