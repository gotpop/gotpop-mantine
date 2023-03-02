import { LayoutDashboard } from "@/components/LayoutDashboard"
import { MultiStepForm } from "@/components/MultiStepForm"
import { Container, Title } from "@mantine/core"

export default function Onboarding() {
  return (
    <LayoutDashboard>
      <Container my="xl">
        <Title order={1} mb={50}>
          Preflight
        </Title>
        <MultiStepForm />
      </Container>
    </LayoutDashboard>
  )
}
