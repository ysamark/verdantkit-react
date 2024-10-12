import { Nullish } from "@verdantkit/utils";

export const updateDialogSize = (scrollAreaElement: Nullish<HTMLElement>) => {
  if (!(scrollAreaElement instanceof HTMLElement)) {
    return;
  }

  const heightValue = (height: number) => `${height}px`;

  const dialogElementContainerMargin = 70;
  const scrollAreaElementParent =
    scrollAreaElement.parentNode as HTMLDivElement;
  const scrollAreaElementGrandParent =
    scrollAreaElementParent.parentNode as HTMLDivElement;

  const windowSafeAreaViewHeight =
    window.innerHeight - dialogElementContainerMargin * 2;

  scrollAreaElementParent.style.height = "max-content";
  scrollAreaElementGrandParent.style.cssText = "";

  if (!(scrollAreaElementParent.offsetHeight >= windowSafeAreaViewHeight)) {
    return;
  }

  const scrollAreaElementGrandParentStyles = {
    padding: "20px",
    overflow: "unset",
    display: "flex",
    alignItems: "center",
  };

  for (const key in scrollAreaElementGrandParentStyles) {
    const styleProperty =
      key as keyof typeof scrollAreaElementGrandParentStyles;

    Object.assign(scrollAreaElementGrandParent.style, {
      [key]: scrollAreaElementGrandParentStyles[styleProperty],
    });
  }

  scrollAreaElementParent.style.height = heightValue(windowSafeAreaViewHeight);
};
