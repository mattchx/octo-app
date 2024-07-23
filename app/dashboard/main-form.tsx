"use client";

import { useFormState, useFormStatus } from "react-dom";
import { updateAccount } from "@/actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      Add
    </Button>
  );
}

export function MainForm() {
  const [state, formAction] = useFormState(updateAccount, initialState);

  return (
    <form action={formAction}>
      Bio:
      <Input type="text" id="bio" name="bio" required />

      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}