import {
  convertBlobToFile,
  generateRandomId,
  Nullable,
} from "@verdantkit/utils";

const getImageElementByUrl = (
  imageUrl: string,
  canvas: HTMLCanvasElement
): Promise<Nullable<HTMLImageElement>> => {
  const tmpImageElement = new Image();

  return new Promise<Nullable<HTMLImageElement>>((resolve) => {
    tmpImageElement.onload = () => {
      canvas.width = tmpImageElement.naturalWidth;
      canvas.height = tmpImageElement.naturalHeight;

      const canvasContext = canvas.getContext("2d") as CanvasRenderingContext2D;

      canvasContext.drawImage(
        tmpImageElement,
        0,
        0,
        canvas.width,
        canvas.height
      );

      resolve(tmpImageElement);
    };

    tmpImageElement.onerror = () => {
      resolve(null);
    };

    tmpImageElement.onabort = () => {
      resolve(null);
    };

    tmpImageElement.oncancel = () => {
      resolve(null);
    };

    tmpImageElement.src = imageUrl;
  });
};

export const loadImageFromUrl = async (
  imageUrl: string
): Promise<Nullable<File>> => {
  const canvas = document.createElement("canvas");

  const tmpImageElement = await getImageElementByUrl(imageUrl, canvas);

  if (!tmpImageElement) {
    return null;
  }

  return new Promise((resolve) => {
    const promiseHandler = () => {
      try {
        canvas.toBlob(async (canvasBlobObject) => {
          if (!canvasBlobObject) {
            return resolve(null);
          }

          const imageFileObject = await convertBlobToFile(
            canvasBlobObject,
            `${generateRandomId()}.jpg`
          );

          resolve(imageFileObject);
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        return resolve(null);
      }
    };

    promiseHandler();
  });
};
