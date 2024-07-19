import { auth } from "@/auth"

import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  return (
    <>
      {children}
    </>
  );
}

