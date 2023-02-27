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

  console.log("status :", status)

  const login = () => (
    <NextLink href="/login" color="gray" legacyBehavior className={classes.link}>
      Join us
    </NextLink>
  )

  const account = () => (
    <NextLink href="/mission-control" color="gray" legacyBehavior className={classes.link}>
      Mission Control
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
            {session ? account() : login()}
            <NextLink href="/faqs" color="gray" legacyBehavior className={classes.link}>
              Faqs
            </NextLink>
            <UserMenu />
          </Group>
        </>
      </ConditionalWrapper>
    </Header>
  )
}
