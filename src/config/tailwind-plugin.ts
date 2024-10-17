import tailwindCssAnimate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";
import { colors } from "~/utils";

export const VerdantKitTailwindPlugin = plugin(
  ({ addBase, addUtilities }) => {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "240 10% 3.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "240 10% 3.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "240 10% 3.9%",
        "--primary": "240 5.9% 10%",
        "--primary-foreground": "0 0% 98%",
        "--secondary": "240 4.8% 95.9%",
        "--secondary-foreground": "240 5.9% 10%",
        "--muted": "240 4.8% 95.9%",
        "--muted-foreground": "240 3.8% 46.1%",
        "--accent": "240 4.8% 95.9%",
        "--accent-foreground": "240 5.9% 10%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 5.9% 90%",
        "--input": "240 5.9% 90%",
        "--ring": "240 10% 3.9%",
        "--chart-1": "12 76% 61%",
        "--chart-2": "173 58% 39%",
        "--chart-3": "197 37% 24%",
        "--chart-4": "43 74% 66%",
        "--chart-5": "27 87% 67%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "240 10% 3.9%",
        "--foreground": "0 0% 98%",
        "--card": "240 10% 3.9%",
        "--card-foreground": "0 0% 98%",
        "--popover": "240 10% 3.9%",
        "--popover-foreground": "0 0% 98%",
        "--primary": "0 0% 98%",
        "--primary-foreground": "240 5.9% 10%",
        "--secondary": "240 3.7% 15.9%",
        "--secondary-foreground": "0 0% 98%",
        "--muted": "240 3.7% 15.9%",
        "--muted-foreground": "240 5% 64.9%",
        "--accent": "240 3.7% 15.9%",
        "--accent-foreground": "0 0% 98%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "240 3.7% 15.9%",
        "--input": "240 3.7% 15.9%",
        "--ring": "240 4.9% 83.9%",
        "--chart-1": "220 70% 50%",
        "--chart-2": "160 60% 45%",
        "--chart-3": "30 80% 55%",
        "--chart-4": "280 65% 60%",
        "--chart-5": "340 75% 55%",
      },
    });

    addBase({
      "*": {
        "box-sizing": "border-box",
        margin: "0px",
        outline: "0px",
        padding: "0px",
      },
    });

    addBase({
      ".data-loading-dialog-checkmark": {
        width: "40px",
        height: "40px",
        "border-radius": "50%",
        display: "block",
        "stroke-width": "2",
        stroke: "#fff",
        "stroke-miterlimit": "10",
        "box-shadow": "inset 0px 0px 0px #7ac142",
        animation:
          "data-loading-dialog-checkmark-fill 0.4s ease-in-out 0.4s forwards, data-loading-dialog-checkmark-scale 0.3s ease-in-out 0.9s both",
      },
      ".data-loading-dialog-checkmark__circle": {
        "stroke-dasharray": "166",
        "stroke-dashoffset": "166",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        stroke: "#7ac142",
        fill: "none",
        animation:
          "data-loading-dialog-checkmark-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
      },
      ".data-loading-dialog-checkmark__check": {
        "transform-origin": "50% 50%",
        "stroke-dasharray": "48",
        "stroke-dashoffset": "48",
        animation:
          "data-loading-dialog-checkmark-stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards",
      },
    });

    addUtilities({
      "@keyframes slideToLeft": {
        "0%": {
          transform: "scale(0.9) translateX(-20%)",
          opacity: "0.9",
        },
        "40%": {
          transform: "scale(0.9) translateX(-50%)",
          opacity: "0.7",
        },
        "80%": {
          transform: "scale(0.8) translateX(-80%)",
          opacity: "0.5",
        },
        "100%": {
          transform: "scale(1) translateX(-100%)",
          opacity: "0.3",
        },
      },
    });

    addUtilities({
      "@keyframes data-loading-dialog-checkmark-stroke": {
        "100%": {
          "stroke-dashoffset": "0",
        },
      },
      "@keyframes data-loading-dialog-checkmark-scale": {
        "0%, 100%": {
          transform: "none",
        },
        "50%": {
          transform: "scale3d(1.1, 1.1, 1)",
        },
      },
      "@keyframes data-loading-dialog-checkmark-fill": {
        "100%": {
          "box-shadow": "inset 0px 0px 0px 30px #7ac142",
        },
      },
    });
  },
  () => ({
    darkMode: ["class"],
    theme: {
      extend: {
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        colors: {
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          chart: {
            1: "hsl(var(--chart-1))",
            2: "hsl(var(--chart-2))",
            3: "hsl(var(--chart-3))",
            4: "hsl(var(--chart-4))",
            5: "hsl(var(--chart-5))",
          },

          gray: {
            50: "#f4f4f5",
            100: "#e4e4e7",
            200: "#d4d4d8",
            300: "#a1a1aa",
            400: "#71717a",
            500: "#52525b",
            600: "#3f3f46",
            700: "#27272a",
            900: "#18181b",
            950: "#09090b",
          },

          verdant: colors("#bca4eb"),
        },

        keyframes: {
          slideUpAndFade: {
            "0%": { opacity: "0", transform: "translateY(2px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          slideRightAndFade: {
            "0%": { opacity: "0", transform: "translateX(-2px)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
          slideDownAndFade: {
            "0%": { opacity: "0", transform: "translateY(-2px)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          slideLeftAndFade: {
            "0%": { opacity: "0", transform: "translateX(2px)" },
            "100%": { opacity: "1", transform: "translateX(0)" },
          },
        },

        animations: {
          slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          slideDownAndFade:
            "slideDownAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          slideRightAndFade:
            "slideRightAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          slideLeftAndFade:
            "slideLeftAndFade 300ms cubic-bezier(0.16, 0, 0.13, 1)",
          slideToLeft: "slideToLeft 1s ease-in-out",
          "checkmark-stroke":
            "data-loading-dialog-checkmark-stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
          "checkmark-scale":
            "data-loading-dialog-checkmark-scale 0.3s ease-in-out 0.9s both",
          "checkmark-fill":
            "data-loading-dialog-checkmark-fill 0.4s ease-in-out 0.4s forwards",
        },
      },
    },
    plugins: [tailwindCssAnimate],
  })
);

const tailwindPlugin = () => VerdantKitTailwindPlugin;

export { tailwindPlugin as plugin };
