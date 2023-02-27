import { Button, Code, Group, TextInput } from "@mantine/core"
import { useStyles } from "./useStyles"

type Props = {
  active: number
  nextStep: () => void
  prevStep: () => void
}

export default function StepControls({ active, nextStep, prevStep }: Props) {
  const { classes } = useStyles()

  return (
    <Group position="right" mt="xl">
      {active !== 0 && (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 4 && <Button onClick={nextStep}>Next step</Button>}
    </Group>
  )
}