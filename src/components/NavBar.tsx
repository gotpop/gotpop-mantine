import { Navbar } from "@mantine/core"
import { NextLink } from "@mantine/next"

export default function NavBarItem() {
  return (
    <Navbar width={{ base: 300 }} height={"100vh"} p="xs">
      {/* Navbar content */}

      <NextLink href="/" color="gray" legacyBehavior>
        Home
      </NextLink>
      <NextLink href="/about" color="gray" legacyBehavior>
        About
      </NextLink>
      <NextLink href="/users" color="gray" legacyBehavior>
        Users
      </NextLink>
    </Navbar>
  )
}
