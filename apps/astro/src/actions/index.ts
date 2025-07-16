import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  addToDatabase,
  createSupabaseClient,
} from "@repo/data-access/supabase";

export const server = {
  messages: defineAction({
    accept: "form",
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      message: z.string(),
    }),
    handler: async ({ firstName, lastName, email, message }) => {
      console.log("firstName", firstName);
      console.log("lastName", lastName);
      console.log("email", email);
      console.log("message", message);

      const supabase = createSupabaseClient(
        import.meta.env.PUBLIC_SUPABASE_URL,
        import.meta.env.PUBLIC_SUPABASE_ANON_KEY
      );

      const { error, data } = await addToDatabase(supabase, "messages", {
        firstName,
        lastName,
        email,
        message,
      });

      return { success: true };
    },
  }),
};
