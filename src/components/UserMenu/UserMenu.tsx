import { useState } from "react"
import { Container, Avatar, UnstyledButton, Group, Text, Menu, Burger } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import {
  IconLogout,
  IconRocket,
  IconSettings,
  IconQuestionMark,
  IconChevronDown,
  IconDeviceAnalytics
} from "@tabler/icons-react"
import { signOut, useSession } from "next-auth/react"
import { useStyles } from "./useStyles"
import Link from "next/link"

export function UserMenu() {
  const { classes, cx } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const { data: session, status } = useSession()

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            offset={1}
          >
            <Menu.Target>
              <UnstyledButton
                component="div"
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar
                    src={session?.user?.image}
                    alt={session?.user?.name as string}
                    radius="xl"
                    size={30}
                  />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {session?.user?.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Link href={"/faqs"} className={classes.link} legacyBehavior>
                <Menu.Item component="span" icon={<IconQuestionMark size={14} stroke={2} />}>
                  FAQs
                </Menu.Item>
              </Link>

              <Menu.Divider />

              <Link href={"/mission-control"} className={classes.link} legacyBehavior>
                <Menu.Item component="span" icon={<IconDeviceAnalytics size={14} stroke={1.5} />}>
                  Mission Control
                </Menu.Item>
              </Link>
              <Link href={"/mission-control/preflight"} className={classes.link} legacyBehavior>
                <Menu.Item component="span" icon={<IconRocket size={14} stroke={1.5} />}>
                  Preflight
                </Menu.Item>
              </Link>

              <Link href={"/mission-control/profile"} className={classes.link} legacyBehavior>
                <Menu.Item component="span" icon={<IconSettings size={14} stroke={1.5} />}>
                  Profile
                </Menu.Item>
              </Link>

              <Menu.Divider />

              <Menu.Item
                icon={<IconLogout size={14} stroke={1.5} />}
                onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_NEXTAUTH_URL })}
              >
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  )
}
