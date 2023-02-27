import { FC } from "react"
import Link from "next/link"
import { useDisclosure } from "@mantine/hooks"
import { createStyles, Navbar, Group, UnstyledButton, Tooltip, MediaQuery } from "@mantine/core"
import {
  IconHome,
  IconSettings,
  IconArrowLeft,
  IconArrowRight,
  IconDeviceAnalytics
} from "@tabler/icons-react"
import { NextLink } from "@mantine/next"
import { UserInfoIcons } from "./UserInfoIcons"

const useStyles = createStyles<string, { collapsed?: boolean }>((theme, params, getRef) => {
  const icon: string = getRef("icon")

  return {
    navbar: {
      position: "sticky",
      top: 0,
      width: params?.collapsed ? 81 : 264,
      transition: params?.collapsed ? "width 0.1s linear" : "none"
    },

    header: {
      paddingBottom: theme.spacing.xs,
      marginBottom: theme.spacing.md,
      borderBottom: `1px solid ${theme.colors.gray[2]}`
    },

    footer: {
      paddingTop: theme.spacing.xs,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`
    },

    logo: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 700
    },

    link: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black
        }
      }
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][7]
        }
      }
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6]
    },

    linkLabel: params?.collapsed ? { display: "none" } : {}
  }
})

const ITEMS = [
  { id: 1, href: "/mission-control", label: "My Mission", Icon: IconHome },
  { id: 2, href: "/mission-control/onboarding", label: "Onboarding", Icon: IconSettings },
  { id: 3, href: "/mission-control/profile", label: "Profile", Icon: IconSettings },
  { id: 4, href: "/mission-control/settings", label: "Settings", Icon: IconSettings }
]

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(false)
  const { classes, cx } = useStyles({ collapsed })

  return (
    <Navbar p="md" className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link href={"/mission-control"} className={classes.link}>
            <IconDeviceAnalytics />
            <span className={classes.linkLabel}>Mission Dashboard</span>
          </Link>
        </Group>
        {ITEMS.map(({ id, label, href, Icon }) => (
          <NextLink key={id} href={href} legacyBehavior className={classes.link}>
            <Icon className={classes.linkIcon} />
            <span className={classes.linkLabel}>{label}</span>
          </NextLink>
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
