import { Paper, Text } from "@mantine/core"
import { Prisma } from "@prisma/client"

type Props = {
  contacts: Prisma.JsonValue[] | null | undefined
}

export function YourContacts({ contacts }: Props) {
  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your contacts</Text>
      </Paper>
    </>
  )
}
