import { authOptions } from "../api/auth/[...nextauth]"
import { Button, Container, Paper, Title, Text, SimpleGrid } from "@mantine/core"
import { getServerSession, Session } from "next-auth"
import { GetServerSideProps } from "next"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import prisma from "@/lib/prisma"
import { NextLink } from "@mantine/next"
import { Mission } from "@prisma/client"
import { DashBoardWidgets } from "@/components/DashBoardWidgets"
import { fetcher } from "@/utils/fetcher"
import useSWR from "swr"

type Props = {
  sessionData: Session
}

export default function MissionControl({ sessionData }: Props) {
  const { data: missionItem, error, isLoading } = useSWR<Mission>("/api/mission", fetcher)

  return (
    <LayoutDashboard>
      <Container fluid my="xl">
        <Title order={2} mb={20} ml={10}>
          Welcome to Mission Control, {sessionData.user?.name}!
        </Title>

        {!missionItem && !isLoading && (
          <Paper p="xl">
            <Text mb="xl">You need to complete the preflight checks!</Text>
            <NextLink href={"/mission-control/preflight"} legacyBehavior>
              <Button>Launch today!</Button>
            </NextLink>
          </Paper>
        )}

        <DashBoardWidgets missionItem={missionItem} isLoading={isLoading} />
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
