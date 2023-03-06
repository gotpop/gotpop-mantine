import { AuthenticationForm } from "@/components/AuthenticationForm"
import { Layout } from "@/components/Layout"
import { Container } from "@mantine/core"
import { GetServerSideProps } from "next"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

type Props = {
  sessionData: Session
}

export default function Login() {
  return (
    <Layout>
      <Container py="xl" mt={100}>
        <AuthenticationForm></AuthenticationForm>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/mission-control",
        permanent: false
      }
    }
  }

  return {
    props: {
      sessionData: session // NextAuth session is namespaced. Use any other variable name.
    }
  }
}
