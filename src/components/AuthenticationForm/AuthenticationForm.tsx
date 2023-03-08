import { Text, Paper, Group, PaperProps } from "@mantine/core"

import { GoogleButton } from "../SocialButtons"
import { GitHubButton } from "../SocialButtons/SocialButtons"

import { useToggle, upperFirst } from "@mantine/hooks"
import { useForm } from "@mantine/form"
import { TextInput, PasswordInput, Button, Divider, Checkbox, Anchor, Stack } from "@mantine/core"
import { signIn, useSession } from "next-auth/react"
import { FormEventHandler, useState } from "react"

export function AuthenticationForm(props: PaperProps) {
  const { status } = useSession()
  const [type, toggle] = useToggle(["login", "register"])
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    }

    // validate: {
    //   email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    //   password: (val) => (val.length <= 5 ? "Password should include at least 6 characters" : null)
    // }
  })

  const [userInfo, setUserInfo] = useState({ email: "", password: "" })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    console.log("handleSubmit")
    e.preventDefault()

    const res = await signIn("credentials", {
      email: "test@test.com",
      password: "password",
      // email: userInfo.email,
      // password: userInfo.password,
      redirect: false
    })

    console.log(res)
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to SpaceX, login with
      </Text>

      <h1>{status}</h1>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GitHubButton radius="xl">GitHub</GitHubButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && "Password should include at least 6 characters"}
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor component="button" type="button" color="dimmed" onClick={() => toggle()} size="xs">
            {type === "register" ? "Already have an account? Login" : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
