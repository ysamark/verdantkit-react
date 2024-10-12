import { cn } from "~/lib/utils";
import { DropZoneWrapper } from "./components/DropZoneWrapper";
import { DropZoneContextProvider } from "./context";
import { useDropZoneDataObject } from "./hooks/useDropZoneDataObject";
import { DropZoneComponent } from "./types";

export const DropZone: DropZoneComponent = (props) => {
  const dropZoneContextDataObject = useDropZoneDataObject(props);

  return (
    <div className={cn(props.className, "w-full h-auto block relative")}>
      <DropZoneContextProvider value={dropZoneContextDataObject}>
        <DropZoneWrapper />
      </DropZoneContextProvider>
    </div>
  );
};
