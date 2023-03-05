import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { useStyles } from "../DashBoardWidgets.styles"
import { missionData } from "./data"

type Props = {
  missionType: Mission["missionType"]
}

export function YourMission({ missionType }: Props) {
  const mission = missionData.find(({ key }) => key === missionType)
  const { description, title, image } = { ...mission }
  const { classes } = useStyles()

  return (
    <Paper p="xl" className={classes.paper}>
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
