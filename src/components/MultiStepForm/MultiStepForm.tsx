import { Step1 } from "@/components/MultiStepForm/Step1"
import { Step2 } from "@/components/MultiStepForm/Step2"
import { Step3 } from "@/components/MultiStepForm/Step3"
import { Step4 } from "@/components/MultiStepForm/Step4"
import NotificationContext from "@/context/notificationContext"
import { Stepper } from "@mantine/core"
import { Mission } from "@prisma/client"
import { IconCheck } from "@tabler/icons-react"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { useStyles } from "./MultiStepForm.styles"
import { StepControls } from "./StepControls/StepControls"
import { useMultiStep } from "./useMultiStep"
import { useSubmit } from "./useSubmit"

export const MultiStepForm = () => {
  const notificationCtx = useContext(NotificationContext)
  const { classes } = useStyles()
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState(0)
  const { form } = useMultiStep(active)
  const { handleSubmit } = useSubmit()

  const handleLoading = (loading: boolean) => setIsLoading(loading)
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  useEffect(() => {
    Object.keys(form.errors).map((key) => {
      notificationCtx.error(form.errors[key])
    })
  }, [form, notificationCtx])

  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 4 ? current + 1 : current
    })
    notificationCtx.clear()
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values, handleLoading))}>
      <Stepper
        active={active}
        breakpoint="sm"
        size="md"
        onStepClick={setActive}
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
