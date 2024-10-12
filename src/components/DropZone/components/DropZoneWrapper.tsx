import { Fragment } from "react";
import ReactDropZone from "react-dropzone";

import { useDropZone } from "@components/DropZone/hooks";

import { DropZoneContent } from "./DropZoneContent";
import { DropZoneFilePreviews } from "./DropZoneFilePreviews";
import { DropZoneFooter } from "./DropZoneFooter";

export const DropZoneWrapper = () => {
  const context = useDropZone();

  const reactDropZoneDropHandler = (files: Array<File>) => {
    // console.log('reactDropZoneDropHandler >>> ', files)

    if (files.length >= 1) {
      let maxFiles =
        typeof context.props.maxFiles === "number"
          ? context.props.maxFiles
          : files.length;

      if (!context.props.multiple) {
        maxFiles = 1;
      }

      const selectedFiles = files.slice(0, maxFiles);

      context.setFiles(selectedFiles);

      if (typeof context.props.onChange === "function") {
        context.props.onChange({ file: files[0], files });
      }
    }
  };

  const reactDropZoneDropAcceptedHandler = () => {
    context.setDropError(false);
  };

  const reactDropZoneDropRejectedHandler = () => {
    context.setDropError(true);
  };

  return (
    <Fragment>
      <div className="w-full relative h-auto block">
        <ReactDropZone
          maxFiles={1}
          {...context.props}
          onDrop={reactDropZoneDropHandler}
          onDropAccepted={reactDropZoneDropAcceptedHandler}
          onDropRejected={reactDropZoneDropRejectedHandler}
        >
          {(dropZoneState) => <DropZoneContent {...dropZoneState} />}
        </ReactDropZone>
        <DropZoneFooter />
      </div>
      <DropZoneFilePreviews />
      {context.props.children}
    </Fragment>
  );
};
