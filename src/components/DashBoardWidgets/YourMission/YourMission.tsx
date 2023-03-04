import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { missionData } from "./data"

type Props = {
  missionType: Mission["missionType"]
}

type missionDataType = {
  key: string
  title: string
  description: string
  email: string
  phone: string
  image: JSX.Element
}

export function YourMission({ missionType }: Props) {
  const mission = missionData.find(({ key }: missionDataType) => key === missionType)
  const { description, title, image } = { ...mission } as missionDataType

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
