import { TextInput, PasswordInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

export default function Step2({ form }: Props) {
  const { classes } = useStyles()
  return (
    <>
      <TextInput label="Username" placeholder="Username" {...form.getInputProps("username")} />
      <PasswordInput mt="md" label="Password" placeholder="Password" {...form.getInputProps("password")} />
    </>
  )
}
