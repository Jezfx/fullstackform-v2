"use client";

import { useActionState, useEffect } from "react";

import { PageContactForm } from "./page-contact-form";
import { pageContactAction } from "./page-contact.actions";
import { TPageContactFormState } from "./page-contact.types";

import { Toaster, toaster } from "@repo/ui/toaster";

const initialState: TPageContactFormState = {};

export const PageContactPage = () => {
  const [state, formAction, pending] = useActionState(
    pageContactAction,
    initialState
  );

  useEffect(() => {
    // timeout to get around a flushSync React issue
    let id: NodeJS.Timeout;

    if (state.isSuccess) {
      id = setTimeout(() => {
        toaster.success({
          title: state.successMessage,
        });
      }, 0); // Delay of 0 milliseconds to run after render
    }

    if (!state.isSuccess && state.errors?.form) {
      id = setTimeout(() => {
        toaster.error({
          title: state.errors?.form,
        });
      }, 0);
    }

    return () => clearTimeout(id);
  }, [state]);

  return (
    <main>
      <PageContactForm
        state={state}
        pending={pending}
        formAction={formAction}
      />
      <Toaster />
    </main>
  );
};
