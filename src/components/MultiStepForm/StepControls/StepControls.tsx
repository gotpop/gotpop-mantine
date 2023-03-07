import { Button, Group } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { IconChevronLeft, IconChevronRight, IconRocket } from "@tabler/icons-react"
import { FormValues } from "../form"

type Props = {
  active: number
  nextStep: () => void
  prevStep: () => void
  isLoading: boolean
  form: UseFormReturnType<FormValues>
}

export function StepControls({ active, form, nextStep, prevStep, isLoading }: Props) {
  return (
    <Group position="center" mt="xl">
      {active !== 0 && (
        <Button size="lg" variant="default" onClick={prevStep} leftIcon={<IconChevronLeft />}>
          Back
        </Button>
      )}
      {active !== 3 && (
        <Button size="lg" onClick={nextStep} rightIcon={<IconChevronRight />} disabled={!form.isValid()}>
          Next step
        </Button>
      )}
      {active === 3 && (
        <Button
          loading={isLoading}
          type="submit"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          size="lg"
          rightIcon={<IconRocket />}
        >
          Go!
        </Button>
      )}
    </Group>
  )
}
