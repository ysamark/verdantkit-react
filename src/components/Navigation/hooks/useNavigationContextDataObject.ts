import { useEffect, useState } from "react";

import {
  NavigationContextDataObject,
  NavigationProps,
} from "@components/Navigation/types";

type UseNavigationContextDataObjectHook = (
  props: NavigationProps
) => NavigationContextDataObject;

export const useNavigationContextDataObject: UseNavigationContextDataObjectHook =
  (props) => {
    const [screen, setScreen] = useState<number>(0);
    const [navigating, setNavigating] = useState<boolean>(false);
    const [stack, setStack] = useState<Array<string>>([props.home]);

    useEffect(() => {
      // if (navigating) {
      //   setNavigating(false)
      // }
    }, [navigating]);

    const navigate = (callback: () => void) => {
      setNavigating(true);

      setTimeout(() => {
        setNavigating(false);
        callback();
      }, 400);
    };

    return {
      props,
      screen,
      navigating,

      get stack() {
        return stack.slice(0, screen + 1);
      },

      back() {
        if (screen >= 1) {
          navigate(() => setScreen(screen - 1));
        }
      },

      forward() {
        if (screen < stack.length - 1) {
          navigate(() => setScreen(screen + 1));
        }
      },

      canGoBack() {
        return screen >= 1;
      },

      canGoForward() {
        return stack.length > screen + 1;
      },

      getCurrentScreen() {
        return stack[screen];
      },

      goto(targetScreen) {
        if (this.isCurrentScreen(targetScreen)) {
          return;
        }

        navigate(() => {
          setScreen(screen + 1);
          setStack([...stack.slice(0, screen + 1), targetScreen]);
        });
      },

      goToHome() {
        navigate(() => {
          setScreen(0);
          setStack(stack.slice(0, 1));
        });
      },

      isCurrentScreen(screenName) {
        return this.getCurrentScreen() === screenName;
      },
    };
  };
