"use server"

import { eq } from "drizzle-orm";
import { db } from "@/db"
import { users } from "@/db/schema/users"
import { InsertLink, links } from "@/db/schema/links"
import { auth } from "@/auth"

export async function updateAccount(prevState: { message: string; }, formData: FormData) {
  const bio = formData.get('bio') as string;

  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    return { message: "user does not exist" }
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

export async function updateLinks(prevState: { message: string; }, formData: FormData) {

  const session = await auth()
  const userId = session?.user?.id

  // Extract the form data
  const linksArray = [];
  let i = 0;

  while (formData.has(`link-${i}-title`)) {
    linksArray.push({
      title: formData.get(`link-${i}-title`) as string,
      description: formData.get(`link-${i}-description`) as string,
      url: formData.get(`link-${i}-url`) as string,
      userId
    });
    i++;
  }

  try {
    // todo: Validate the extracted data

    // Insert the data
    const insertResult = await db.insert(links).values(linksArray as Array<InsertLink>);
    console.log(insertResult)
    return { message: "success" }
  } catch (error) {
    console.log("error", error)
    return { message: "error" }
  }
}