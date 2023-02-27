import { useState } from "react"
import {
  Stepper,
  Button,
  Group,
  TextInput,
  PasswordInput,
  Code,
  Radio,
  SimpleGrid,
  Title,
  UnstyledButton,
  createStyles
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { ImageCheckboxes } from "../ImageCheckboxes"

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

export const MultiStepForm = () => {
  const [active, setActive] = useState(0)
  const [value2, setValue] = useState("react")
  const { classes } = useStyles()

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: "",
      radio: "vue"
    },

    validate: (values) => {
      if (active === 1) {
        return {
          username: values.username.trim().length < 6 ? "Username must include at least 6 characters" : null,
          password: values.password.length < 6 ? "Password must include at least 6 characters" : null
        }
      }

      if (active === 2) {
        return {
          name: values.name.trim().length < 2 ? "Name must include at least 2 characters" : null,
          email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email"
        }
      }

      return {}
    }
  })

  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current
      }
      return current < 4 ? current + 1 : current
    })

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  return (
    <>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="Choose a mission" description="Profile settings">
          <>
            <Radio.Group
              value={value2}
              onChange={() => {
                setValue
                form.setFieldValue("radio", "Jane")
                console.log(form.values)
              }}
              name="favoriteFramework"
              label="Select your favorite framework/library"
              description="This is anonymous"
              withAsterisk
              className={classes.radioGroup}
              // {...form.getInputProps("radio")}
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
          {/* <ImageCheckboxes  /> */}
        </Stepper.Step>
        <Stepper.Step label="First step" description="Profile settings">
          <TextInput label="Username" placeholder="Username" {...form.getInputProps("username")} />
          <PasswordInput
            mt="md"
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />
        </Stepper.Step>

        <Stepper.Step label="Second step" description="Personal information">
          <TextInput label="Name" placeholder="Name" {...form.getInputProps("name")} />
          <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps("email")} />
        </Stepper.Step>

        <Stepper.Step label="Final step" description="Social media">
          <TextInput label="Website" placeholder="Website" {...form.getInputProps("website")} />
          <TextInput mt="md" label="GitHub" placeholder="GitHub" {...form.getInputProps("github")} />
        </Stepper.Step>
        <Stepper.Completed>
          Completed! Form values:
          <Code block mt="xl">
            {JSON.stringify(form.values, null, 2)}
          </Code>
        </Stepper.Completed>
      </Stepper>

      <Group position="right" mt="xl">
        {active !== 0 && (
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
        )}
        {active !== 4 && <Button onClick={nextStep}>Next step</Button>}
      </Group>
    </>
  )
}
