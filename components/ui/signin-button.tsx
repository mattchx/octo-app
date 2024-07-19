import { signIn } from "../../auth"
import { Button } from "./button"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("auth", { redirectTo: "/dashboard" })
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  )
}