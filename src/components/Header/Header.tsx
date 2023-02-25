import { Container, Group, Header } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { Logo } from "../Logo"
import { useStyles } from "./useStyles"

export function HeaderItem() {
  const { classes } = useStyles()

  return (
    <Header height={60} p="md">
      <Container size={1200} p={0} className={classes.inner}>
        <Logo />
        <Group position="right">
          <NextLink href="/" color="gray" legacyBehavior className={classes.link}>
            Home
          </NextLink>
          <NextLink href="/login" color="gray" legacyBehavior className={classes.link}>
            Login
          </NextLink>
          <NextLink href="/users" color="gray" legacyBehavior className={classes.link}>
            Users
          </NextLink>
          <NextLink href="/articles" color="gray" legacyBehavior className={classes.link}>
            Articles
          </NextLink>
        </Group>
      </Container>
    </Header>
  )
}
