import { ButtonProps, Button } from "@mantine/core"
import { signIn } from "next-auth/react"
import { GoogleIcon } from "./GoogleIcon"
import { GitHubIcon } from "./GitHubIcon"

export function GoogleButton(props: ButtonProps) {
  return (
    <Button
      onClick={() =>
        signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/mission-control` })
      }
      leftIcon={<GoogleIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  )
}

export function GitHubButton(props: ButtonProps) {
  return (
    <Button
      onClick={() =>
        signIn("github", { callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/mission-control` })
      }
      leftIcon={<GitHubIcon />}
      variant="default"
      color="gray"
      {...props}
    />
  )
}
