import { Radio, SimpleGrid } from "@mantine/core"
import { radioData } from "./data"
import { RadioItem } from "./RadioItem"

type Props = {
  form: any
}

export function Step1({ form }: Props) {
  const items = radioData.map((item) => <RadioItem {...item} key={item.id} />)

  return (
    <Radio.Group
      required
      defaultValue="vue"
      name="chooseAMission"
      label="Choose the mission of a lifetime"
      description="What have you got to lose?"
      offset={40}
      size="xl"
      {...form.getInputProps("missionType", { type: "checkbox" })}
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
