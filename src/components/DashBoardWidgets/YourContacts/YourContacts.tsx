import { Box, List, Paper, Text, ThemeIcon, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { IconCircleCheck } from "@tabler/icons-react"
import { useStyles } from "../DashBoardWidgets.styles"
import { contactsData } from "./data"

type Props = {
  contacts: Mission["contacts"] | undefined
}

export function YourContacts({ contacts }: Props) {
  const { classes } = useStyles()

  const activeContacts = contactsData?.filter(({ key }, i) => {
    if (contacts && contacts[i]?.active) {
      return key === contacts[i].key
    }
  })

  const list = activeContacts.map(({ name, key }) => <List.Item key={key}>{name}</List.Item>)

  return (
    <Paper p="xl" className={classes.paper}>
      <Box className={classes.content}>
        <Title order={3} mb="md">
          Next of kin
        </Title>
        <Text mb="xl" fs="italic">
          We will contact the people closest to you in case of any technical issues.
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={30} radius="xl">
              <IconCircleCheck size="2rem" />
            </ThemeIcon>
          }
        >
          {list}
        </List>
      </Box>
    </Paper>
  )
}
