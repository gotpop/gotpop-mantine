import { Code, Radio, TextInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  form: any
}

export default function Step5({ form }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Radio.Group
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description="This is anonymous"
        orientation="vertical"
        spacing="xl"
        offset="xl"
        withAsterisk
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>
      <Code block mt="xl">
        {JSON.stringify(form.values, null, 2)}
      </Code>
    </>
  )
}
