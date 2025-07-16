import type { Meta } from "@storybook/react";

import { PageContactForm } from "./page-contact-form";

const meta = {
  title: "Web/Pages/Contact",
  component: PageContactForm,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PageContactForm>;

export default meta;

export const Default = {
  args: {
    formAction: () => {},
    pending: false,
    state: { data: {} },
  },
};

export const Loading = {
  args: {
    pending: true,
    formAction: () => {},
    state: {
      data: {
        message: "Hello",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    },
  },
};

export const Error = {
  args: {
    pending: false,
    formAction: () => {},
    state: {
      errors: {
        fields: {
          firstName: "First name is required",
          lastName: "Last name is required",
          email: "Email is required",
          message: "Message is required",
        },
      },
      data: {
        message: "Hello",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
      },
    },
  },
};
