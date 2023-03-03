import { Paper, Text } from "@mantine/core"

type Props = {
  missionType: string | null | undefined
}

export function YourMission({ missionType }: Props) {
  return (
    <>
      <Paper p="xl">
        <Text mb="xl">Your mission</Text>
      </Paper>
    </>
  )
}
