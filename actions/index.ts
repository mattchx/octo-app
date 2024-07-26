"use server"

import { eq } from "drizzle-orm";
import { db } from "@/db"
import { users } from "@/db/schema/users"
import { InsertLink, links } from "@/db/schema/links"
import { auth } from "@/auth"
import { revalidatePath } from 'next/cache'


export async function updateAccount(prevState: { status: string; }, formData: FormData) {
  const bio = formData.get('bio') as string;

  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    return { status: "user does not exist" }
  }

  try {
    await db.update(users)
      .set({ bio })
      .where(eq(users.id, userId))
  } catch (error) {
    return { status: "error" }
  }
  return { status: "success" }
}

export async function updateLinks(prevState: { status: string; }, formData: FormData) {

  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    return { status: "user does not exist" }
  }

  // Extract the form data
  const parsedLink = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    url: formData.get('url') as string,
    userId
  };

  try {
    // todo: Validate the extracted data

    // Insert the data
    await db.insert(links).values(parsedLink);

    revalidatePath('/dashboard')

    return { status: "success" }
  } catch (error) {
    console.log("error", error)
    return { status: "error" }
  }
}