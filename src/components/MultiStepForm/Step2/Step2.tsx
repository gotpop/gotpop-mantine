import { Title, Text, SimpleGrid, Checkbox } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { contactsData } from "./data"
// import { useStyles } from "../useStyles"

type Props = {
  form: UseFormReturnType<any>
}

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
      <Title order={3} mb={20}>
        Step 2
      </Title>
      <Text size="lg" mb={50}>
        Corporate responsibility
      </Text>
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
