import { createStyles, Avatar, Text, Group, Paper } from "@mantine/core"
import { IconPhoneCall, IconAt } from "@tabler/icons-react"
import { Session } from "next-auth"

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[5]
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`
  }
}))

type Props = {
  session: Session
}

export function UserInfoIcons({ session }: Props) {
  const { user } = session
  const { classes } = useStyles()

  return (
    <Paper>
      <Group noWrap>
        <Avatar src={user?.image} size={94} radius="md" />
        <div>
          <Text size="xs" sx={{ textTransform: "uppercase" }} weight={700} color="dimmed">
            User info
          </Text>

          <Text size="lg" weight={500} className={classes.name}>
            {user?.name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <IconAt stroke={1.5} size={16} className={classes.icon} />
            <Text size="xs" color="dimmed">
              {user?.email}
            </Text>
          </Group>
        </div>
      </Group>
    </Paper>
  )
}
