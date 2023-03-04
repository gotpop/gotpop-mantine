import { Box, Paper, Text, Title } from "@mantine/core"
import { Mission, Prisma } from "@prisma/client"
import { IconBrandFacebook, IconBrandPaypal } from "@tabler/icons-react"
import { headstoneData } from "./data"

type Props = {
  nft: Mission["nft"]
}

export function YourHeadstone({ nft }: Props) {
  const { logo, tagline, background } = { ...nft }

  const logoObj = headstoneData.logo.find(({ key }) => key === logo)
  const taglineObj = headstoneData.tagline.find(({ key }) => key === tagline)
  const backgroundObj = headstoneData.background.find(({ key }) => key === background)

  return (
    <>
      <Paper p="xl" style={{ gap: "1rem", height: "100%", flex: "1" }}>
        <Title order={4} mb="xl">
          Your headstone
          <IconBrandPaypal />
          <IconBrandFacebook />
        </Title>

        <Paper>
          <Text weight="lighter">Logo</Text>
          <Text>{logoObj?.title}</Text>
          <Text fs="italic">{logoObj?.description}</Text>
        </Paper>
        <Paper>
          <Text weight="lighter">Tag line</Text>
          <Text>{taglineObj?.title}</Text>
          <Text fs="italic">{taglineObj?.description}</Text>
        </Paper>
        <Paper>
          <Text weight="lighter">Background</Text>
          <Text>{backgroundObj?.title}</Text>
          <Text fs="italic">{backgroundObj?.description}</Text>
        </Paper>
      </Paper>
    </>
  )
}
