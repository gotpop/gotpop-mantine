import { Layout } from "@/components/Layout"
import { Button, Container, Title } from "@mantine/core"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()

  return (
    <Layout>
      <Container py="xl" mt={100}>
        <Title order={1}>Login</Title>
        <Button type="button" onClick={() => signIn()}>
          Click me!
        </Button>
      </Container>
    </Layout>
  )
}
