import { auth } from "@/auth"
import { db } from "@/db"
import { links } from '../schema/links'
import { eq } from 'drizzle-orm'

export async function userLinksQuery() {
  const session = await auth()

  const userId = session?.user?.id
  if (!userId) {
    return { status: "user does not exist" }
  }

  try {
    const result = await db.select().from(links).where(eq(links.userId, userId))
    console.log(result)
    return { status: "success", links: result }
  } catch (error) {
    return { status: "error" }
  }
}