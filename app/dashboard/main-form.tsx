"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createAccount } from "@/app/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

export function MainForm() {
  const [state, formAction] = useFormState(createAccount, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="todo">Enter Task</label>
      Name:
      <input type="text" id="name" name="name" required />
      Bio:
      <input type="text" id="bio" name="bio" required />

      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}