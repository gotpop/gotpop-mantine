import { AuthenticationForm } from "@/components/AuthenticationForm"
import { Layout } from "@/components/Layout"
import { Container } from "@mantine/core"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function Login() {
  const { status } = useSession()
  const router = useRouter()

  if (status === "authenticated") {
    router.push("/mission-control")
  }

  return (
    <Layout>
      <Container py="xl" mt={100}>
        <AuthenticationForm></AuthenticationForm>
      </Container>
    </Layout>
  )
}
