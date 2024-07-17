import { MainForm } from "@/app/dashboard/main-form"

export default async function Home() {

  return (
    <main>
      <div className="min-h-screen bg-gray-100 p-8">
        <MainForm/>
      </div>
    </main>
  );
}
