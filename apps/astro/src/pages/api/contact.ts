import type { FormAction } from "astro/actions";

export const action: FormAction = async ({ request }) => {
  console.log(request);

  return { success: true };

  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");

  console.log({ name, message }); // you could also store this, send email, etc.

  return { success: true };
};
