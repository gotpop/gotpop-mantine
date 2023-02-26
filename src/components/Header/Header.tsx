import { Container, Group, Header } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { useSession } from "next-auth/react"
import { Logo } from "../Logo"
import { useStyles } from "./useStyles"

export function HeaderItem() {
  const { data: session, status } = useSession()
  console.log("session :", session)
  const { classes } = useStyles()

  const login = () => (
    <NextLink href="/login" color="gray" legacyBehavior className={classes.link}>
      Login
    </NextLink>
  )

  const account = () => (
    <NextLink href="/account" color="gray" legacyBehavior className={classes.link}>
      Account
    </NextLink>
  )

  return (
    <Header height={60} p="md">
      <Container size={1200} p={0} className={classes.inner}>
        <Logo />
        <Group position="right">
          {session ? account() : login()}
          <NextLink href="/articles" color="gray" legacyBehavior className={classes.link}>
            Articles
          </NextLink>
        </Group>
      </Container>
    </Header>
  )
}
