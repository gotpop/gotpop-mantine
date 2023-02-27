import { Code, TextInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

export default function Step5({ form }: Props) {
  const { classes } = useStyles()

  return (
    <>
      Completed! Form values:
      <Code block mt="xl">
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </>
  )
}
