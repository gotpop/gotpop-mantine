import { Box, Paper, Table, Title } from "@mantine/core"
import { Mission } from "@prisma/client"
import { useStyles } from "../DashBoardWidgets.styles"
import { headstoneData } from "./data"

type Props = {
  nft: Mission["nft"]
}

export function YourHeadstone({ nft }: Props) {
  const { logo, tagline, background } = { ...nft }
  const { classes } = useStyles()

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
    <Paper p="xl" className={classes.paper}>
      <Box className={classes.content}>
        <Title order={3} mb="xl">
          Your NFT gravestone
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
      </Box>
    </Paper>
  )
}
