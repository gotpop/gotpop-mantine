import { AuthenticationForm } from "@/components/AuthenticationForm"
import { Layout } from "@/components/Layout"
import { Container } from "@mantine/core"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Login() {
  // const { data: session } = useSession()

  return (
    <Layout>
      <Container py="xl" mt={100}>
        <AuthenticationForm></AuthenticationForm>
      </Container>
    </Layout>
  )
}
