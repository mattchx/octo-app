"use server"

import { eq } from "drizzle-orm";
import { db } from "@/db"
import { users } from "@/db/schema/users"
import { auth } from "@/auth"

export async function updateAccount(prevState: { message: string; }, formData: FormData) {
  const bio = formData.get('bio') as string;

  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    return {message: "user does not exist"}
  }

  try {
    await db.update(users)
      .set({ bio })
      .where(eq(users.id, userId))
  } catch (error) {
    return { message: "error" }
  }
  return { message: "success" }
}