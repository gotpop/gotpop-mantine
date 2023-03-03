import { Button, Code, createStyles, Group, MantineTheme, Stepper, Title } from "@mantine/core"
import { isNotEmpty, useForm, UseFormReturnType } from "@mantine/form"
import { Mission } from "@prisma/client"
import axios from "axios"

// import { formConfig } from "./form"
import { useStepControl } from "./StepControls/useStepControl"

import { Step1 } from "@/components/MultiStepForm/Step1"
import { Step2 } from "@/components/MultiStepForm/Step2"
import { Step3 } from "@/components/MultiStepForm/Step3"
import { Step4 } from "@/components/MultiStepForm/Step4"
import { StepControls } from "./StepControls/StepControls"
import { IconCheck, IconChevronLeft, IconChevronRight, IconRocket } from "@tabler/icons-react"

import { useState } from "react"
import { useRouter } from "next/router"
import { useStyles } from "./useStyles"

type MissionNoMeta = Omit<Mission, "id" | "createdAt" | "updatedAt" | "userId">

export type FormValues = {
  missionType: string
  contacts: {
    key: string
    active: boolean
  }[]
  nft: {
    logo: string
    tagline: string
    background: string
  }
  finalWish: string
}

export const MultiStepForm = () => {
  const router = useRouter()
  const { classes } = useStyles()
  const [isLoading, setIsLoading] = useState(false)
  const [active, setActive] = useState(0)
  // const { active, nextStep, prevStep } = useStepControl(form)

  const form = useForm({
    initialValues: {
      missionType: "",
      contacts: [
        {
          key: "1",
          active: false
        },
        {
          key: "2",
          active: false
        },
        {
          key: "3",
          active: false
        },
        {
          key: "4",
          active: false
        },
        {
          key: "5",
          active: false
        },
        {
          key: "6",
          active: false
        }
      ],
      nft: {
        logo: "",
        tagline: "",
        background: ""
      },
      finalWish: ""
    },

    validate: (values) => {
      if (active === 0) {
        return {
          missionType: values.missionType.trim().length < 1 ? "Pick a mission" : null
        }
      }
      if (active === 1) {
        const checkboxes = values.contacts.filter((contact) => contact.active === true)

        return {
          contacts: checkboxes.length < 1 ? "Pick a contact" : null
        }
      }
      if (active === 2) {
        return {
          nftLogo: values.nft.logo.trim().length < 1 ? "Pick a Logo" : null,
          nftTagline: values.nft.tagline.trim().length < 1 ? "Pick a Tagline" : null,
          nftBackground: values.nft.background.trim().length < 1 ? "Pick a Background" : null
        }
      }
      if (active === 3) {
        return {
          finalWish: values.finalWish.trim().length < 1 ? "Pick a final wish" : null
        }
      }

      return {}
    }
  })

  const handleSubmit = async (values: MissionNoMeta) => {
    setIsLoading(true)
    const stringData = JSON.stringify(values)

    await axios.post("/api/mission", stringData, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    setIsLoading(false)
    router.push("/mission-control")
  }

  const nextStep = () => {
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 4 ? current + 1 : current
    })
  }

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

          {/* <Stepper.Completed>
            <Title order={3}>Preflight completed</Title>
          </Stepper.Completed> */}
        </Stepper>

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

        {/* <StepControls active={active} nextStep={nextStep} prevStep={prevStep} isLoading={isLoading} /> */}
      </form>
    </>
  )
}
