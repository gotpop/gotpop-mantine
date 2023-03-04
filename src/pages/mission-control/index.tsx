import { DashBoardWidgets } from "@/components/DashBoardWidgets"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import { Container, Title } from "@mantine/core"
import { GetServerSideProps } from "next"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"

type Props = {
  sessionData: Session
}

export default function MissionControl({ sessionData }: Props) {
  return (
    <LayoutDashboard>
      <Container fluid my="xl">
        <Title order={2} mb={20} ml={10}>
          Welcome to Mission Control, {sessionData.user?.name}!
        </Title>

        {/* {!missionItem && !isLoading && (
          <Paper p="xl">
            <Text mb="xl">You need to complete the preflight checks!</Text>
            <NextLink href={"/mission-control/preflight"} legacyBehavior>
              <Button>Launch today!</Button>
            </NextLink>
          </Paper>
        )} */}

        <DashBoardWidgets />
      </Container>
    </LayoutDashboard>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/",
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
