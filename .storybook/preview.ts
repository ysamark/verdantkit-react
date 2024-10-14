import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
// import { initialize, mswLoader } from "msw-storybook-addon";

import "../src/assets/stylesheet/globals.css";

// initialize();

Object.assign(global, {
  process: {
    env: {},
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  loaders: [
    // mswLoader
  ],

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
