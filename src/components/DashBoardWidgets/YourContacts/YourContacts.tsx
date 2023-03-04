import { Paper, Text } from "@mantine/core"
import { Prisma } from "@prisma/client"
import { contactsData } from "./data"

type Props = {
  contacts: Prisma.JsonValue[] | null | undefined
}

export function YourContacts({ contacts }: Props) {
  // console.log("contacts :", contacts)

  // const liam = contacts?.filter((contact, i) => {
  //   console.log("contact :", contact)
  //   const { key } = contact

  //   return contact.key === contactsData[i].key
  //   // // console.log("ontactsData[i].key :", contactsData[i].key)
  // })

  // console.log("liam :", liam)

  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your contacts</Text>
        {/* {liam} */}
      </Paper>
    </>
  )
}
