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
import { NextLink } from "@mantine/next"

export function UserMenu() {
  const { classes, theme, cx } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
  const [userMenuOpened, setUserMenuOpened] = useState(false)
  const { data: session, status } = useSession()

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}

          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
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
              <NextLink href={"/faqs"} legacyBehavior>
                <Menu.Item
                  component="span"
                  icon={<IconQuestionMark size={14} color={theme.colors.red[6]} stroke={1.5} />}
                >
                  FAQs
                </Menu.Item>
              </NextLink>

              <Menu.Divider />

              <NextLink href={"/mission-control"} legacyBehavior>
                <Menu.Item
                  component="span"
                  icon={<IconDeviceAnalytics size={14} color={theme.colors.red[6]} stroke={1.5} />}
                >
                  Mission Control
                </Menu.Item>
              </NextLink>
              <NextLink href={"/mission-control/onboarding"} legacyBehavior>
                <Menu.Item
                  component="span"
                  icon={<IconRocket size={14} color={theme.colors.green[6]} stroke={1.5} />}
                >
                  Onboarding
                </Menu.Item>
              </NextLink>

              <Menu.Divider />

              <NextLink href={"/mission-control/onboarding"} legacyBehavior>
                <Menu.Item component="span" icon={<IconSettings size={14} stroke={1.5} />}>
                  Account settings
                </Menu.Item>
              </NextLink>

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
