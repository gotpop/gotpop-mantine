import { List, Paper, Text, ThemeIcon, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { IconCircleCheck } from "@tabler/icons-react"
import { contactsData } from "./data"

type Props = {
  contacts: Mission["contacts"]
}

export function YourContacts({ contacts }: Props) {
  const activeContacts = contactsData?.filter((item, i) => {
    if (contacts && contacts[i]?.active) {
      return item.key === contacts[i].key
    }
  })

  const list = activeContacts.map(({ name, key, email }) => <List.Item key={key}>{name}</List.Item>)

  return (
    <>
      <Paper
        p="xl"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "space-between",
          height: "100%",
          flex: "1"
        }}
      >
        <Title order={3}>Next of kin</Title>
        <Text>We will contact the people closest to you in case of any technical issues.</Text>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck size="1rem" />
            </ThemeIcon>
          }
        >
          {list}
        </List>
      </Paper>
    </>
  )
}
