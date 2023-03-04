import { Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { missionData } from "./data"

type Props = {
  missionType: Mission["missionType"]
}

export function YourMission({ missionType }: Props) {
  const mission = missionData.find(({ key }) => key === missionType)
  const { description, title } = { ...mission }

  return (
    <Paper p="xl">
      <Title order={3} mb="xl">
        Your mission
      </Title>
      <Text weight="bold">{title}</Text>
      <Text>{description}</Text>
    </Paper>
  )
}
