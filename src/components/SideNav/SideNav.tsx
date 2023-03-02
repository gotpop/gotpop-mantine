import { FC } from "react"
import Link from "next/link"
import { useDisclosure } from "@mantine/hooks"
import { Navbar, Group, UnstyledButton, Tooltip, MediaQuery } from "@mantine/core"
import {
  IconArrowLeft,
  IconArrowRight,
  IconDeviceAnalytics,
  IconRocket,
  IconRobot
} from "@tabler/icons-react"
import { useStyles } from "./useStyles"
import { useRouter } from "next/router"

const ITEMS = [
  { id: 1, href: "/mission-control/onboarding", label: "Onboarding", Icon: IconRocket },
  { id: 2, href: "/mission-control/profile", label: "Profile", Icon: IconRobot }
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(false)
  const { classes, cx } = useStyles({ collapsed })
  const router = useRouter()

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Tooltip
            label={"Mission Dashboard"}
            disabled={!collapsed}
            position="right"
            withArrow
            sx={{ width: "160px" }}
          >
            <Link
              href="/mission-control"
              className={cx(classes.link, { [classes.linkActive]: router.asPath == "/mission-control" })}
            >
              <IconDeviceAnalytics />
              <span className={classes.linkLabel}>Mission Dashboard</span>
            </Link>
          </Tooltip>
        </Group>
        {ITEMS.map(({ id, label, href, Icon }) => (
          <Tooltip
            key={label}
            label={label}
            disabled={!collapsed}
            position="right"
            withArrow
            sx={{ width: "110px" }}
          >
            <Link
              key={id}
              href={href}
              className={cx(classes.link, { [classes.linkActive]: router.asPath == href })}
            >
              <Icon className={classes.linkIcon} />
              <span className={classes.linkLabel}>{label}</span>
            </Link>
          </Tooltip>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <IconArrowRight className={classes.linkIcon} />
            ) : (
              <>
                <IconArrowLeft className={classes.linkIcon} />
                <span>Close</span>
              </>
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  )
}
