import { Radio, SimpleGrid } from "@mantine/core"
import { UseFormReturnType } from "@mantine/form"
import { FormValues } from "../form"
import { radioData } from "./data"
import { RadioItem } from "./Step1.RadioItem"

type Props = {
  form: UseFormReturnType<FormValues>
}

export function Step1({ form }: Props) {
  const items = radioData.map((item) => <RadioItem {...item} key={item.id} />)

  return (
    <Radio.Group
      {...form.getInputProps("missionType")}
      description="What have you got to lose?"
      error={<></>}
      label="Choose the mission of a lifetime"
      name="chooseAMission"
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
