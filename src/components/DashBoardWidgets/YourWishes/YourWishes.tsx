import { Paper, Text } from "@mantine/core"

type Props = {
  finalWish: string | null | undefined
}

export function YourWishes({ finalWish }: Props) {
  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your final wishes</Text>
      </Paper>
    </>
  )
}
