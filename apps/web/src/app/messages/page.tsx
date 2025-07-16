import { createSupabaseClient } from "@repo/data-access/supabase";

export default async function Messages() {
  const supabase = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: users } = await supabase.from("messages").select();

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
