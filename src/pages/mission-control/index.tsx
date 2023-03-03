import { authOptions } from "../api/auth/[...nextauth]"
import { Button, Container, Paper, Title, Text, SimpleGrid } from "@mantine/core"
import { getServerSession, Session } from "next-auth"
import { GetServerSideProps } from "next"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import prisma from "@/lib/prisma"
import { NextLink } from "@mantine/next"
import { Mission } from "@prisma/client"
import { DashBoardWidgets } from "@/components/DashBoardWidgets"

type Props = {
  sessionData: Session
  missionItem: Mission
}

export default function MissionControl({ sessionData, missionItem }: Props) {
  return (
    <LayoutDashboard>
      <Container fluid my="xl">
        <Title order={2} mb={20} ml={10}>
          Welcome to Mission Control, {sessionData.user?.name}!
        </Title>

        {!missionItem && (
          <Paper p="xl">
            <Text mb="xl">You need to complete the preflight checks!</Text>
            <NextLink href={"/mission-control/preflight"} legacyBehavior>
              <Button>Launch today!</Button>
            </NextLink>
          </Paper>
        )}

        {/* {missionItem && <pre>{JSON.stringify(missionItem, null, 2)}</pre>} */}
        {missionItem && (
          <>
            <DashBoardWidgets />
          </>
        )}
      </Container>
    </LayoutDashboard>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const { user } = session
  const sessionEmail = user?.email ? user?.email : undefined

  const missionItem = await prisma.mission.findUnique({
    where: { userId: sessionEmail },
    select: {
      finalWish: true,
      missionType: true,
      contacts: true,
      nft: true
    }
  })

  return {
    props: {
      sessionData: session, // NextAuth session is namespaced. Use any other variable name.
      missionItem
    }
  }
}
