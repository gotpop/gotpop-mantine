import { TextInput, PasswordInput, Container, Title, Text, SimpleGrid } from "@mantine/core"
import { CheckboxCard } from "./CheckboxCard"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

const thData = [
  {
    id: "1",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "2",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "3",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "4",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "5",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "6",
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  }
]

export default function Step2({ form }: Props) {
  const { classes } = useStyles()

  const checks = thData.map((item, index) => <CheckboxCard key={item.id} {...item} />)

  return (
    <>
      <Title order={3}>Step 2</Title>
      <Text size="lg">Corporate responsibility</Text>
      <SimpleGrid
        cols={2}
        w="100%"
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 }
        ]}
      >
        {checks}
      </SimpleGrid>
    </>
  )
}
