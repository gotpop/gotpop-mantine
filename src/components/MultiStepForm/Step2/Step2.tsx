import { Title, Text, SimpleGrid, Checkbox } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
// import { useStyles } from "../useStyles"

type Props = {
  form: UseFormReturnType<any>
}

const contactsData = [
  {
    id: "1",
    active: false,
    title: "Your accountant",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "2",
    active: false,
    title: "The admin of your Mincraft server",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "3",
    active: false,
    title: "Your Uber Eats driver",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "4",
    active: false,
    title: "Tescos self service checkout",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "5",
    active: false,
    title: "The guy who aproved your pr with a rocket emoji",
    description: "Core components library: inputs, buttons, overlays, etc."
  },
  {
    id: "6",
    active: false,
    title: "@mantine/core",
    description: "Core components library: inputs, buttons, overlays, etc."
  }
]

export function Step2({ form }: Props) {
  // const { classes } = useStyles()

  const checks = contactsData.map((item, index: number) => (
    <Checkbox
      {...form.getInputProps(`contacts.${index}.active`, { type: "checkbox" })}
      key={item.id}
      label={item.title}
    />
  ))

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
