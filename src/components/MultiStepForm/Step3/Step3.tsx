import { Paper, Radio, SimpleGrid } from "@mantine/core"
import { logoData, taglineData, backgroundData } from "./data"
// import { useStyles } from "../useStyles"

type Props = {
  form: any
}

export function Step3({ form }: Props) {
  // const { classes } = useStyles()

  const logoItems = logoData.map((item) => <Radio value={item.value} label={item.label} key={item.id} />)
  const taglineItems = taglineData.map((item) => (
    <Radio value={item.value} label={item.label} key={item.id} />
  ))
  const backgroundItems = backgroundData.map((item) => (
    <Radio value={item.value} label={item.label} key={item.id} />
  ))

  return (
    <>
      <h1>NFT</h1>
      <SimpleGrid
        cols={3}
        w="100%"
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 }
        ]}
      >
        <Paper p="lg" shadow="sm" mb={20}>
          <Radio.Group
            required
            name="chooseALogo"
            label="Choose a logo"
            description="What have you got to lose?"
            offset={40}
            size="md"
            {...form.getInputProps("nft.logo", { type: "checkbox" })}
          >
            {logoItems}
          </Radio.Group>
        </Paper>
        <Paper p="lg" shadow="sm" mb={20}>
          <Radio.Group
            required
            name="chooseATagline"
            label="Choose a tagline"
            description="What have you got to lose?"
            offset={40}
            size="md"
            {...form.getInputProps("nft.tagline", { type: "checkbox" })}
          >
            {taglineItems}
          </Radio.Group>
        </Paper>
        <Paper p="lg" shadow="sm" mb={20}>
          <Radio.Group
            required
            name="chooseABackground"
            label="Choose background"
            description="What have you got to lose?"
            offset={40}
            size="md"
            {...form.getInputProps("nft.background", { type: "checkbox" })}
          >
            {backgroundItems}
          </Radio.Group>
        </Paper>
      </SimpleGrid>
    </>
  )
}
