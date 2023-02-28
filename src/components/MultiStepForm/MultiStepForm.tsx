import { Button, createStyles, Group, MantineTheme, Stepper } from "@mantine/core"
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
import { IconCheck, IconChevronLeft, IconChevronRight, IconRocket } from "@tabler/icons-react"

import { useState } from "react"
import { useRouter } from "next/router"

type Values = {
  username: string
  password: string
  name: string
  email: string
  website: string
  github: string
  missionType: string
}

export const useStyles = createStyles((theme: MantineTheme) => ({
  steps: {
    marginBottom: theme.spacing.xl
  }
}))

export const MultiStepForm = () => {
  const router = useRouter()
  const { classes } = useStyles()
  // const { active, nextStep, prevStep } = useStepControl(form)
  const form = useForm(formConfig)
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState(1)

  const handleSubmit = async (values: Values) => {
    setIsLoading(true)
    await axios.post("/api/mission", values)
    setIsLoading(false)

    router.push("/mission-control")
  }

  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current))
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Stepper
          active={active}
          breakpoint="sm"
          size="md"
          onStepClick={setActive}
          contentPadding="xl"
          allowNextStepsSelect={false}
          completedIcon={<IconCheck />}
          classNames={{
            steps: classes.steps
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

          <Stepper.Completed>
            <Step5 form={form} />
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          {active !== 0 && (
            <Button size="xl" variant="default" onClick={prevStep} leftIcon={<IconChevronLeft />}>
              Back
            </Button>
          )}
          {active !== 4 && (
            <Button size="xl" onClick={nextStep} rightIcon={<IconChevronRight />}>
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
              rightIcon={<IconRocket />}
            >
              Go!
            </Button>
          )}
        </Group>

        {/* <StepControls active={active} nextStep={nextStep} prevStep={prevStep} isLoading={isLoading} /> */}
      </form>
    </>
  )
}
