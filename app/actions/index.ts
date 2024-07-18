'use server'

// import { createClient } from '@/utils/supabase/client'
import { createUser } from '@/db/queries'

export async function createAccount(prevState: { message: string; }, formData: FormData) {
  // const supabase = createClient()
  // const { data, error } = await supabase.auth.getUser()

  // console.log("FORMDATA", formData)
  // const name = formData.get("name") as string
  // const bio = formData.get("bio") as string

  // const userData = { name, bio, email: data.user?.email || "", id: crypto.randomUUID()}
  // console.log("ERROR:", error?.message)
  // console.log("EMAIL:", data.user?.email)
  // // if (error) {
  // //   return { message: "failed" }
  // // }

  // await createUser(userData)


  return { message: "success" }
}
