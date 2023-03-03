import { Paper, Text } from "@mantine/core"
import { Prisma } from "@prisma/client"

type Props = {
  nft: Prisma.JsonValue | null | undefined
}

export function YourHeadstone({ nft }: Props) {
  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your headstone</Text>
      </Paper>
    </>
  )
}
