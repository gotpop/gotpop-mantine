import { Paper, Text } from "@mantine/core"
import { Mission, Prisma } from "@prisma/client"
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
      <Text weight="lighter">{name}</Text>
      <Text>{email}</Text>
    </Paper>
  ))

  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your contacts</Text>
        {list}
      </Paper>
    </>
  )
}
