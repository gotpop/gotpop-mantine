import { Code, Container, Paper, Radio, TextInput } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { useState } from "react"
import { FormValues } from "../MultiStepForm"
import { finalWishData } from "./data"
// import { useStyles } from "../useStyles"

type Props = {
  form: UseFormReturnType<FormValues>
}
export function Step4({ form }: Props) {
  // const { classes } = useStyles()
  const [value, setValue] = useState("")

  const finalWishItems = finalWishData.map((wish) => (
    <Radio key={wish.id} value={wish.value} label={wish.label} />
  ))

  return (
    <>
      <Paper p="lg" shadow="sm" mb={20}>
        <Radio.Group
          {...form.getInputProps("finalWish")}
          description="What have you got to lose?"
          error={form.errors.finalWish}
          label="Choose a tagline"
          name="finalWish"
          offset={40}
          orientation="vertical"
          required
          size="md"
        >
          {finalWishItems}
        </Radio.Group>
      </Paper>
    </>
  )
}
