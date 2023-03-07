import { Button, Group } from "@mantine/core"
import { IconChevronLeft, IconChevronRight, IconRocket } from "@tabler/icons-react"

type Props = {
  active: number
  nextStep: () => void
  prevStep: () => void
  isLoading: boolean
}

export function StepControls({ active, nextStep, prevStep, isLoading }: Props) {
  return (
    <Group position="center" mt="xl">
      {active !== 0 && (
        <Button size="lg" variant="default" onClick={prevStep} leftIcon={<IconChevronLeft />}>
          Back
        </Button>
      )}
      {active !== 4 && (
        <Button size="lg" onClick={nextStep} rightIcon={<IconChevronRight />}>
          Next step
        </Button>
      )}
      {active === 4 && (
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
