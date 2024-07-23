"use client";

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom";
import { updateAccount } from "@/actions";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User } from '@/db/schema/users'

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

export function AccountForm({ user: userData }: { user: User }) {
  const [state, formAction] = useFormState(updateAccount, initialState);
  const [user, setUser] = useState(userData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("VALUE", e?.target?.value)
    setUser({ ...user, bio: e.target.value })
  }

  return (
    <form action={formAction}>
      Bio:
      <Input type="text" id="bio" name="bio" value={user.bio ?? ""} required onChange={handleChange} />

      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}