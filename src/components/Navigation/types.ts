import { Nullish } from "@verdantkit/utils";

export type NavigationType = "stack" | "tabs";

export type NavigationAnimationType =
  | "slideLeft"
  | "slideRight"
  | "slideTop"
  | "slideBottom";

export type NavigationProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & {
    type?: Nullish<NavigationType>;
    animation?: Nullish<NavigationAnimationType>;
    home: string;
  }
>;

export type NavigationComponent = React.FunctionComponent<NavigationProps>;

export type NavigationContextDataObject = {
  props: NavigationProps;
  screen: number;
  navigating: boolean;
  stack: Array<string>;
  back: () => void;
  forward: () => void;
  goToHome: () => void;
  getCurrentScreen: () => string;
  canGoBack: () => boolean;
  canGoForward: () => boolean;
  goto: (screenName: "home" | string) => void;
  isCurrentScreen: (screenName: string) => boolean;
};
