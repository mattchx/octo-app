import Link from "next/link";
import { signIn } from "@/auth"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      {/* <form> */}
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex justify-center">
            <Link href="#" prefetch={false}>
              <MountainIcon className="h-8 w-8" />
              <span className="sr-only">Acme Inc</span>
            </Link>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Log in to your account
            </h1>
            <p className="text-muted-foreground">
              Enter your email and password below to access your account.
            </p>
          </div>
          <Card>
            <form>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {/* todo: implement forgot password */}
                    {/* <Link
                    href="#"
                    className="text-sm font-medium underline underline-offset-4 text-primary hover:text-primary/90"
                    prefetch={false}
                  >
                    Forgot password?
                  </Link> */}
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter>
                {/* <Button formAction={login} className="w-full">
                  Log in
                </Button> */}
              </CardFooter>
            </form>
          </Card>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-primary hover:text-primary/90 underline underline-offset-4"
              prefetch={false}
            >
              Sign up
            </Link>
          </p>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-3">
              <form
              action={async () => {
                "use server"
                await signIn("google")
              }}>
                <Button
                  variant="outline"
                  className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <ChromeIcon className="mr-2 h-5 w-5" />
                  Sign in with Google
                </Button>
              </form>
            </div>
          </div>
        </div>
      {/* </form> */}
    </div>
  );
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
  );
}

function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}