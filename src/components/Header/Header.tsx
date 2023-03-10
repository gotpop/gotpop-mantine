import { Container, Group, Header } from "@mantine/core"
// import { NextLink } from "@mantine/next"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { ConditionalWrapper } from "../ConditionalWrapper"
import { Logo } from "../Logo"
import { UserMenu } from "../UserMenu"
import { useStyles } from "./useStyles"

export function HeaderItem({ wrapperCondition = false }) {
  const { data: session, status } = useSession()
  const { classes } = useStyles()

  const Login = () => (
    <Link href="/login" color="gray" legacyBehavior className={classes.link}>
      Join us
    </Link>
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
            {status === "loading" ? null : !session ? <Login /> : null}
            {status === "loading" ? null : session ? <UserMenu /> : null}
          </Group>
        </>
      </ConditionalWrapper>
    </Header>
  )
}
