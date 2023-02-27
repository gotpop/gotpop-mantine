import { TextInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

export default function Step4({ form }: Props) {
  const { classes } = useStyles()
  return (
    <>
      <TextInput label="Website" placeholder="Website" {...form.getInputProps("website")} />
      <TextInput mt="md" label="GitHub" placeholder="GitHub" {...form.getInputProps("github")} />
    </>
  )
}
