import { auth } from "@/auth"
import { AccountForm } from './account-form'
import { User } from '@/db/schema/users'


export default async function Account() {
  const session = await auth()

  if (!session?.user?.id) {
    return <div>User not found</div>
  }

  return <AccountForm user={session?.user as User} />
}