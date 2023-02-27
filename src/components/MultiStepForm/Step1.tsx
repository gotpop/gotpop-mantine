import { Radio, SimpleGrid, Title, Text } from "@mantine/core"
import React from "react"
import { useStyles } from "./useStep1Styles"

type Props = {
  form: any
}

const radioData = [
  { id: 1, value: "launch", label: "Liam", description: "Chance of survival" },
  { id: 2, value: "ng", label: "Angular", description: "Chance of survival" },
  { id: 3, value: "vue", label: "Vue", description: "Chance of survival" }
]

const RadioItem = ({ value, label, description }: any) => {
  const { classes } = useStyles()

  return (
    <Radio
      value={value}
      classNames={{
        root: classes.root,
        label: classes.label,
        body: classes.body,
        inner: classes.inner,
        labelWrapper: classes.labelWrapper,
        radio: classes.radio
      }}
      label={
        <>
          <Title order={1}>{label}</Title>
          <Text size="xs">{description}</Text>
        </>
      }
    />
  )
}

export default function Step1({ form }: Props) {
  const items = radioData.map((item) => <RadioItem {...item} key={item.id} />)

  return (
    <Radio.Group
      required
      defaultValue="vue"
      defaultChecked={false}
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
      {...form.getInputProps("radio", { type: "checkbox" })}
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
