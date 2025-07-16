import { initTRPC, TRPCError } from "@trpc/server";
import {
  createSupabaseClient,
  addToDatabase,
} from "@repo/data-access/supabase";
import { contactFormSchema } from "./schemas";
import { z } from "zod";

const t = initTRPC.create();

export const appRouter = t.router({
  getMessagesByEmail: t.procedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input }) => {
      const supabase = createSupabaseClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("email", input.email);

      return { id: input.email, data };
    }),
  getMessages: t.procedure.query(async () => {
    const supabase = createSupabaseClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data, error } = await supabase.from("messages").select();

    return { data, error };
  }),
  submitMessage: t.procedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        const supabase = createSupabaseClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        const { data, error } = await addToDatabase(
          supabase,
          "messages",
          input
        );

        if (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to save message.",
          });
        }

        return {
          success: true,
          message: "Thank you for your message!",
          data: data,
        };
      } catch (error) {
        // Handle unexpected errors
        if (error instanceof TRPCError) {
          throw error;
        }

        console.error("An unexpected error occurred:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred.",
        });
      }
    }),
});

export type AppRouter = typeof appRouter;
