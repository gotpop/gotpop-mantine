import { Paper, Table, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { IconBrandPaypal } from "@tabler/icons-react"
import { headstoneData } from "./data"

type Props = {
  nft: Mission["nft"]
}

export function YourHeadstone({ nft }: Props) {
  const { logo, tagline, background } = { ...nft }

  const logoObj = headstoneData.logo.find(({ key }) => key === logo)
  const taglineObj = headstoneData.tagline.find(({ key }) => key === tagline)
  const backgroundObj = headstoneData.background.find(({ key }) => key === background)

  const items = [
    {
      logo: logoObj?.title,
      tagline: taglineObj?.title,
      background: backgroundObj?.title
    }
  ]

  const rows = items.map(({ logo, tagline, background }, i) => (
    <tr key={i}>
      <td>{logo}</td>
      <td>{tagline}</td>
      <td>{background}</td>
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
