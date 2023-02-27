import { UnstyledButton, Checkbox, Text, Image, SimpleGrid, createStyles, Radio, Title } from "@mantine/core"
import { useUncontrolled } from "@mantine/hooks"
// import icons from "./icons"
import { useState } from "react"

const useStyles = createStyles((theme) => ({
  radioGroup: {
    width: "100%"
  },
  button: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    transition: "background-color 150ms ease, border-color 150ms ease",
    minHeight: 400,
    backgroundImage:
      "url(https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80)",
    backgroundSize: "cover",
    backgroundPosition: "top right",
    // border: `1px solid ${
    //   checked
    //     ? theme.fn.variant({ variant: "outline", color: theme.primaryColor }).border
    //     : theme.colorScheme === "dark"
    //     ? theme.colors.dark[8]
    //     : theme.colors.gray[3]
    // }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm
    // backgroundColor: checked
    //   ? theme.fn.variant({ variant: "light", color: theme.primaryColor }).background
    //   : theme.colorScheme === "dark"
    //   ? theme.colors.dark[8]
    //   : theme.white
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md
  }
}))

export function ImageCheckboxes() {
  const [value2, setValue] = useState("react")
  const { classes } = useStyles()

  return (
    <>
      <Radio.Group
        value={value2}
        onChange={setValue}
        name="favoriteFramework"
        label="Select your favorite framework/library"
        description="This is anonymous"
        withAsterisk
        className={classes.radioGroup}
      >
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "sm", cols: 1 }
          ]}
        >
          <UnstyledButton className={classes.button} onClick={() => setValue("svelte")}>
            <Title order={4} size={40} color="white">
              Launch
            </Title>
            <Radio value="svelte" label="Svelte" />
          </UnstyledButton>
          <UnstyledButton className={classes.button} onClick={() => setValue("ng")}>
            <Radio value="ng" label="Angular" />
          </UnstyledButton>
          <UnstyledButton className={classes.button} onClick={() => setValue("vue")}>
            <Radio value="vue" label="Vue" />
          </UnstyledButton>
        </SimpleGrid>
      </Radio.Group>
    </>
  )
}
