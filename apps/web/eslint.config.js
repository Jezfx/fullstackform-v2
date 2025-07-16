import { nextJsConfig } from "@repo/eslint-config/next-js";

export default [
  ...nextJsConfig,

  // Override for TS/TSX
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/prop-types": "off",
    },
  },
];
