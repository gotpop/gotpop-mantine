import {
  Text,
  Paper,
  Group,
  PaperProps,
  Badge,
  TextInput,
  PasswordInput,
  Button,
  Divider,
  Stack
} from "@mantine/core"

import { GoogleButton } from "../SocialButtons"
import { GitHubButton } from "../SocialButtons/SocialButtons"

import { useForm } from "@mantine/form"
import { signIn, useSession } from "next-auth/react"
import { FormEventHandler } from "react"

export function AuthenticationForm(props: PaperProps) {
  const { status } = useSession()

  const form = useForm({
    initialValues: {
      email: "",
      password: ""
    }
  })

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    // await signIn("username-login", { email: "test@test.com", password: "password" })

    await signIn("credentials", {
      email: form.values.email,
      password: form.values.password,
      redirect: false
    })
  }

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      {status === "authenticated" && (
        <Badge variant="gradient" gradient={{ from: "teal", to: "lime" }}>
          Authenticated
        </Badge>
      )}

      {status === "unauthenticated" && (
        <Badge variant="gradient" gradient={{ from: "orange", to: "red" }}>
          Unauthenticated
        </Badge>
      )}

      <Text size="lg" weight={500}>
        Welcome to SpaceX, login with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GitHubButton radius="xl">GitHub</GitHubButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={(e) => handleSubmit(e)}>
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@spacex.com"
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
        </Stack>

        <Group position="apart" mt="xl">
          <Button type="submit" radius="xl">
            Submit
          </Button>
        </Group>
      </form>
    </Paper>
  )
}
