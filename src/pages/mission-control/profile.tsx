import { Layout } from "@/components/Layout"
import { LayoutDashboard } from "@/components/LayoutDashboard"
import { Container, Title } from "@mantine/core"

export default function Onboarding() {
  return (
    <LayoutDashboard>
      <Container my="xl">
        <Title order={1} mb={50}>
          Profile
        </Title>
      </Container>
    </LayoutDashboard>
  )
}
