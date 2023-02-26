import { Layout } from "@/components/Layout"
import { UserInfoIcons } from "@/components/UserInfoIcons"
import { Button, Container, Paper, Title } from "@mantine/core"
import { signOut, useSession } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession({ required: true })

  return (
    <Layout>
      <Container py="xl" mt={100}>
        <Title order={1}>Account</Title>
        <Button
          type="button"
          my={50}
          color={"red"}
          onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })}
        >
          Log out
        </Button>

        {session && <UserInfoIcons session={session} />}
      </Container>
    </Layout>
  )
}

// signOut({ callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })
