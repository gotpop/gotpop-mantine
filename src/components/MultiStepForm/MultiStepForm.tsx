import { Stepper } from "@mantine/core"
import { useForm } from "@mantine/form"
import { Mission } from "@prisma/client"
import axios from "axios"

import { formConfig } from "./form"
import { useStepControl } from "./useStepControl"

import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import Step5 from "./Step5"
import StepControls from "./StepControls"

type Values = {
  username: string
  password: string
  name: string
  email: string
  website: string
  github: string
  missionType: string
}

export const MultiStepForm = () => {
  const form = useForm(formConfig)
  const { active, nextStep, prevStep } = useStepControl(form)

  const handleSubmit = async (values: Values) => {
    console.log(values)
    axios.post("/api/mission", values)
  }

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stepper active={active} breakpoint="sm">
          <Stepper.Step label="Mission" description="Step 1">
            <Step1 form={form} />
          </Stepper.Step>

          <Stepper.Step label="Final wishes" description="Step 2">
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
      </form>
    </>
  )
}
