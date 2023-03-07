import { Checkbox, SimpleGrid, Text, Title } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { FormValues } from "../form"
import { contactsData } from "./data"
import { useStyles } from "./Step2.styles"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step2({ form }: Props) {
  const { classes } = useStyles()

  const checks = contactsData.map(({ id, label }, index: number) => (
    <Checkbox
      {...form.getInputProps(`contacts.${index}.active`, { type: "checkbox" })}
      key={id}
      label={label}
      error={form.errors.contacts ? <></> : null}
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
