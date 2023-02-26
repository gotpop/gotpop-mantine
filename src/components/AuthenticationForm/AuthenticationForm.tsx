import { Text, Paper, Group, PaperProps } from "@mantine/core"

import { GoogleButton } from "../SocialButtons"
import { GitHubButton } from "../SocialButtons/SocialButtons"

export function AuthenticationForm(props: PaperProps) {
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to SpaceX, login with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        <GitHubButton radius="xl">GitHub</GitHubButton>
      </Group>
    </Paper>
  )
}
