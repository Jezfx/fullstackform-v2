"use server";

import { revalidatePath } from "next/cache";
import { TRPCError } from "@trpc/server";

import { TContactData } from "../../_trpc/schemas";
import { serverClient } from "../../_trpc/server-client";
import { TFormActionState } from "./page-contact.types";
import { extractFormData, flattenZodErrors } from "./page-contact.utils";

const fields = ["firstName", "lastName", "email", "message"];

export const pageContactAction = async (
  prevState: TFormActionState,
  formData: FormData
): Promise<TFormActionState> => {
  const unvalidatedData = extractFormData(formData, fields);

  try {
    const result = await serverClient.submitMessage(
      unvalidatedData as TContactData
    );

    if (result.success) {
      revalidatePath("/contact");
      return {
        isSuccess: true,
        successMessage: result.message,
      };
    }
  } catch (error) {
    if (error instanceof TRPCError) {
      if (error.code === "BAD_REQUEST") {
        // This will handle the Zod validation errors
        console.log("error", JSON.parse(error.message));
        return {
          data: unvalidatedData,
          errors: {
            form: "Please check the errors and try again.",
            fields: flattenZodErrors(JSON.parse(error.message)),
          },
        };
      }
      // Handle other tRPC errors
      return {
        data: unvalidatedData,
        errors: { form: error.message },
      };
    }

    // Handle unexpected errors
    return {
      data: unvalidatedData,
      errors: { form: "Sorry, something went wrong, please try again." },
    };
  }

  return {
    data: unvalidatedData,
    errors: { form: "Sorry, something went wrong, please try again." },
  };
};
