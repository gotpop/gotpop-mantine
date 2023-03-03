import { Paper, Radio, SimpleGrid, Title, Text, Notification } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { IconX } from "@tabler/icons-react"
import { FormValues } from "../MultiStepForm"
import { logoData, taglineData, backgroundData } from "./data"
import { useStyles } from "./useStyles"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step3({ form }: Props) {
  const { classes } = useStyles()

  const logoItems = logoData.map((item) => <Radio value={item.value} label={item.label} key={item.id} />)
  const taglineItems = taglineData.map((item) => (
    <Radio value={item.value} label={item.label} key={item.id} />
  ))
  const backgroundItems = backgroundData.map((item) => (
    <Radio value={item.value} label={item.label} key={item.id} />
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
            error={
              form.errors.nftLogo && (
                <Notification mt={20} disallowClose icon={<IconX size="1.1rem" />} color="red">
                  {form.errors.nftLogo}
                </Notification>
              )
            }
            label="Choose a logo"
            name="chooseALogo"
            offset={40}
            orientation="vertical"
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
            error={
              form.errors.nftTagline && (
                <Notification mt={20} disallowClose icon={<IconX size="1.1rem" />} color="red">
                  {form.errors.nftTagline}
                </Notification>
              )
            }
            label="Choose a tagline"
            name="chooseATagline"
            offset={40}
            orientation="vertical"
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
            error={
              form.errors.nftBackground && (
                <Notification mt={20} disallowClose icon={<IconX size="1.1rem" />} color="red">
                  {form.errors.nftBackground}
                </Notification>
              )
            }
            label="Choose background"
            name="chooseABackground"
            offset={40}
            orientation="vertical"
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
