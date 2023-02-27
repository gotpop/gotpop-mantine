import { Container, Group, Header } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { useSession } from "next-auth/react"
import { ConditionalWrapper } from "../ConditionalWrapper"
import { Logo } from "../Logo"
import { UserMenu } from "../UserMenu"
import { useStyles } from "./useStyles"

export function HeaderItem({ wrapperCondition = false }) {
  const { data: session, status } = useSession()
  const { classes } = useStyles()

  const login = () => (
    <NextLink href="/login" color="gray" legacyBehavior className={classes.link}>
      Join us
    </NextLink>
  )

  return (
    <Header height={60} p="md" fixed={false} className={classes.header}>
      <ConditionalWrapper
        condition={wrapperCondition}
        wrapper={(children) => (
          <Container size={1200} className={classes.inner}>
            {children}
          </Container>
        )}
      >
        <>
          <Logo />
          <Group position="right">
            {session ? null : login()}
            <UserMenu />
          </Group>
        </>
      </ConditionalWrapper>
    </Header>
  )
}
