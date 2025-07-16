import { ZodError } from "zod";

/**
 * Flattens a ZodError object into a record of field names and error messages.
 * @param error - The ZodError object to flatten.
 * @returns A record of field names and error messages.
 */
export const flattenZodErrors = (error: ZodError): Record<string, string> =>
  error.issues.reduce(
    (acc: { [key: string]: string }, issue) => {
      if (issue.path[0]) {
        acc[issue.path[0]] = issue.message;
      }
      return acc;
    },
    {} as Record<string, string>
  );

/**
 * Extracts form data from a FormData object and returns a record of the specified keys.
 * @param formData - The FormData object to extract data from.
 * @param keys - The keys to extract from the FormData object.
 * @returns A record of the specified keys.
 */
export const extractFormData = (formData: FormData, keys: string[]) => {
  const data = {} as Record<string, string>;

  keys.forEach((key) => {
    data[key] = formData.get(key as string)?.toString() ?? "";
  });

  return data;
};
