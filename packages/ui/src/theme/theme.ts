"use client";

import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineRecipe,
} from "@chakra-ui/react";

const buttonRecipe = defineRecipe({
  base: {
    borderRadius: "lg",
    boxShadow: "-3px 5px 2px rgba(0, 0, 0, 0.1)",
    _hover: {
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    },
    _active: {
      boxShadow: "none",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "purple.800",
        color: "colorPalette.contrast",
      },
    },
    size: {
      md: {
        fontSize: "md",
        px: 15,
        py: 15,
      },
    },
  },
});

const textareaRecipe = defineRecipe({
  base: {
    borderRadius: "lg",
    _focus: {
      borderColor: "purple.800",
    },
  },
  variants: {
    variant: {
      outline: {
        _focusVisible: {
          borderColor: "purple.800",
        },
      },
    },
  },
});

const inputRecipe = defineRecipe({
  base: {
    height: "60px",
    borderWidth: "1px",
    borderRadius: "lg",
    pt: 15,
  },
  variants: {
    variant: {
      outline: {
        _focus: {
          borderColor: "purple.800",
        },
      },
    },
  },
});

const linkRecipe = defineRecipe({
  base: {
    color: "purple.800",
    textDecoration: "underline",
  },
});

const config = defineConfig({
  theme: {
    recipes: {
      link: linkRecipe,
      button: buttonRecipe,
      input: inputRecipe,
      textarea: textareaRecipe,
    },
  },
});

export const theme = createSystem(defaultConfig, config);
