import { Paper, Radio } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { FormValues } from "../form"
import { finalWishData } from "./data"

type Props = {
  form: UseFormReturnType<FormValues>
}
export function Step4({ form }: Props) {
  const err = form.errors.finalWish

  const finalWishItems = finalWishData.map(({ id, value, label }) => (
    <Radio key={id} value={value} label={label} error={err ? <></> : null} />
  ))

  return (
    <>
      <Paper p="lg" shadow="sm" mb={20}>
        <Radio.Group
          {...form.getInputProps("finalWish")}
          description="What have you got to lose?"
          error={<></>}
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
