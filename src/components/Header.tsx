import { Button, Header, Title } from "@mantine/core"
import { useEventListener, useToggle } from "@mantine/hooks"
import { NextLink } from "@mantine/next"
import { useState } from "react"

export default function HeaderItem() {
  return (
    <Header height={60} p="md">
      <NextLink href={"/"} legacyBehavior>
        <Title order={3}>Interview</Title>
      </NextLink>
    </Header>
  )
}
