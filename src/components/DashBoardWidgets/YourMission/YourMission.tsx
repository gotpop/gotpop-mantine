import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { missionData } from "./data"

type Props = {
  missionType: Mission["missionType"]
}

export function YourMission({ missionType }: Props) {
  const mission = missionData.find(({ key }) => key === missionType)
  const { description, title, image } = { ...mission }

  return (
    <Paper
      p="xl"
      style={{ display: "flex", gap: "1rem", justifyContent: "space-between", height: "100%", flex: "1" }}
    >
      <Box>
        <Title order={3} mb="xl">
          Your mission
        </Title>
        <Text weight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
      <Box>{image}</Box>
    </Paper>
  )
}
