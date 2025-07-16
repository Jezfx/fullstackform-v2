"use server";

import { TFormActionState } from "./page-contact.types";
import { contactSchema } from "./page-contact.schemas";
import { extractFormData, flattenZodErrors } from "./page-contact.utils";
import { revalidatePath } from "next/cache";

import {
  addToDatabase,
  createSupabaseClient,
} from "@repo/data-access/supabase";

const fields = ["firstName", "lastName", "email", "message"];

export const pageContactAction = async (
  prevState: TFormActionState,
  formData: FormData
): Promise<TFormActionState> => {
  const unvalidatedData = extractFormData(formData, fields);

  const {
    success: isValid,
    data: validatedData,
    error: validationErrors,
  } = contactSchema.safeParse(unvalidatedData);

  if (!isValid) {
    return {
      isSuccess: false,
      data: unvalidatedData,
      errors: { fields: flattenZodErrors(validationErrors) },
    };
  }

  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { error, data } = await addToDatabase(
    supabase,
    "messages",
    validatedData
  );

  if (error) {
    // ⚠️ Send error to Sentry (or some tracking service) here

    return {
      data: validatedData,
      errors: { form: "Sorry, something went wrong, please try again." },
    };
  }

  revalidatePath("/contact");

  return {
    data: {
      id: data?.[0]?.id, // incase we need to redirect to a thank you page etc...
    },
    isSuccess: true,
    successMessage: `Thank you for your message ${validatedData.firstName}!`,
  };
};
