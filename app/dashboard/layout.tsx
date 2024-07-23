import { auth } from "@/auth"
import { ReactNode } from 'react';

import { redirect } from 'next/navigation'

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await auth()

  if (!session) {
    redirect('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {children}
    </div>
  );
}

