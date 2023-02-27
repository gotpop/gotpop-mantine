import { LayoutDashboard } from "@/components/LayoutDashboard"
import { MultiStepForm } from "@/components/MultiStepForm"
import { UserInfoIcons } from "@/components/UserInfoIcons"
import { Button, Container, Title } from "@mantine/core"
import { signOut, useSession } from "next-auth/react"

export default function MissionControl() {
  const { data: session } = useSession({ required: true })

  return (
    <LayoutDashboard>
      <Container size={800} p={20} fluid={true}>
        <Title order={1} mb={50}>
          Mission Control
        </Title>
        <MultiStepForm />
      </Container>
    </LayoutDashboard>
  )
}
