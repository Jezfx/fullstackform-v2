import { defineStyle } from "@chakra-ui/react";

export const floatingStyles = defineStyle({
  pos: "absolute",
  px: "0.5",
  top: "2",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "all 0.2s ease",
  bg: "transparent",
  // Default "has value" or "focused" style
  fontSize: ".6rem",
  zIndex: 10,

  _peerPlaceholderShown: {
    // This triggers only when input has *no value*
    bg: "transparent",
    top: "5",
    insetStart: "3",
    fontSize: "md", // optional, you can reset size
  },

  _peerFocusVisible: {
    bg: "transparent",
    top: "2",
    insetStart: "2",
    fontSize: ".6rem",
  },
});
