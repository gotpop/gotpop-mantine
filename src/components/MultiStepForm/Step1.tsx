import { Box, Center, Group, Overlay, Radio, RingProgress, SimpleGrid, Text, Title } from "@mantine/core"
import { IconCheck, IconSkull } from "@tabler/icons-react"
import { imgPaths } from "@/utils/imgPaths"
import { useStyles } from "./useStep1Styles"

type Props = {
  form: any
}

const radioData = [
  {
    id: 1,
    value: "launch",
    label: "Mars Test Launch",
    description:
      "In the tech world we like to say 'move fast and break things' ... only this time we're talking about you.",
    img: imgPaths.img2,
    stat: {
      label: "Heroic deaths",
      stats: "85%",
      progress: 85,
      color: "red",
      icon: "up"
    }
  },
  {
    id: 2,
    value: "ng",
    label: "Mars Orbit",
    description: "If the radiation doesn't get you then talking about Tesla for over 6 months will.",
    img: imgPaths.img4,
    stat: {
      label: "Heroic deaths",
      stats: "79%",
      progress: 79,
      color: "red",
      icon: "up"
    }
  },
  {
    id: 3,
    value: "vue",
    label: "Mars Landing",
    description: "You're alone. You drink recycled urine. This is your life.",
    img: imgPaths.img3,
    stat: {
      label: "Heroic deaths",
      stats: "67%",
      progress: 67,
      color: "red",
      icon: "down"
    }
  }
]

const RadioItem = ({ value, label, description, img, stat }: any) => {
  const { classes } = useStyles(img)

  return (
    <Radio
      value={value}
      classNames={{
        root: classes.root,
        label: classes.label,
        body: classes.body,
        inner: classes.inner,
        labelWrapper: classes.labelWrapper,
        radio: classes.radio
      }}
      icon={IconCheck}
      label={
        <>
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Box className={classes.box}>
            <Title order={1} color="white">
              {label}
            </Title>
            <Text color="white" size="sm">
              {description}
            </Text>
          </Box>

          <Group>
            <RingProgress
              size={100}
              roundCaps
              thickness={10}
              sections={[{ value: stat.progress, color: stat.color }]}
              label={<Center>{<IconSkull color="white" size={40} stroke={1.5} />}</Center>}
            />

            <Box className={classes.box}>
              <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                {stat.label}
              </Text>
              <Text weight={700} color="white" size="xl">
                {stat.stats}
              </Text>
            </Box>
          </Group>
        </>
      }
    />
  )
}

export default function Step1({ form }: Props) {
  const items = radioData.map((item) => <RadioItem {...item} key={item.id} />)

  return (
    <Radio.Group
      required
      defaultValue="vue"
      defaultChecked={false}
      name="chooseAMission"
      label="Choose the mission of a lifetime"
      description="This is anonymous"
      withAsterisk
      size="xl"
      {...form.getInputProps("missionType", { type: "checkbox" })}
    >
      <SimpleGrid
        cols={3}
        w="100%"
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 }
        ]}
      >
        {items}
      </SimpleGrid>
    </Radio.Group>
  )
}
