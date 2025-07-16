export const revalidate = 10;
import { serverClient } from "../_trpc/server-client";

export default async function Messages() {
  const result = await serverClient.getMessages();

  return (
    <main>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </main>
  );
}
