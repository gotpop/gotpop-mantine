import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { useStyles } from "../DashBoardWidgets.styles"
import { missionData } from "./data"

type Props = {
  missionType: Mission["missionType"] | undefined
}

export function YourMission({ missionType }: Props) {
  const mission = missionData.find(({ key }) => key === missionType)
  const { description, title, image } = { ...mission }
  const { classes } = useStyles()

  return (
    <Paper p="xl" className={classes.paper}>
      <Box className={classes.content}>
        <Title order={3} mb="xl">
          Your mission
        </Title>
        <Text weight="bold" mb="md">
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>
      <Box className={classes.image}>{image}</Box>
    </Paper>
  )
}
