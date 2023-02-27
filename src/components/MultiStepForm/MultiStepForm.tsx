import { Stepper } from "@mantine/core"
import { useForm } from "@mantine/form"

import { formConfig } from "./form"
import { useStepControl } from "./useStepControl"

import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import StepControls from "./StepControls"

export const MultiStepForm = () => {
  const form = useForm(formConfig)
  const { active, nextStep, prevStep } = useStepControl(form)

  return (
    <>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="Choose a mission" description="Step 1">
          <Step1 form={form} />
        </Stepper.Step>

        <Stepper.Step label="First step" description="Step 2">
          <Step2 form={form} />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Step 3">
          <Step3 form={form} />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Step 4">
          <Step4 form={form} />
        </Stepper.Step>

        <Stepper.Completed>
          <Step5 form={form} />
        </Stepper.Completed>
      </Stepper>

      <StepControls active={active} nextStep={nextStep} prevStep={prevStep} />
    </>
  )
}
