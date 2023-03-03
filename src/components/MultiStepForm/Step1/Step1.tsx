import { Radio, SimpleGrid, Notification } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { IconX } from "@tabler/icons-react"
import { FormValues } from "../MultiStepForm"
import { radioData } from "./data"
import { RadioItem } from "./RadioItem"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step1({ form }: Props) {
  const items = radioData.map((item) => <RadioItem {...item} key={item.id} />)

  return (
    <Radio.Group
      {...form.getInputProps("missionType")}
      description="What have you got to lose?"
      error={
        form.errors.missionType && (
          <Notification mt={20} disallowClose icon={<IconX size="1.1rem" />} color="red">
            {form.errors.missionType}
          </Notification>
        )
      }
      label="Choose the mission of a lifetime"
      name="chooseAMission"
      offset={40}
      // inputWrapperOrder={["description", "label", "input", "error"]}
      required
      size="xl"
    >
      <SimpleGrid
        cols={3}
        w="100%"
        spacing="lg"
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 }
        ]}
      >
        {items}
      </SimpleGrid>
    </Radio.Group>
  )
}
