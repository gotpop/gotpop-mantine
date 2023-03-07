import { Step1 } from "@/components/MultiStepForm/Step1"
import { Step2 } from "@/components/MultiStepForm/Step2"
import { Step3 } from "@/components/MultiStepForm/Step3"
import { Step4 } from "@/components/MultiStepForm/Step4"
import { Stepper } from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"
import { useStyles } from "./MultiStepForm.styles"
import { StepControls } from "./StepControls/StepControls"
import { useMultiStep } from "@/hooks/useMultiStep"
import { useSubmit } from "@/hooks/useSubmit"

export const MultiStepForm = () => {
  const { classes } = useStyles()
  const { handleSubmit, isLoading } = useSubmit()
  const { form, active, nextStep, prevStep, handleActive } = useMultiStep()

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stepper
        active={active}
        breakpoint="sm"
        size="md"
        onStepClick={(stepIndex) => handleActive(stepIndex)}
        contentPadding="xl"
        allowNextStepsSelect={false}
        completedIcon={<IconCheck />}
        classNames={{
          steps: classes.steps,
          root: classes.root
        }}
      >
        <Stepper.Step label="Mission" description="Fight or flight">
          <Step1 form={form} />
        </Stepper.Step>

        <Stepper.Step label="Contact" description="Next of kin">
          <Step2 form={form} />
        </Stepper.Step>

        <Stepper.Step label="Notifcations" description="NFT gravestone">
          <Step3 form={form} />
        </Stepper.Step>

        <Stepper.Step label="Preferences" description="Final wishes" loading={isLoading}>
          <Step4 form={form} />
        </Stepper.Step>
      </Stepper>

      <StepControls active={active} nextStep={nextStep} prevStep={prevStep} isLoading={isLoading} />
    </form>
  )
}
