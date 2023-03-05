import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { useStyles } from "../DashBoardWidgets.styles"
import { wishData } from "./data"

type Props = {
  finalWish: Mission["finalWish"]
}

export function YourWishes({ finalWish }: Props) {
  const wish = wishData.find(({ key }) => key === finalWish)
  const { description, title } = { ...wish }

  const { classes } = useStyles()

  return (
    <Paper p="xl" className={classes.paper}>
      <Box className={classes.content}>
        <Title order={3} mb="xl">
          Your final wish
        </Title>
        <Text weight="bold" fs="italic" mb="md">
          {title}
        </Text>
        <Text>{description}</Text>
      </Box>
    </Paper>
  )
}
