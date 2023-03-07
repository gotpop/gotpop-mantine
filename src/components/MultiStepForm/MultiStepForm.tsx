import { Step1 } from "@/components/MultiStepForm/Step1"
import { Step2 } from "@/components/MultiStepForm/Step2"
import { Step3 } from "@/components/MultiStepForm/Step3"
import { Step4 } from "@/components/MultiStepForm/Step4"
import { Stepper } from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"
import { useState } from "react"
import { useStyles } from "./MultiStepForm.styles"
import { StepControls } from "./StepControls/StepControls"
import { useHandleSteps } from "./useHandleSteps"
import { useMultiStep } from "./useMultiStep"
import { useSubmit } from "./useSubmit"

export const MultiStepForm = () => {
  const { classes } = useStyles()
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit } = useSubmit()

  const handleLoading = (loading: boolean) => setIsLoading(loading)

  const { form, active, nextStep, prevStep, handleActive } = useMultiStep()

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values, handleLoading))}>
      <Stepper
        active={active}
        breakpoint="sm"
        size="md"
        onStepClick={handleActive}
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
