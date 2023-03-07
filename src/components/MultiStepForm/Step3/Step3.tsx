import { Paper, Radio, SimpleGrid, Text, Title } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { FormValues } from "../form"
import { backgroundData, logoData, taglineData } from "./data"
import { useStyles } from "./Step3.styles"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step3({ form }: Props) {
  const { errors } = form
  const { classes } = useStyles()

  const logoItems = logoData.map(({ value, id, label }) => (
    <Radio value={value} label={label} key={id} error={errors.nftLogo ? <></> : null} />
  ))

  const taglineItems = taglineData.map(({ value, id, label }) => (
    <Radio value={value} label={label} key={id} error={errors.nftTagline ? <></> : null} />
  ))

  const backgroundItems = backgroundData.map(({ value, id, label }) => (
    <Radio value={value} label={label} key={id} error={errors.nftBackground ? <></> : null} />
  ))

  return (
    <>
      <Title order={3} mb={20}>
        Custom NFT gravestone
      </Title>
      <Text size="md" mb="md" className={classes.text}>
        If you&apos;re lucky enough to become a SpaceX martyr & epic meme lord, you will be remembered for
        eternity... or at least until the the next crypto crash.
      </Text>
      <Text size="md" mb={50} fs="italic" className={classes.text}>
        So if you pass away don&apos;t look back, live in the future with a custom NFT gravestone!
      </Text>
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
            {...form.getInputProps("nft.logo")}
            description="What have you got to lose?"
            label="Choose a logo"
            name="chooseALogo"
            required
            size="md"
          >
            {logoItems}
          </Radio.Group>
        </Paper>
        <Paper p="lg" shadow="sm" mb={20}>
          <Radio.Group
            {...form.getInputProps("nft.tagline")}
            description="What have you got to lose?"
            label="Choose a tagline"
            name="chooseATagline"
            required
            size="md"
          >
            {taglineItems}
          </Radio.Group>
        </Paper>
        <Paper p="lg" shadow="sm" mb={20}>
          <Radio.Group
            {...form.getInputProps("nft.background")}
            description="What have you got to lose?"
            label="Choose background"
            name="chooseABackground"
            required
            size="md"
          >
            {backgroundItems}
          </Radio.Group>
        </Paper>
      </SimpleGrid>
    </>
  )
}
