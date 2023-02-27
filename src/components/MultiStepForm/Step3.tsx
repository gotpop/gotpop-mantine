import { Container, TextInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

export default function Step3({ form }: Props) {
  const { classes } = useStyles()
  return (
    <Container size={400}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps("name")} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps("email")} />
    </Container>
  )
}
