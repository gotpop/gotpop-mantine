import { authOptions } from "../api/auth/[...nextauth]"
import { Avatar, Text, Paper } from "@mantine/core"
import { Container, Title } from "@mantine/core"
import { getServerSession } from "next-auth/next"
import { GetServerSideProps } from "next"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import { Session } from "next-auth"

export default function Profile({ sessionData }: { sessionData: Session }) {
  return (
    <LayoutDashboard>
      <Container my="xl">
        <Title order={1} mb={50}>
          Profile
        </Title>
        <Paper
          radius="md"
          withBorder
          p="lg"
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white
          })}
        >
          <Avatar src={sessionData?.user?.image} size={120} radius={120} mx="auto" />
          <Text align="center" size="lg" weight={500} mt="md">
            {sessionData?.user?.name}
          </Text>
          <Text align="center" color="dimmed" size="sm">
            {sessionData?.user?.email}
          </Text>
        </Paper>
      </Container>
    </LayoutDashboard>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)
  const sessionData = session
  // NextAuth session is namespaced. Use any other variable name.

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      sessionData
    }
  }
}
