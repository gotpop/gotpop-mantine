import { LayoutDashboard } from "@/components/LayoutDashboard"
import { MultiStepForm } from "@/components/MultiStepForm"
import { Container, Title } from "@mantine/core"
import { useSession } from "next-auth/react"

export default function MissionControl() {
  const { data: session } = useSession({ required: true })

  return (
    <LayoutDashboard>
      <Container my="xl">
        <Title order={1} mb={50}>
          Mission Control
        </Title>
      </Container>
    </LayoutDashboard>
  )
}
