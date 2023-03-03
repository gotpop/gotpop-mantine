import { Notification, Paper, Radio } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { IconX } from "@tabler/icons-react"
import { FormValues } from "../MultiStepForm"
import { finalWishData } from "./data"

type Props = {
  form: UseFormReturnType<FormValues>
}
export function Step4({ form }: Props) {
  const finalWishItems = finalWishData.map((wish) => (
    <Radio key={wish.id} value={wish.value} label={wish.label} />
  ))

  return (
    <>
      <Paper p="lg" shadow="sm" mb={20}>
        <Radio.Group
          {...form.getInputProps("finalWish")}
          description="What have you got to lose?"
          error={
            form.errors.finalWish && (
              <Notification mt={20} disallowClose icon={<IconX size="1.1rem" />} color="red">
                {form.errors.finalWish}
              </Notification>
            )
          }
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
