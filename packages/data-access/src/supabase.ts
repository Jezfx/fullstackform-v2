import { createClient } from "@supabase/supabase-js";

// Avoid instantiating the client here to keep it environment-agnostic.
// Instead, export a function that takes the environment variables as arguments.

export const createSupabaseClient = (url: string, anonKey: string) => {
  if (!url || !anonKey) {
    throw new Error("Supabase URL and Anon Key must be provided.");
  }
  return createClient(url, anonKey);
};

export const addToDatabase = async (
  supabase: ReturnType<typeof createSupabaseClient>,
  table: string,
  validatedData: Record<string, string>
) => {
  return await supabase.from(table).insert(validatedData).select();
};
