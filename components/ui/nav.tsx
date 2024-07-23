import { signIn, signOut, auth } from "@/auth"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { SignOut } from './signout-button'
import { SignIn } from './signin-button'

export async function Nav() {
  const session = await auth()

  if (session?.user) {
    return (
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Link Pages</span>
        </Link>
        <nav className="ml-auto flex">
          <Button variant="link" className='text-tertiary'>
            <Link href="/dashboard" prefetch={false}>
              Dashboard
            </Link>
          </Button>
          <Button variant="link" className='text-tertiary'>
            <Link href="/dashboard/account" prefetch={false}>
              Account
            </Link>
          </Button>
          <SignOut />
        </nav>
      </header>
    )
  }

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Link Pages</span>
      </Link>
      <nav className="ml-auto flex">
        <SignIn />
      </nav>
    </header>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
