import { Paper, Text } from "@mantine/core"
import { Mission, Prisma } from "@prisma/client"
import { IconCheck, IconCheckbox, IconHeart } from "@tabler/icons-react"
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

  const list = activeContacts.map(({ name, key, email }) => (
    <Paper key={key}>
      <Text weight="lighter">
        <span>{name}</span>
        <IconCheck style={{ stroke: "grey" }} />
      </Text>
      <Text>{email}</Text>
    </Paper>
  ))

  return (
    <>
      <Paper p="xl" style={{ gap: "1rem", height: "100%", flex: "1" }}>
        <Text weight="bold" mb="xl">
          <span>Your contacts</span>
          <IconHeart />
        </Text>
        {list}
      </Paper>
    </>
  )
}
