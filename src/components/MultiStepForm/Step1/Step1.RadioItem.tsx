import { Box, Center, Group, Overlay, Radio, RingProgress, Text, Title } from "@mantine/core"
import { IconCheck, IconSkull } from "@tabler/icons-react"
import { useStyles } from "./Step1.styles"

type Props = {
  value: string
  label: string
  description: string
  img: string
  stat: {
    label: string
    stats: string
    progress: number
    color: string
  }
}

export const RadioItem = ({ value, label, description, img, stat }: Props) => {
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
