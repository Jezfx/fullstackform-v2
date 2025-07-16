import { ReactElement } from "react";
import { TContactData } from "./page-contact.schemas";

export interface TPageContactFormState {
  errors?: Record<string, string>;
  successMsg?: string;
  data?: TContactData;
  blurs?: Record<string, boolean>;
}

export type TFormActionState = {
  data?: Record<string, string>;
  errors?: {
    form?: string;
    fields?: Record<string, string>;
  };
  isSuccess?: boolean;
  successMessage?: string;
};

type TPageContactFormProps = {
  state: TFormActionState;
  formAction: (formData: FormData) => void;
  pending: boolean;
};

export type TPageContactForm = (props: TPageContactFormProps) => ReactElement;
