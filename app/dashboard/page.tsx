import { MainForm } from "@/app/dashboard/main-form"

import { auth } from "@/auth"

export default async function Home() {

  const session = await auth()

  return (
    <main>
      <p>Welcome back {session?.user?.name}!</p>
      <MainForm />
    </main>
  );
}
