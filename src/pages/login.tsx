import { AuthenticationForm } from "@/components/AuthenticationForm"
import { Layout } from "@/components/Layout"
import { Container } from "@mantine/core"

export default function Login() {
  return (
    <Layout>
      <Container py="xl" mt={100}>
        <AuthenticationForm></AuthenticationForm>
      </Container>
    </Layout>
  )
}
