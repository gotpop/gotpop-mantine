import { Code, Container, Paper, Radio, TextInput } from "@mantine/core"
// import { useStyles } from "../useStyles"

type Props = {
  form: any
}

const finalWishData = [
  {
    id: "1",
    value: "wish1",
    label: "Wish 1"
  },
  {
    id: "2",
    value: "wish2",
    label: "Wish 2"
  },
  {
    id: "3",
    value: "wish3",
    label: "Wish 3"
  }
]

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
