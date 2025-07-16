import { z } from "zod";

export const contactSchema = z.object({
  firstName: z
    .string({ message: "First name is required" })
    .min(1, "First name is required")
    .refine((val) => !val.toLowerCase().includes("foo"), {
      message: "should not contain 'foo'",
    }),
  lastName: z
    .string({ message: "Last name is required" })
    .min(1, "Last name is required")
    .refine((val) => !val.toLowerCase().includes("foo"), {
      message: "should not contain 'foo'",
    }),
  email: z
    .string({ message: "Email is required" })
    .email("Email must be a valid email")
    .refine((val) => !val.toLowerCase().includes("foo"), {
      message: "should not contain 'foo'",
    }),
  message: z
    .string({ message: "Message is required" })
    .min(1, "Message is required")
    .refine((val) => !val.toLowerCase().includes("foo"), {
      message: "should not contain 'foo'",
    }),
});

export type TContactData = z.infer<typeof contactSchema>;
