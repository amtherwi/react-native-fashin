import { createText, BaseTheme } from '@shopify/restyle'
const fonts = {
  "SFProText-Bold": require("../../assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("../../assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
};

const theme: BaseTheme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "rgba(12,13,52,0.05)",
    title: "#0C0D34",
    body: "rgba(12,13, 52, 0.7)",
    white: "white"
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color: "white",
        textAlign: "center",
    },
    title1: {
        fontSize: 28,
        fontFamily: "SFProText-Semibold",
        color: "title",
    },
    title2: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "SFProText-Semibold",
        color: "title",
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: "SFProText-Regular",
        color: "body", 
    },
    textButton: {
      fontFamily: "SFProText-Regular",
    fontSize: 15,
    textAlign: "center",
    }
  },
  breakpoints: {

  },
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export default theme;