import { authOptions } from "../api/auth/[...nextauth]"
import { Button, Container, Paper, Title, Text } from "@mantine/core"
import { getServerSession, Session } from "next-auth"
import { GetServerSideProps } from "next"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import prisma from "@/lib/prisma"
import { NextLink } from "@mantine/next"

type Props = {
  sessionData: Session
  missionItem: any
}

export default function MissionControl({ sessionData, missionItem }: Props) {
  console.log("sessionData, missionItem :", sessionData, missionItem)

  return (
    <LayoutDashboard>
      <Container my="xl">
        <Title order={1} mb={50}>
          Mission Control
        </Title>
        {!missionItem && (
          <Paper p="xl">
            <Text mb="xl">You need to complete the onboarding process!</Text>
            <NextLink href={"/mission-control/onboarding"} legacyBehavior>
              <Button>Launch today!</Button>
            </NextLink>
          </Paper>
        )}

        {missionItem && <pre>{JSON.stringify(missionItem, null, 2)}</pre>}
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
    where: { userId: sessionEmail }
  })

  return {
    props: {
      sessionData: session, // NextAuth session is namespaced. Use any other variable name.
      missionItem
    }
  }
}
