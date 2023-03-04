import { Box, Paper, Table, Text, Title } from "@mantine/core"
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

  const elements = [{ position: logoObj?.title, mass: taglineObj?.title, name: backgroundObj?.title }]

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.mass}</td>
      <td>{element.name}</td>
    </tr>
  ))

  return (
    <Paper p="xl" style={{ gap: "1rem", height: "100%", flex: "1" }}>
      <Title
        order={3}
        mb="xl"
        style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "space-between" }}
      >
        Your NFT gravestone
        <IconBrandPaypal />
      </Title>

      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Tagline</th>
            <th>Background</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Paper>
  )
}
