import { Button, Code, Group, TextInput } from "@mantine/core"
import { useStyles } from "../useStyles"

type Props = {
  active: number
  nextStep: () => void
  prevStep: () => void
  isLoading: boolean
}

export function StepControls({ active, nextStep, prevStep, isLoading }: Props) {
  const { classes } = useStyles()

  return (
    <Group position="center" mt="xl">
      {active !== 0 && (
        <Button size="xl" variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 6 && (
        <Button size="xl" onClick={nextStep}>
          Next step
        </Button>
      )}
      {active === 4 && (
        <Button
          loading={isLoading}
          type="submit"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          size="xl"
        >
          Submit
        </Button>
      )}
    </Group>
  )
}
