import { Button } from "./button";
import { ButtonProps } from "./button.types";
import type { StoryObj } from "@storybook/react";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  tags: ["button"],
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "I am a primary button.",
  },
};
