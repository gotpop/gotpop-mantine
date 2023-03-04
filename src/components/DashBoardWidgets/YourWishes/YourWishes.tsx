import { Paper, Text, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { wishData } from "./data"

type MissonTypeProp = Pick<Mission, "finalWish">

type Props = {
  finalWish: MissonTypeProp["finalWish"]
}

export function YourWishes({ finalWish }: Props) {
  const wish = wishData.find(({ key }) => key === finalWish)
  const { description, title } = { ...wish }

  return (
    <Paper p="xl" style={{ gap: "1rem", height: "100%", flex: "1" }}>
      <Title order={3} mb="xl">
        Your final wishes
      </Title>
      <Text weight="bold">{title}</Text>
      <Text>{description}</Text>
    </Paper>
  )
}
