import { DashBoardWidgets } from "@/components/DashBoardWidgets"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import { fetcher } from "@/utils/fetcher"
import { Button, Container, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { GetServerSideProps } from "next"
import { getServerSession, Session } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"
import useSWR from "swr"
import Link from "next/link"

type Props = {
  sessionData: Session
}

export default function MissionControl({ sessionData }: Props) {
  const { data: missionData, error, isLoading } = useSWR<Mission>("/api/mission", fetcher)

  return (
    <LayoutDashboard>
      <Container fluid my="xl">
        <Title order={2} mb={20} ml={10}>
          Welcome to Mission Control, {sessionData.user?.name}!
        </Title>

        {missionData === null && !isLoading && (
          <Paper p="xl">
            <Text mb="xl">You need to complete the preflight checks!</Text>
            <Link href={"/mission-control/preflight"} legacyBehavior>
              <Button>Launch today!</Button>
            </Link>
          </Paper>
        )}

        {missionData === undefined ||
          (missionData && <DashBoardWidgets missionData={missionData} isLoading={isLoading} />)}
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
