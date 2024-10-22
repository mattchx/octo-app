import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-foreground px-4 md:px-6">
      <div className="max-w-md w-full space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-24 w-24 animate-pulse border-2 border-primary">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center space-y-1 animate-fade-in">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="grid gap-4 animate-fade-in-up">
          <Card className="parent group flex items-center gap-3 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out">
            <GithubIcon className="h-6 w-6 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Github</span>
          </Card>
          <Card className="parent group flex items-center gap-3 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out">
            <TwitterIcon className="h-6 w-6 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Twitter</span>
          </Card>
          <Card className="parent group flex items-center gap-3 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out">
            <LinkedinIcon className="h-6 w-6 group-hover:animate-bounce" />
            <span className="text-sm font-medium">LinkedIn</span>
          </Card>
          <Card className="parent group flex items-center gap-3 px-4 py-3 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 ease-in-out">
            <GlobeIcon className="h-6 w-6 group-hover:animate-bounce" />
            <span className="text-sm font-medium">Website</span>
          </Card>
        </div>
      </div>
    </div>
  )
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function GlobeIcon(props) {
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
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}