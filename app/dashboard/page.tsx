import { MainForm } from './main-form'
import { LinkList } from './link-list'
import { userLinksQuery } from "@/db/queries"
import { Button } from '@/components/ui/button';

import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()
  const { links } = await userLinksQuery()

  return (
    <main>
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Link Manager</h1>
          <Button variant="ghost">Profile</Button>
        </header>
        <p>Welcome back {session?.user?.name}!</p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <MainForm />
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
