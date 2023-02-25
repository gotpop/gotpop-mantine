import { Navbar, NavLink } from "@mantine/core"
import { NextLink } from "@mantine/next"
import { IconHome2 } from "@tabler/icons-react"
import { useStyles } from "./useStyles"

export function NavBarItem() {
  const { classes } = useStyles()

  return (
    <Navbar width={{ base: 200 }} height={"100vh"}>
      <NextLink href="/" color="gray" legacyBehavior className={classes.navLink}>
        <NavLink label="Home" icon={<IconHome2 size={16} stroke={1.5} />} />
      </NextLink>
      <NextLink href="/users" color="gray" legacyBehavior className={classes.navLink}>
        <NavLink label="Users" icon={<IconHome2 size={16} stroke={1.5} />} />
      </NextLink>
      <NextLink href="/articles" color="gray" legacyBehavior className={classes.navLink}>
        <NavLink label="Articles" icon={<IconHome2 size={16} stroke={1.5} />} />
      </NextLink>
    </Navbar>
  )
}
