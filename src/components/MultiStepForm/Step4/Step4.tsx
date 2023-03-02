import { Code, Container, Paper, Radio, TextInput } from "@mantine/core"
import { finalWishData } from "./data"
// import { useStyles } from "../useStyles"

type Props = {
  form: any
}

export function Step4({ form }: Props) {
  // const { classes } = useStyles()

  const finalWishItems = finalWishData.map((wish) => (
    <Radio key={wish.id} value={wish.value} label={wish.label} />
  ))

  return (
    <>
      <Paper p="lg" shadow="sm" mb={20}>
        <Radio.Group
          required
          name="finalWish"
          label="Choose a tagline"
          description="What have you got to lose?"
          offset={40}
          size="md"
          {...form.getInputProps("finalWish", { type: "checkbox" })}
        >
          {finalWishItems}
        </Radio.Group>
      </Paper>
    </>
  )
}
