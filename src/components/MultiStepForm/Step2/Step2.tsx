import { Title, Text, SimpleGrid, Checkbox, Box } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { FormValues } from "../MultiStepForm"
import { contactsData } from "./data"
import { useStyles } from "./useStyles"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step2({ form }: Props) {
  const { classes } = useStyles()

  const checks = contactsData.map((item, index: number) => (
    <Checkbox
      {...form.getInputProps(`contacts.${index}.active`, { type: "checkbox" })}
      key={item.id}
      label={item.label}
      description={item.description}
      error={form.errors.contacts}
    />
  ))

  return (
    <>
      <Title order={3} mb={20}>
        Corporate responsibility
      </Title>
      <Text size="md" mb="md" className={classes.text}>
        At SpaceX we are committed to the highest standards of corporate responsibility, that&apos;s why in
        the unlikely event of a launch failure, we will notify your loved ones of your heroism.
      </Text>
      <Text size="md" mb={50} fs="italic" className={classes.text}>
        Please choose the people closest to you, that you would like to be notified in the event of a
        technical issue.
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
